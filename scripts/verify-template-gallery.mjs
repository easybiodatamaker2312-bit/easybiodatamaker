import fs from 'node:fs';
import path from 'node:path';

const registryPath = path.join(process.cwd(), 'src/components/biodata/TemplateRegistry.tsx');
const galleryPath = path.join(process.cwd(), 'src/app/templates/page.tsx');
const landingPath = path.join(process.cwd(), 'src/components/landing/TemplateShowcase.tsx');
const registry = fs.readFileSync(registryPath, 'utf8');
const gallery = fs.readFileSync(galleryPath, 'utf8');
const landing = fs.readFileSync(landingPath, 'utf8');

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
  if (!fs.existsSync(path.join(process.cwd(), 'public/templates', `${id}.webp`))) errors.push(`Template '${id}' has no optimized WebP preview asset.`);
}
for (const id of entryIds) if (!ids.includes(id)) errors.push(`Template '${id}' is registered but missing from TemplateId union.`);

const templateEntries = entries.split(/(?=^\s*'[^']+'\s*:)/m).filter((part) => /^\s*'[^']+'\s*:/.test(part));
for (const entry of templateEntries) {
  const id = entry.match(/^\s*'([^']+)'\s*:/)?.[1] ?? 'unknown';
  if (!/colorways\s*:\s*(?:withExtraColorThemes\()?[A-Z_]+/.test(entry)) errors.push(`Template '${id}' does not reference a colorway set.`);
  if (!/Layout\s*:/.test(entry)) errors.push(`Template '${id}' has no live layout component.`);
}
if (!gallery.includes('<t.Layout view={view} auspiciousSymbol="none" colorway={cw} />')) errors.push('Gallery cards must render the live template with the currently selected colorway.');
if (!gallery.includes('template-gallery-preview')) errors.push('Gallery live preview container is missing.');
if (!gallery.includes('grid grid-cols-9')) errors.push('Colour swatches must use a stable nine-column grid.');
if (!gallery.includes('href={`/create?template=${id}&colorway=${cw.id}`}')) errors.push('Template card CTA does not pass the selected colorway to /create.');
if (!gallery.includes('colorway=${selectedColorway(quickViewId).id}')) errors.push('Quick-view CTA does not pass the selected colorway to /create.');
if (!gallery.includes('setFilter') || !gallery.includes('setSearch')) errors.push('Search/category filters are missing.');
if (!gallery.includes('role="dialog"') || !gallery.includes('aria-modal="true"')) errors.push('Quick-view dialog accessibility attributes are missing.');


if (!gallery.includes("useState<'groom' | 'bride'>('groom')")) errors.push('Gallery must provide groom and bride demo-profile switching.');
if (!gallery.includes("dataUrl: '/demo/sample-groom.jpg'") || !gallery.includes("dataUrl: '/demo/sample-bride.jpg'")) errors.push('Both sample portrait assets must be wired into demo profiles.');
if (!gallery.includes('Groom sample') || !gallery.includes('Bride sample')) errors.push('Template cards must label which demo profile is being previewed.');


if (!landing.includes("'/demo/sample-groom.jpg'") || !landing.includes("'/demo/sample-bride.jpg'")) errors.push('Homepage hero/template previews must use real demo portrait image assets instead of avatar SVGs.');
if (!landing.includes("fullName: variant === 'woman' ? 'Ananya' : 'Aarav'")) errors.push('Homepage demo biodata must use fictional first-name-only profiles.');
if (!landing.includes('GROOM · SAMPLE') || !landing.includes('BRIDE · SAMPLE')) errors.push('Homepage hero must label both groom and bride sample biodata previews.');
for (const asset of ['sample-groom.jpg', 'sample-bride.jpg']) {
  if (!fs.existsSync(path.join(process.cwd(), 'public/demo', asset))) errors.push(`Homepage demo portrait asset '${asset}' is missing.`);
}

if (errors.length) {
  console.error('FAIL Template gallery verification:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`PASS ${ids.length} unique template IDs match ${entryIds.length} registry entries.`);
console.log('PASS Every template references a colourway set and live layout.');
console.log('PASS Gallery cards render live previews that respond to selected colour themes.');
console.log('PASS Colour swatches use a stable grid and card/quick-view CTAs preserve the selected colour.');
console.log('PASS Search, category filters and accessible quick-view dialog are present.');
console.log('PASS Groom and bride sample profiles with modern demo portraits are available across all templates.');
