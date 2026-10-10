import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const failures = [];
const pass = (message) => console.log(`PASS  ${message}`);
const fail = (message) => failures.push(message);

function resolveSourceImport(fromFile, specifier) {
  const base = specifier.startsWith('@/')
    ? path.join(srcRoot, specifier.slice(2))
    : path.resolve(path.dirname(fromFile), specifier);

  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.jsx`,
    `${base}.json`,
    path.join(base, 'index.ts'),
    path.join(base, 'index.tsx'),
    path.join(base, 'index.js'),
    path.join(base, 'index.jsx'),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate));
}

const sourceFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) sourceFiles.push(full);
  }
}
walk(srcRoot);

const importPattern = /(?:from\s+|import\s*\()(['"])([^'"]+)\1/g;
let unresolved = 0;
for (const file of sourceFiles) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(importPattern)) {
    const specifier = match[2];
    if (!(specifier.startsWith('./') || specifier.startsWith('../') || specifier.startsWith('@/'))) continue;
    if (!resolveSourceImport(file, specifier)) {
      unresolved += 1;
      fail(`${path.relative(root, file)}: unresolved source import ${specifier}`);
    }
  }
}
if (!unresolved) pass(`All ${sourceFiles.length} source files have resolvable local/alias imports`);

const registry = path.join(srcRoot, 'components', 'biodata', 'TemplateRegistry.tsx');
const contract = path.join(srcRoot, 'components', 'biodata', 'template-contract.ts');
if (!fs.existsSync(contract)) fail('Missing template-contract.ts');
if (fs.readFileSync(registry, 'utf8').startsWith("'use client';")) fail('TemplateRegistry must remain server-compatible because SEO server pages render registered templates');
else pass('TemplateRegistry remains server-compatible');

const templateFiles = [
  'phaseB/MidnightGold.tsx', 'phaseB/BlushRoseFloral.tsx', 'phaseB/EditorialMono.tsx',
  'phaseC/RajwadaCrimson.tsx', 'phaseC/EmeraldPalace.tsx', 'phaseC/RoyalPeacock.tsx',
  'phaseC2/HaldiMarigold.tsx', 'phaseC2/PearlLavender.tsx', 'phaseC2/SandstoneRajasthan.tsx',
  'phaseC3/KanjivaramTemple.tsx', 'phaseC3/NoorNavy.tsx', 'phaseC3/SapphireSilver.tsx',
  'phaseD/InspiredCollection.tsx',
];
const missingTemplates = templateFiles.filter((file) => !fs.existsSync(path.join(srcRoot, 'components', 'biodata', 'templates', file)));
if (missingTemplates.length) fail(`Missing registered template files: ${missingTemplates.join(', ')}`);
else pass('All 13 template implementation files exist (22 registered designs)');

if (failures.length) {
  console.error(`\n${failures.length} source-integrity failure(s):`);
  failures.forEach((failure) => console.error(`FAIL  ${failure}`));
  process.exitCode = 1;
} else {
  console.log('\nSource integrity verification completed successfully.');
}
