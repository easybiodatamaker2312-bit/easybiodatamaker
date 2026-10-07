import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const appRoot = path.join(root, 'src', 'app');
const read = (p) => fs.readFileSync(p, 'utf8');
const failures = [];
const pass = (message) => console.log(`PASS  ${message}`);
const fail = (message) => failures.push(message);

const sitemap = read(path.join(appRoot, 'sitemap.ts'));
const routes = [...sitemap.matchAll(/url:\s*'([^']+)'/g)].map((m) => m[1]);
const uniqueRoutes = new Set(routes);
if (routes.length !== uniqueRoutes.size) fail(`Duplicate sitemap routes (${routes.length} entries, ${uniqueRoutes.size} unique)`);
else pass(`Sitemap has ${routes.length} unique routes`);

if (routes.includes('/create')) fail('/create must not be present in sitemap');
else pass('/create is excluded from sitemap');

const create = read(path.join(appRoot, 'create', 'page.tsx'));
if (!/robots:\s*\{[\s\S]*index:\s*false[\s\S]*follow:\s*true/.test(create)) fail('/create must be noindex, follow');
else pass('/create is noindex, follow');

for (const route of routes) {
  const file = route === '/' ? path.join(appRoot, 'page.tsx') : path.join(appRoot, route.slice(1), 'page.tsx');
  if (!fs.existsSync(file)) { fail(`Missing route file: ${route}`); continue; }
  const source = read(file);
  const layout = path.join(path.dirname(file), 'layout.tsx');
  const layoutSource = fs.existsSync(layout) ? read(layout) : '';
  const metadataSource = `${source}\n${layoutSource}`;
  if (!/title\s*:/.test(metadataSource)) fail(`${route}: missing title metadata`);
  if (!/description\s*:/.test(metadataSource)) fail(`${route}: missing description metadata`);
  if (!/canonical\s*:/.test(metadataSource)) fail(`${route}: missing canonical metadata`);
}
pass('Sitemap route files and metadata sources checked');

const srcFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) srcFiles.push(full);
  }
}
walk(path.join(root, 'src'));
const allSource = srcFiles.map(read).join('\n');
for (const forbidden of ['aggregateRating', 'ratingValue', 'reviewCount', 'itemReviewed']) {
  if (new RegExp(forbidden, 'i').test(allSource)) fail(`Forbidden review/rating schema token found: ${forbidden}`);
}
if (!/await import\(['"]docx['"]\)/.test(allSource)) fail('docx must remain interaction-only via dynamic import');
if (!/await import\(['"]html2canvas['"]\)/.test(allSource)) fail('html2canvas must remain interaction-only via dynamic import');
if (failures.length === 0) pass('Structured-data and interaction-only dependency guards passed');

const communityFile = path.join(root, 'src', 'lib', 'seo', 'communityPages.ts');
if (fs.existsSync(communityFile)) {
  const community = read(communityFile);
  const titles = [...community.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const descriptions = [...community.matchAll(/description:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const longTitles = titles.filter((x) => x.length > 60);
  const longDescriptions = descriptions.filter((x) => x.length > 155);
  if (longTitles.length) fail(`${longTitles.length} community titles exceed 60 characters`);
  if (longDescriptions.length) fail(`${longDescriptions.length} community descriptions exceed 155 characters`);
  if (!longTitles.length && !longDescriptions.length) pass(`Community metadata limits checked (${titles.length} titles, ${descriptions.length} descriptions)`);
}

if (failures.length) {
  console.error(`\n${failures.length} verification failure(s):`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exitCode = 1;
} else {
  console.log('\nSEO static verification completed successfully.');
}
