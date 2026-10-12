#!/usr/bin/env node
/**
 * Production HTTP smoke test for EasyBiodataMaker.
 * Usage: node scripts/verify-production.mjs [https://easybiodatamaker.com] [--all-sitemap]
 * This script only reads public URLs; it does not submit URLs to search engines.
 */
const args = process.argv.slice(2);
const baseArg = args.find((arg) => !arg.startsWith('--')) || process.env.PRODUCTION_BASE_URL || 'https://easybiodatamaker.com';
const base = new URL(baseArg.endsWith('/') ? baseArg : `${baseArg}/`);
const checkAllSitemap = args.includes('--all-sitemap');
const failures = [];
const passed = [];
const timeoutMs = Number(process.env.PRODUCTION_CHECK_TIMEOUT_MS || 8000);

function pass(message) { passed.push(message); console.log(`PASS ${message}`); }
function fail(message) { failures.push(message); console.error(`FAIL ${message}`); }
function abs(path) { return new URL(path.replace(/^\//, ''), base).toString(); }
async function fetchText(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { redirect: options.redirect || 'follow', signal: controller.signal, headers: { 'user-agent': 'EasyBiodataMaker-Production-Smoke-Test/1.0' } });
  } finally { clearTimeout(timer); }
}
function htmlMeta(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = html.match(new RegExp(`<meta\\s+[^>]*(?:name|property)=["']${escaped}["'][^>]*>`, 'i'));
  if (!match) return '';
  return match[0].match(/content=["']([^"']*)["']/i)?.[1] || '';
}
function canonicalHref(html) {
  return html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]
    || html.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i)?.[1]
    || '';
}
async function checkPage(path, { noindex = false } = {}) {
  const url = abs(path);
  try {
    const response = await fetchText(url);
    if (!response.ok) { fail(`${path} returned HTTP ${response.status}`); return; }
    const html = await response.text();
    if (!/<title(?:\s[^>]*)?>[\s\S]*?<\/title>/i.test(html)) fail(`${path} is missing a title`);
    else if (!htmlMeta(html, 'description')) fail(`${path} is missing a meta description`);
    else pass(`${path} returns HTTP ${response.status} with title and description`);

    const canonical = canonicalHref(html);
    if (!canonical) fail(`${path} is missing a canonical link`);
    else {
      const canonicalUrl = new URL(canonical, url);
      const expected = new URL(path, base);
      if (canonicalUrl.origin !== expected.origin || canonicalUrl.pathname.replace(/\/$/, '') !== expected.pathname.replace(/\/$/, '')) {
        fail(`${path} canonical is ${canonicalUrl.href}; expected same-path canonical ${expected.href}`);
      } else pass(`${path} has a same-path canonical`);
    }
    const robots = htmlMeta(html, 'robots').toLowerCase();
    if (noindex && !/noindex/.test(robots)) fail(`${path} should emit noindex, robots meta was "${robots || '(missing)'}"`);
    if (noindex && /nofollow/.test(robots)) fail(`${path} should remain followable, robots meta was "${robots}"`);
    if (noindex && /noindex/.test(robots) && !/nofollow/.test(robots)) pass(`${path} is noindex and followable`);
    if (!noindex && /noindex/.test(robots)) fail(`${path} unexpectedly emits noindex`);
  } catch (error) { fail(`${path} request failed: ${error instanceof Error ? error.message : String(error)}`); }
}

console.log(`EasyBiodataMaker production verification: ${base.origin}`);
console.log(`Mode: ${checkAllSitemap ? 'all sitemap URLs' : 'representative URLs'}`);

await Promise.all(['/robots.txt', '/sitemap.xml', '/image-sitemap.xml'].map(async (path) => {
  try {
    const response = await fetchText(abs(path));
    if (!response.ok) { fail(`${path} returned HTTP ${response.status}`); return; }
    const body = await response.text();
    if (path === '/robots.txt' && !body.includes('/sitemap.xml')) fail('/robots.txt does not reference sitemap.xml');
    else if (path === '/sitemap.xml' && !body.includes('<urlset')) fail('/sitemap.xml does not appear to be a URL sitemap');
    else if (path === '/image-sitemap.xml' && !body.includes('urlset')) fail('/image-sitemap.xml does not appear to be a sitemap');
    else pass(`${path} returns HTTP ${response.status}`);
  } catch (error) { fail(`${path} request failed: ${error instanceof Error ? error.message : String(error)}`); }
}));

const sitemapUrl = abs('/sitemap.xml');
let sitemapPaths = [];
try {
  const response = await fetchText(sitemapUrl);
  if (response.ok) {
    const xml = await response.text();
    sitemapPaths = [...xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)].map((match) => {
      try { const parsed = new URL(match[1].replaceAll('&amp;', '&')); return parsed.pathname; } catch { return ''; }
    }).filter(Boolean);
    if (!sitemapPaths.length) fail('Sitemap has no parseable <loc> entries');
    else {
      const unique = new Set(sitemapPaths);
      if (unique.size !== sitemapPaths.length) fail(`Sitemap contains duplicate paths (${sitemapPaths.length} entries, ${unique.size} unique)`);
      else pass(`Sitemap contains ${sitemapPaths.length} unique URLs`);
      if (sitemapPaths.includes('/create')) fail('/create must not appear in sitemap');
      else pass('/create is excluded from sitemap');
    }
  }
} catch (error) { fail(`Could not parse sitemap: ${error instanceof Error ? error.message : String(error)}`); }

const representative = [
  '/', '/marriage-biodata-format', '/marriage-biodata-formats-by-community',
  '/marriage-biodata-samples', '/tools/about-me-generator',
  '/tools/partner-expectations-generator', '/blog/what-is-biodata-for-marriage',
  '/hindi-marriage-biodata', '/tamil-marriage-biodata', '/create',
];
const pagePaths = checkAllSitemap ? [...new Set([...sitemapPaths, ...representative])] : representative;
await Promise.all(pagePaths.map((path) => checkPage(path, { noindex: path === '/create' })));

// Check a known legacy redirect without following it, so the destination can be inspected.
try {
  const response = await fetchText(abs('/tamil-biodata-format'), { redirect: 'manual' });
  const location = response.headers.get('location') || '';
  if ([301, 302, 307, 308].includes(response.status) && /tamil-marriage-biodata/.test(location)) pass('Legacy Tamil route redirects to /tamil-marriage-biodata');
  else fail(`Legacy Tamil route expected a redirect to /tamil-marriage-biodata; received HTTP ${response.status}, Location: ${location || '(missing)'}`);
} catch (error) { fail(`Legacy redirect check failed: ${error instanceof Error ? error.message : String(error)}`); }

console.log(`\nResult: ${passed.length} passed, ${failures.length} failed.`);
if (failures.length) process.exitCode = 1;
