import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { COMMUNITY_PAGES } from '@/lib/seo/communityPages';
import { SEARCH_INTENT_PAGES } from '@/lib/seo/searchIntentPages';
import { SEO_KEYWORD_MAP } from '@/lib/seo/keywordMap';
import { SITE_PAGES } from '@/lib/seo/sitePages';
import { SEARCH_INTENT_ENHANCEMENTS } from '@/lib/seo/searchIntentEnhancements';

const root = path.resolve(process.cwd());
const appRoot = path.join(root, 'src', 'app');
const BASE = 'https://easybiodatamaker.com';

function routeFile(route: string) {
  return path.join(appRoot, route === '/' ? 'page.tsx' : route.slice(1), 'page.tsx');
}

function routeSource(route: string) {
  const file = routeFile(route);
  return fs.readFileSync(file, 'utf8');
}

function pageMetadataSource(route: string) {
  const page = routeFile(route);
  const layout = path.join(path.dirname(page), 'layout.tsx');
  return fs.readFileSync(page, 'utf8') + (fs.existsSync(layout) ? `\n${fs.readFileSync(layout, 'utf8')}` : '');
}

function sitemapRoutes() {
  return [...new Set([
    ...SITE_PAGES.map((page) => page.path),
    ...COMMUNITY_PAGES.map((page) => page.path),
    ...SEARCH_INTENT_PAGES.map((page) => page.path),
  ])];
}

function shingles(text: string, size = 5) {
  const words = text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').split(/\s+/).filter((w) => w.length > 2);
  const result = new Set<string>();
  for (let i = 0; i <= words.length - size; i += 1) result.add(words.slice(i, i + size).join(' '));
  return result;
}

function similarity(a: Set<string>, b: Set<string>) {
  let shared = 0;
  for (const value of a) if (b.has(value)) shared += 1;
  return shared / Math.min(Math.max(a.size, 1), Math.max(b.size, 1));
}

