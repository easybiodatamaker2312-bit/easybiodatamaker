import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const SRC = path.join(ROOT, 'src');

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = walk(SRC);
const source = files.map(file => ({ file, text: fs.readFileSync(file, 'utf8') }));

const searchParamUsers = source.filter(({ text }) => /\buseSearchParams\s*\(/.test(text));
if (searchParamUsers.length) {
  console.error('FAIL useSearchParams() must not exist in the application build unless the call site is explicitly wrapped in Suspense.');
  for (const { file } of searchParamUsers) console.error(`  - ${path.relative(ROOT, file)}`);
  process.exit(1);
}
console.log('PASS No useSearchParams() call sites remain in the application source.');

const ga = path.join(SRC, 'components/analytics/GoogleAnalytics.tsx');
const gaText = fs.readFileSync(ga, 'utf8');
if (!gaText.includes("import { usePathname } from 'next/navigation';") || gaText.includes('useSearchParams')) {
  console.error('FAIL GoogleAnalytics must use the prerender-safe pathname tracking implementation.');
  process.exit(1);
}
console.log('PASS GoogleAnalytics uses prerender-safe navigation tracking.');

const duplicatePagePattern = /const\s+page\s*=.*[\r\n]+[\s\S]{0,800}?const\s+page\s*:/g;
for (const { file, text } of source.filter(x => x.file.includes(`${path.sep}app${path.sep}`))) {
  if (duplicatePagePattern.test(text)) {
    console.error(`FAIL Duplicate page variable detected: ${path.relative(ROOT, file)}`);
    process.exit(1);
  }
  duplicatePagePattern.lastIndex = 0;
}
console.log('PASS No duplicate page variable declarations detected in app routes.');

console.log(`Build-readiness scan completed for ${files.length} TypeScript/TSX source files.`);
