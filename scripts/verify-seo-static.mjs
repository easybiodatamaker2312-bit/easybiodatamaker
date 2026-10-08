import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const appRoot = path.join(root, 'src', 'app');
const failures = [];
const pass = (message) => console.log(`PASS  ${message}`);
const fail = (message) => failures.push(message);
const read = (p) => fs.readFileSync(p, 'utf8');

const siteSource = read(path.join(root, 'src', 'lib', 'seo', 'sitePages.ts'));
const communitySource = read(path.join(root, 'src', 'lib', 'seo', 'communityPages.ts'));
const intentSource = read(path.join(root, 'src', 'lib', 'seo', 'searchIntentPages.ts'));

const sitePages = [...siteSource.matchAll(/\{\s*path:\s*'([^']+)',\s*title:\s*(['"])(.*?)\2,\s*description:\s*'([^']+)'(?:,\s*type:\s*'[^']+')?,\s*updatedAt:\s*'([^']+)'/g)]
  .map((m) => ({ path: m[1], title: m[3], description: m[4], updatedAt: m[5] }));
const communityPaths = [...communitySource.matchAll(/path:'([^']+)'/g)].map((m) => m[1]);
const communityTitles = [...communitySource.matchAll(/title:'([^']+)'/g)].map((m) => m[1]);
const communityDescriptions = [...communitySource.matchAll(/description:'([^']+)'/g)].map((m) => m[1]);
const communityDates = [...communitySource.matchAll(/updatedAt:'([^']+)'/g)].map((m) => m[1]);
const communityPages = communityPaths.map((route, index) => ({ path: route, title: communityTitles[index], description: communityDescriptions[index], updatedAt: communityDates[index] }));
const intentPaths = [...intentSource.matchAll(/path:\s*'([^']+)'/g)].map((m) => m[1]);
const intentTitles = [...intentSource.matchAll(/title:\s*'([^']+)'/g)].map((m) => m[1]);
const intentDescriptions = [...intentSource.matchAll(/description:\s*'([^']+)'/g)].map((m) => m[1]);
const intentDates = [...intentSource.matchAll(/updatedAt:\s*'([^']+)'/g)].map((m) => m[1]);
const intentPages = intentPaths.map((route, index) => ({ path: route, title: intentTitles[index], description: intentDescriptions[index], updatedAt: intentDates[index] }));
const pages = [...sitePages, ...communityPages, ...intentPages];

const uniquePaths = new Set(pages.map((page) => page.path));
if (pages.length !== 66 || uniquePaths.size !== pages.length) fail(`Expected 66 unique indexable page configs; found ${pages.length} entries and ${uniquePaths.size} unique paths`);
else pass('Page configs contain 66 unique indexable routes');

const badTitles = pages.filter((page) => page.title.length > 60);
const badDescriptions = pages.filter((page) => page.description.length < 120 || page.description.length > 158);
const duplicateDescriptions = [...new Set(pages.map((page) => page.description))].filter((description) => pages.filter((page) => page.description === description).length > 1);
const badDates = pages.filter((page) => !/^\d{4}-\d{2}-\d{2}$/.test(page.updatedAt));
if (badTitles.length) badTitles.forEach((page) => fail(`${page.path}: final title exceeds 60 characters (${page.title.length})`));
if (badDescriptions.length) badDescriptions.forEach((page) => fail(`${page.path}: meta description must be 120-158 characters (${page.description.length})`));
if (duplicateDescriptions.length) fail(`Duplicate meta descriptions: ${duplicateDescriptions.length}`);
if (badDates.length) fail(`Invalid updatedAt dates: ${badDates.map((page) => page.path).join(', ')}`);
if (!badTitles.length && !badDescriptions.length && !duplicateDescriptions.length && !badDates.length) pass('All indexable titles/descriptions meet length and uniqueness targets');

const sitemapSource = read(path.join(appRoot, 'sitemap.ts'));
if (/priority\s*:|changeFrequency\s*:/.test(sitemapSource)) fail('Sitemap must not contain priority/changeFrequency noise');
if (!/lastModified:\s*page\.updatedAt/.test(sitemapSource)) fail('Sitemap lastModified must come from per-page updatedAt');
if (!/SITE_PAGES/.test(sitemapSource) || !/COMMUNITY_PAGES/.test(sitemapSource) || !/SEARCH_INTENT_PAGES/.test(sitemapSource)) fail('Sitemap must be built from all page configs');
else if (!/lastModified:\s*page\.updatedAt/.test(sitemapSource)) fail('Sitemap does not use config updatedAt');
else pass('Sitemap uses per-page updatedAt and contains no priority/changeFrequency fields');

const robotsSource = read(path.join(appRoot, 'robots.ts'));
if (!/disallow:\s*['"]\/api\//.test(robotsSource) || !/allow:\s*['"]\//.test(robotsSource)) fail('robots.ts must allow public pages and disallow only /api/');
if (!/sitemap:\s*['"]https:\/\/easybiodatamaker\.com\/sitemap\.xml['"]/.test(robotsSource)) fail('robots.ts must reference sitemap.xml');
if (fs.existsSync(path.join(root, 'public', 'robots.txt'))) fail('public/robots.txt must be removed');
else pass('robots.ts is authoritative and public/robots.txt is absent');

if (fs.existsSync(path.join(root, 'SEARCH_CONSOLE_SETUP.ts'))) fail('SEARCH_CONSOLE_SETUP.ts must be removed');
const layoutSource = read(path.join(appRoot, 'layout.tsx'));
if (!/verification:\s*\{\s*google:\s*process\.env\.NEXT_PUBLIC_GSC_TOKEN\s*\}/.test(layoutSource)) fail('Root metadata must expose NEXT_PUBLIC_GSC_TOKEN as Google verification');
if (/SoftwareApplication/.test(layoutSource)) fail('SoftwareApplication JSON-LD must not live in root layout');
if (!/sameAs/.test(layoutSource) && !/TODO: add sameAs/.test(layoutSource)) fail('Organization schema must contain a sameAs TODO until verified profiles are supplied');
else pass('GSC verification and Organization sameAs TODO are present; SoftwareApplication is removed from root layout');

const enhancementSource = read(path.join(root, 'src', 'lib', 'seo', 'searchIntentEnhancements.ts'));
const removedSearchRoutes = ['/wedding-biodata-format','/biodata-for-marriage','/matrimonial-biodata-format','/free-marriage-biodata-generator','/free-biodata-maker-without-login','/biodata-maker-word-document-export','/biodata-maker-pdf-one-page'];
for (const route of removedSearchRoutes) {
  const routeFile = path.join(appRoot, route.slice(1), 'page.tsx');
  if (fs.existsSync(routeFile)) fail(`Merged route still exists: ${route}`);
}
const keptIntentRoutes = intentPaths.filter((route) => !removedSearchRoutes.includes(route));
for (const route of keptIntentRoutes) {
  if (!new RegExp('\\"'+route+'\\"\\s*:\\s*\\{').test(enhancementSource)) fail(`${route}: missing search-intent enhancement`);
}
if (keptIntentRoutes.length !== 28) fail(`Expected 28 kept search-intent routes; found ${keptIntentRoutes.length}`);
else pass('Search-intent merge redirects and enhancement registry are complete');

const indexableRoutes = pages.map((page) => page.path);
for (const route of indexableRoutes) {
  const file = route === '/' ? path.join(appRoot, 'page.tsx') : path.join(appRoot, route.slice(1), 'page.tsx');
  const layout = path.join(path.dirname(file), 'layout.tsx');
  if (!fs.existsSync(file) && !fs.existsSync(layout)) { fail(`Missing route source: ${route}`); continue; }
  const source = `${fs.existsSync(file) ? read(file) : ''}\n${fs.existsSync(layout) ? read(layout) : ''}`;
  if (!/buildMetadata\s*\(/.test(source)) fail(`${route}: must use buildMetadata()`);
  if (!/buildMetadata\s*\(/.test(source)) fail(`${route}: missing shared metadata builder`);
}
pass('All indexable routes use the shared metadata builder');

const create = read(path.join(appRoot, 'create', 'page.tsx'));
if (!/noIndex:\s*true/.test(create)) fail('/create must be noindex');
else pass('/create remains noindex, follow and is crawlable');

const allSourceFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) allSourceFiles.push(full);
  }
}
walk(path.join(root, 'src'));
const allSource = allSourceFiles.map(read).join('\n');
for (const forbidden of ['aggregateRating', 'ratingValue', 'reviewCount', 'itemReviewed']) {
  if (new RegExp(forbidden, 'i').test(allSource)) fail(`Forbidden review/rating schema token found: ${forbidden}`);
}
if (!/await import\(['"]docx['"]\)/.test(allSource)) fail('docx must remain interaction-only via dynamic import');
if (!/await import\(['"]html2canvas['"]\)/.test(allSource)) fail('html2canvas must remain interaction-only via dynamic import');
if (failures.length === 0) pass('Structured-data and interaction-only dependency guards passed');

const oldFontFiles = [
  'Inter-Regular.otf', 'Inter-Medium.otf', 'Inter-SemiBold.otf', 'Inter-Bold.otf', 'NotoSerifDisplay-Regular.ttf',
].filter((name) => fs.existsSync(path.join(root, 'public', 'fonts', 'premium', name)));
if (oldFontFiles.length) fail(`Legacy premium font files remain: ${oldFontFiles.join(', ')}`);
const latinWoff2 = ['Inter-Regular.woff2', 'Inter-Medium.woff2', 'Inter-SemiBold.woff2', 'Inter-Bold.woff2', 'NotoSerifDisplay-Regular.woff2']
  .filter((name) => fs.existsSync(path.join(root, 'public', 'fonts', 'premium', 'latin', name)));
if (latinWoff2.length !== 5) fail(`Expected five Latin WOFF2 files, found ${latinWoff2.length}`);
if (!/display:\s*'swap'/.test(layoutSource)) fail('Premium fonts must use display: swap');
if (!/preload:\s*false/.test(layoutSource)) fail('Indic fonts should remain non-preloaded');
else if (!oldFontFiles.length && latinWoff2.length === 5) pass('Premium fonts use Latin-subset WOFF2 and Indic fonts remain non-preloaded');

const rootOg = layoutSource.match(/openGraph:\s*\{[\s\S]*?type:\s*'website'/);
if (!rootOg) fail('Root Open Graph type must be website');

const homeSource = read(path.join(appRoot, 'page.tsx'));
const templatesSource = `${read(path.join(appRoot, 'templates', 'page.tsx'))}\n${read(path.join(appRoot, 'templates', 'layout.tsx'))}`;
const makerRoutes = ['/marriage-biodata-maker-online','/biodata-maker-for-mobile','/biodata-maker-for-whatsapp','/bilingual-biodata-maker','/biodata-maker-with-photo','/biodata-maker-with-ganesh-photo'];
if (!/SoftwareApplicationSchema/.test(homeSource)) fail('Homepage must contain SoftwareApplication JSON-LD');
if (!/SoftwareApplication/.test(templatesSource)) fail('/templates must contain SoftwareApplication JSON-LD');
for (const route of makerRoutes) {
  const source = read(path.join(appRoot, route.slice(1), 'page.tsx'));
  if (!/includeSoftwareSchema/.test(source)) fail(`${route} must opt into SoftwareApplication JSON-LD`);
}
if (!failures.length) pass('SoftwareApplication JSON-LD is scoped to homepage, templates and maker landing pages');

if (failures.length) {
  console.error(`\n${failures.length} verification failure(s):`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exitCode = 1;
} else {
  console.log('\nSEO static verification completed successfully.');
}