describe('technical SEO guards', () => {
  it('uses the configured GA4 measurement ID and manual page views', () => {
    const source = fs.readFileSync(path.join(root, 'src', 'components', 'analytics', 'GoogleAnalytics.tsx'), 'utf8');
    expect(source).toContain("process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-S4MM2PG9K1'");
    expect(source).toContain("send_page_view: false");
    expect(source).toContain("window.gtag('event', 'page_view'");
  });

  it('has a route file and metadata for every sitemap URL', () => {
    for (const route of sitemapRoutes()) {
      expect(fs.existsSync(routeFile(route)), route).toBe(true);
      const source = pageMetadataSource(route);
      expect(source, `${route} missing title`).toMatch(/title\s*:/);
      expect(source, `${route} missing description`).toMatch(/description\s*:/);
      expect(source, `${route} missing shared metadata builder`).toMatch(/buildMetadata\s*\(/);
    }
  });

  it('does not put the noindex builder in the sitemap', () => {
    expect(sitemapRoutes()).not.toContain('/create');
    const source = routeSource('/create');
    expect(source).toContain('index: false');
    expect(source).toContain('follow: true');
  });

  it('keeps every indexable page final title <= 60 and description 120-158, with unique descriptions', () => {
    const pages = [...SITE_PAGES, ...COMMUNITY_PAGES, ...SEARCH_INTENT_PAGES];
    expect(new Set(pages.map((page) => page.path)).size).toBe(66);
    expect(pages.every((page) => page.title.length <= 60)).toBe(true);
    expect(pages.every((page) => page.description.length >= 120 && page.description.length <= 158)).toBe(true);
    expect(new Set(pages.map((page) => page.description)).size).toBe(pages.length);
    expect(pages.every((page) => page.updatedAt === '2026-10-08')).toBe(true);
  });

  it('every indexable config resolves to a self-canonical URL with complete social metadata', async () => {
    const seo = await import('@/lib/seo');
    const pages = [...SITE_PAGES, ...COMMUNITY_PAGES, ...SEARCH_INTENT_PAGES];
    for (const page of pages) {
      const metadata = seo.buildMetadata({
        title: page.title,
        description: page.description,
        path: page.path,
        type: 'type' in page ? page.type : 'website',
      });
      expect(metadata.title).toEqual({ absolute: page.title });
      expect(metadata.alternates?.canonical).toBe(`${BASE}${page.path}`);
      expect(metadata.description).toBe(page.description);
      expect(metadata.openGraph?.type).toBe(page.type || 'website');
      expect(metadata.openGraph?.images).toBeTruthy();
      expect(metadata.twitter?.card).toBe('summary_large_image');
    }
  });

  it('keeps kept search-intent pages below the 40% five-word shingle overlap guard', () => {
    const redirects = new Set(['/wedding-biodata-format','/biodata-for-marriage','/matrimonial-biodata-format','/free-marriage-biodata-generator','/free-biodata-maker-without-login','/biodata-maker-word-document-export','/biodata-maker-pdf-one-page']);
    const documents = SEARCH_INTENT_PAGES.filter((page) => !redirects.has(page.path)).map((page) => {
      const enhancement = SEARCH_INTENT_ENHANCEMENTS[page.path];
      const text = [page.intro, page.quickAnswer, ...page.sections.flatMap((s) => [s.heading, ...s.paragraphs]), ...page.checklist, ...page.faqs.flatMap((f) => [f.question, f.answer]), ...enhancement.sections.flatMap((s) => [s.heading, ...s.paragraphs]), ...enhancement.examples, ...enhancement.mistakes].join(' ');
      return { path: page.path, shingles: shingles(text) };
    });
    for (let i = 0; i < documents.length; i += 1) {
      for (let j = i + 1; j < documents.length; j += 1) {
        expect(similarity(documents[i].shingles, documents[j].shingles), `${documents[i].path} vs ${documents[j].path}`).toBeLessThanOrEqual(0.4);
      }
    }
  });

  it('buildMetadata uses an absolute title and complete social metadata', async () => {
    const seo = await import('@/lib/seo');
    const metadata = seo.buildMetadata({ title: 'Test Marriage Biodata', description: 'A valid test description that is intentionally long enough to represent a normal search snippet for this metadata unit test page.', path: '/test' });
    expect(metadata.title).toEqual({ absolute: 'Test Marriage Biodata' });
    expect(metadata.openGraph?.type).toBe('website');
    expect(metadata.openGraph?.images).toBeTruthy();
    expect(metadata.twitter?.card).toBe('summary_large_image');
    expect(metadata.alternates?.canonical).toBe('https://easybiodatamaker.com/test');
  });

  it('keeps community content below the 40% five-word shingle overlap guard', () => {
    const documents = COMMUNITY_PAGES.map((page) => ({
      slug: page.slug,
      text: [page.intro, ...page.sections.flatMap((s) => [s.heading, ...s.paragraphs]), ...page.fields.flatMap((f) => [f.name, f.explanation]), ...page.faqs.flatMap((f) => [f.question, f.answer])].join(' '),
    }));
    const sets = documents.map((doc) => ({ slug: doc.slug, shingles: shingles(doc.text) }));
    for (let i = 0; i < sets.length; i += 1) {
      for (let j = i + 1; j < sets.length; j += 1) {
        expect(similarity(sets[i].shingles, sets[j].shingles), `${sets[i].slug} vs ${sets[j].slug}`).toBeLessThanOrEqual(0.4);
      }
    }
  });

  it('covers every supplied keyword with a deliberate target URL', () => {
    expect(SEO_KEYWORD_MAP.length).toBeGreaterThanOrEqual(80);
    for (const item of SEO_KEYWORD_MAP) {
      expect(item.keyword.trim().length, item.keyword).toBeGreaterThan(3);
      expect(item.target.startsWith('/'), `${item.keyword} -> ${item.target}`).toBe(true);
      expect(sitemapRoutes(), `${item.keyword} -> ${item.target}`).toContain(item.target);
    }
  });

  it('gives every kept search-intent page a substantial, intent-specific enhancement', () => {
    const redirects = new Set(['/wedding-biodata-format','/biodata-for-marriage','/matrimonial-biodata-format','/free-marriage-biodata-generator','/free-biodata-maker-without-login','/biodata-maker-word-document-export','/biodata-maker-pdf-one-page']);
    const kept = SEARCH_INTENT_PAGES.filter((page) => !redirects.has(page.path));
    expect(kept.length).toBe(28);
    for (const page of kept) {
      const enhancement = SEARCH_INTENT_ENHANCEMENTS[page.path];
      expect(enhancement, `${page.path} missing enhancement`).toBeTruthy();
      const text = [page.intro, page.quickAnswer, ...page.sections.flatMap((s) => [s.heading, ...s.paragraphs]), ...page.checklist, ...page.faqs.flatMap((f) => [f.question, f.answer]), ...enhancement.sections.flatMap((s) => [s.heading, ...s.paragraphs]), ...enhancement.examples, ...enhancement.mistakes].join(' ');
      expect(text.trim().split(/\s+/).length, `${page.path} word count`).toBeGreaterThanOrEqual(700);
      expect(enhancement.examples.length).toBeGreaterThanOrEqual(3);
      expect(enhancement.mistakes.length).toBeGreaterThanOrEqual(3);
      expect(enhancement.sampleImage).toMatch(/^\/seo\/search-intent-samples\/.+\.svg$/);
    }
  });

  it('redirects removed search-intent duplicates instead of keeping competing pages', () => {
    const config = fs.readFileSync(path.join(root, 'next.config.js'), 'utf8');
    for (const [source, destination] of Object.entries({
      '/wedding-biodata-format': '/marriage-biodata-format',
      '/biodata-for-marriage': '/marriage-biodata-format',
      '/matrimonial-biodata-format': '/marriage-biodata-format',
      '/free-marriage-biodata-generator': '/marriage-biodata-maker-online',
      '/free-biodata-maker-without-login': '/marriage-biodata-maker-online',
      '/biodata-maker-word-document-export': '/marriage-biodata-format-word',
      '/biodata-maker-pdf-one-page': '/marriage-biodata-format-pdf',
    })) {
      expect(config).toContain(`source: '${source}'`);
      expect(config).toContain(`destination: '${destination}'`);
    }
  });


  it('uses consistent language-first marriage biodata URLs and preserves legacy routes with permanent redirects', () => {
    const languageRoutes = [
      '/hindi-marriage-biodata',
      '/gujarati-marriage-biodata',
      '/marathi-marriage-biodata',
      '/tamil-marriage-biodata',
      '/telugu-marriage-biodata',
      '/bengali-marriage-biodata',
      '/kannada-marriage-biodata',
      '/punjabi-marriage-biodata',
      '/rajasthani-marriage-biodata',
    ];
    const legacyRoutes = [
      '/hindi-biodata-format',
      '/gujarati-biodata-format',
      '/marathi-biodata-format',
      '/tamil-biodata-format',
      '/telugu-biodata-format',
      '/bengali-biodata-format',
      '/kannada-biodata-format',
      '/punjabi-biodata-format',
      '/rajasthani-biodata-format',
    ];
    const config = fs.readFileSync(path.join(root, 'next.config.js'), 'utf8');
    expect(languageRoutes.every((route) => sitemapRoutes().includes(route))).toBe(true);
    expect(legacyRoutes.every((route) => !sitemapRoutes().includes(route))).toBe(true);
    for (let i = 0; i < languageRoutes.length; i += 1) {
      expect(config).toContain(`source: '${legacyRoutes[i]}'`);
      expect(config).toContain(`destination: '${languageRoutes[i]}'`);
    }
  });

  it('keeps the homepage rich content focused on real product capabilities and language-specific routes', () => {
    const source = fs.readFileSync(path.join(appRoot, 'page.tsx'), 'utf8');
    const rich = fs.readFileSync(path.join(root, 'src/components/landing/MarriageBiodataContent.tsx'), 'utf8');
    for (const route of ['/hindi-marriage-biodata','/gujarati-marriage-biodata','/marathi-marriage-biodata','/tamil-marriage-biodata','/telugu-marriage-biodata','/bengali-marriage-biodata','/kannada-marriage-biodata','/punjabi-marriage-biodata','/rajasthani-marriage-biodata']) {
      expect(rich).toContain(route);
    }
    expect(source).toContain('<MarriageBiodataContent />');
    expect(rich).toContain('/marriage-biodata-format-pdf');
    expect(rich).toContain('/marriage-biodata-format-word');
    expect(rich).toContain('/biodata-maker-for-whatsapp');
    expect(rich).not.toMatch(/trusted by|thousands of|#1|best in india|no watermark/i);
  });

  it('contains no aggregate rating or review claims in application source', () => {
    const files: string[] = [];
    const walk = (dir: string) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name === 'node_modules' || entry.name === '.next') continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) files.push(full);
      }
    };
    walk(path.join(root, 'src'));
    const source = files.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
    expect(source).not.toMatch(/aggregateRating|ratingValue|reviewCount|itemReviewed/i);
  });

  it('keeps export dependencies interaction-only and preserves the exact print footer', () => {
    const preview = fs.readFileSync(path.join(root, 'src/components/builder/PreviewPane.tsx'), 'utf8');
    const pdf = fs.readFileSync(path.join(root, 'src/lib/pdf.ts'), 'utf8');
    const word = fs.readFileSync(path.join(root, 'src/lib/word-export.ts'), 'utf8');
    const footer = 'Created with EasyBiodataMaker.com - Free Marriage Biodata Maker';
    expect(word).toContain("await import('docx')");
    expect(pdf).toContain("await import('html2canvas')");
    expect(pdf).toContain('navigator.canShare');
    expect(preview).toContain('Share / WhatsApp');
    expect(preview).toContain(footer);
    expect(word).toContain(footer);
  });
});
