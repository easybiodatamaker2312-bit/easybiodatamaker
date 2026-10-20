/**
 * Readiness checks and font embedding for exports.
 *
 * Why this exists: next/font defers Indic faces until a glyph needs them, so
 * `document.fonts.ready` can resolve before the faces used by the biodata have
 * even been requested. We explicitly load the exact (style, weight, family) +
 * text combinations present in the export DOM, then embed only those faces.
 */
export interface ReadinessReport {
  fontsRequested: number;
  fontsFailed: string[];
  imagesFailed: number;
  durationMs: number;
}

const DEFAULT_TIMEOUT_MS = 10_000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | 'timeout'> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve('timeout'), ms);
    promise.then((value) => { clearTimeout(timer); resolve(value); }, () => { clearTimeout(timer); resolve('timeout'); });
  });
}

function collectTextFonts(root: HTMLElement): Map<string, string> {
  const combos = new Map<string, string>();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const text = (node.nodeValue ?? '').trim();
    const el = node.parentElement;
    if (text && el) {
      const cs = getComputedStyle(el);
      const key = `${cs.fontStyle} ${cs.fontWeight} 16px ${cs.fontFamily}`;
      const sample = combos.get(key) ?? '';
      if (sample.length < 400) combos.set(key, sample + text);
    }
    node = walker.nextNode();
  }
  return combos;
}

export async function waitForExportReady(root: HTMLElement, timeoutMs = DEFAULT_TIMEOUT_MS): Promise<ReadinessReport> {
  const started = performance.now();
  const fontsFailed: string[] = [];
  const combos = collectTextFonts(root);

  const loads = Array.from(combos.entries()).map(async ([font, sample]) => {
    try { await document.fonts.load(font, sample); return; } catch { /* retry below */ }
    // next/font adds a size-adjusted fallback face backed by local("Arial"). On devices without
    // that system font it rejects even though the real web font loaded, so judge the PRIMARY family only.
    const match = /^(.*?16px)\s+(.+)$/.exec(font);
    const primary = match ? match[2].split(',')[0].trim() : '';
    if (!match || !primary) { fontsFailed.push(font); return; }
    try { await document.fonts.load(`${match[1]} ${primary}`, sample); } catch { fontsFailed.push(font); }
  });
  const loaded = await withTimeout(Promise.all(loads), timeoutMs);
  if (loaded === 'timeout') fontsFailed.push('timeout while loading fonts');
  await withTimeout(document.fonts.ready, 2000);

  // Any face still "loading" means text could be measured with a fallback font.
  const deadline = performance.now() + 3000;
  while (Array.from(document.fonts).some((face) => face.status === 'loading') && performance.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 25));
  }

  // Images: lazy images in an off-screen tree would otherwise never start loading.
  const images = Array.from(root.querySelectorAll<HTMLImageElement>('img'));
  let imagesFailed = 0;
  await Promise.all(images.map(async (img) => {
    img.loading = 'eager';
    if (!img.complete) {
      await withTimeout(new Promise<void>((resolve) => { img.addEventListener('load', () => resolve(), { once: true }); img.addEventListener('error', () => resolve(), { once: true }); }), timeoutMs);
    }
    try { await img.decode(); } catch { /* decoded lazily by the renderer */ }
    if (img.naturalWidth === 0) imagesFailed += 1;
  }));

  return { fontsRequested: combos.size, fontsFailed, imagesFailed, durationMs: Math.round(performance.now() - started) };
}

/* ---------------------------------------------------------------- embedding */

const normalizeFamily = (value: string) => value.trim().replace(/^["']|["']$/g, '');
const normalizeWeight = (value: string) => (value === 'normal' || value === '' ? '400' : value === 'bold' ? '700' : value);
const normalizeStyle = (value: string) => (value === '' ? 'normal' : value);

const dataUrlCache = new Map<string, Promise<string>>();
const cssCache = new Map<string, string>();

function fetchAsDataUrl(url: string): Promise<string> {
  let cached = dataUrlCache.get(url);
  if (!cached) {
    cached = fetch(url, { cache: 'force-cache' })
      .then((response) => { if (!response.ok) throw new Error(`Font request failed (${response.status})`); return response.blob(); })
      .then((blob) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(String(reader.result));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      }));
    cached.catch(() => dataUrlCache.delete(url));
    dataUrlCache.set(url, cached);
  }
  return cached;
}

async function inlineFontUrls(cssText: string, baseHref: string | null): Promise<string> {
  const matches = Array.from(cssText.matchAll(/url\(\s*(["']?)([^"')]+)\1\s*\)/g));
  let result = cssText;
  await Promise.all(matches.map(async (match) => {
    const raw = match[2];
    if (raw.startsWith('data:')) return;
    const absolute = new URL(raw, baseHref ?? document.baseURI).href;
    const dataUrl = await fetchAsDataUrl(absolute);
    result = result.split(match[0]).join(`url(${dataUrl})`);
  }));
  return result;
}

function usedFamilies(root: HTMLElement): Set<string> {
  const families = new Set<string>();
  const visit = (el: Element) => {
    getComputedStyle(el).fontFamily.split(',').forEach((family) => families.add(normalizeFamily(family)));
    Array.from(el.children).forEach(visit);
  };
  visit(root);
  return families;
}

/**
 * CSS containing ONLY the @font-face rules that (a) belong to a family used by the
 * export and (b) are actually loaded. The library default embeds every face on the
 * page (about 40 here, several MB of base64) for each capture.
 */
export async function buildFontEmbedCSS(root: HTMLElement): Promise<string> {
  const families = usedFamilies(root);
  const loaded = new Set<string>();
  document.fonts.forEach((face) => {
    if (face.status === 'loaded') loaded.add(`${normalizeFamily(face.family)}|${normalizeWeight(face.weight)}|${normalizeStyle(face.style)}`);
  });

  const picked: Array<{ cssText: string; href: string | null; key: string }> = [];
  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try { rules = sheet.cssRules; } catch { continue; } // cross-origin sheet: cannot be read
    for (const rule of Array.from(rules)) {
      if (rule.type !== CSSRule.FONT_FACE_RULE) continue;
      const style = (rule as CSSFontFaceRule).style;
      const family = normalizeFamily(style.getPropertyValue('font-family'));
      if (!families.has(family)) continue;
      if (!/url\(/.test(style.getPropertyValue('src'))) continue;
      const key = `${family}|${normalizeWeight(style.getPropertyValue('font-weight'))}|${normalizeStyle(style.getPropertyValue('font-style'))}`;
      if (!loaded.has(key)) continue;
      picked.push({ cssText: rule.cssText, href: sheet.href, key });
    }
  }

  const signature = picked.map((item) => `${item.href}#${item.key}`).sort().join(';');
  const cached = cssCache.get(signature);
  if (cached !== undefined) return cached;
  const parts = await Promise.all(picked.map((item) => inlineFontUrls(item.cssText, item.href).catch(() => '')));
  const css = parts.filter(Boolean).join('\n');
  if (picked.length) cssCache.set(signature, css);
  return css;
}
