import fs from 'node:fs';
import path from 'node:path';

const registryPath = path.join(process.cwd(), 'src/components/biodata/TemplateRegistry.tsx');
const galleryPath = path.join(process.cwd(), 'src/app/templates/page.tsx');
const registry = fs.readFileSync(registryPath, 'utf8');
const gallery = fs.readFileSync(galleryPath, 'utf8');

const union = registry.match(/export type TemplateId\s*=\s*([^;]+);/s)?.[1] ?? '';
const ids = [...union.matchAll(/'([^']+)'/g)].map((match) => match[1]);
const entries = registry.match(/export const TEMPLATES:[\s\S]*?=\s*\{([\s\S]*?)\n\};/)?.[1] ?? '';
const entryIds = [...entries.matchAll(/^\s*'([^']+)'\s*:/gm)].map((match) => match[1]);
const errors = [];

if (ids.length < 1) errors.push('TemplateId union could not be read.');
if (new Set(ids).size !== ids.length) errors.push('TemplateId union contains duplicate IDs.');
if (new Set(entryIds).size !== entryIds.length) errors.push('Template registry contains duplicate entries.');
if (ids.length !== entryIds.length) errors.push(`TemplateId union (${ids.length}) and registry entries (${entryIds.length}) do not match.`);
for (const id of ids) {
  if (!entryIds.includes(id)) errors.push(`Template '${id}' is declared but not registered.`);
  if (!fs.existsSync(path.join(process.cwd(), 'public/templates', `${id}.webp`))) errors.push(`Template '${id}' has no optimized WebP thumbnail.`);
}
for (const id of entryIds) if (!ids.includes(id)) errors.push(`Template '${id}' is registered but missing from TemplateId union.`);

const templateEntries = entries.split(/(?=^\s*'[^']+'\s*:)/m).filter((part) => /^\s*'[^']+'\s*:/.test(part));
for (const entry of templateEntries) {
  const id = entry.match(/^\s*'([^']+)'\s*:/)?.[1] ?? 'unknown';
  if (!/colorways\s*:\s*[A-Z_]+/.test(entry)) errors.push(`Template '${id}' does not reference a colorway set.`);
  if (!/Layout\s*:/.test(entry)) errors.push(`Template '${id}' has no live layout component.`);
}
if (!gallery.includes('src={`/templates/${id}.webp`}')) errors.push('Template cards must use optimized WebP thumbnails rather than rendering every live layout.');
if (!gallery.includes('priority={index < 4}') || !gallery.includes("loading={index < 4 ? 'eager' : 'lazy'}")) errors.push('Template thumbnails must prioritize only the first row and lazy-load the rest.');
if (!gallery.includes('href={`/create?template=${id}&colorway=${cw.id}`}')) errors.push('Template card CTA does not pass the selected colorway to /create.');
if (!gallery.includes('colorway=${selectedColorway(quickViewId).id}')) errors.push('Quick-view CTA does not pass the selected colorway to /create.');
if (!gallery.includes('setFilter') || !gallery.includes('setSearch')) errors.push('Search/category filters are missing.');
if (!gallery.includes('role="dialog"') || !gallery.includes('aria-modal="true"')) errors.push('Quick-view dialog accessibility attributes are missing.');

if (errors.length) {
  console.error('FAIL Template gallery verification:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`PASS ${ids.length} unique template IDs match ${entryIds.length} registry entries.`);
console.log('PASS Every registered template references a colorway set and live layout.');
console.log('PASS Card and quick-view CTAs preserve the selected colorway.');
console.log('PASS Search, category filters and accessible quick-view dialog are present.');
console.log('PASS All template cards use optimized WebP thumbnails; only the first row is prioritized.');
