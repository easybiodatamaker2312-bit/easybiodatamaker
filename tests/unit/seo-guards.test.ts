import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { COMMUNITY_PAGES } from '@/lib/seo/communityPages';

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
  const source = fs.readFileSync(path.join(appRoot, 'sitemap.ts'), 'utf8');
  return [...source.matchAll(/url:\s*'([^']+)'/g)].map((m) => m[1]).map((url) => url.replace(BASE, '') || '/');
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
  it('has a route file and metadata for every sitemap URL', () => {
    for (const route of sitemapRoutes()) {
      expect(fs.existsSync(routeFile(route)), route).toBe(true);
      const source = pageMetadataSource(route);
      expect(source, `${route} missing title`).toMatch(/title\s*:/);
      expect(source, `${route} missing description`).toMatch(/description\s*:/);
      expect(source, `${route} missing canonical`).toMatch(/alternates\s*:\s*\{[\s\S]*canonical\s*:/);
    }
  });

  it('does not put the noindex builder in the sitemap', () => {
    expect(sitemapRoutes()).not.toContain('/create');
    const source = routeSource('/create');
    expect(source).toContain('index: false');
    expect(source).toContain('follow: true');
  });

  it('keeps every community page self-canonical and within metadata length targets', () => {
    for (const page of COMMUNITY_PAGES) {
      const source = routeSource(page.path);
      expect(source).toContain(`canonical: \`https://easybiodatamaker.com\${page.path}\``);
      expect(page.title.length).toBeLessThanOrEqual(60);
      expect(page.description.length).toBeLessThanOrEqual(155);
    }
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
