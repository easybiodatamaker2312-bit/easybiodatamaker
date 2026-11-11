#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const fail = (message) => { console.error(`FAIL ${message}`); process.exitCode = 1; };
const pass = (message) => console.log(`PASS ${message}`);

let pkg;
try { pkg = JSON.parse(read('package.json')); pass('package.json is valid JSON.'); }
catch { fail('package.json is not valid JSON.'); process.exit(1); }

let wrangler;
try { wrangler = JSON.parse(read('wrangler.jsonc')); pass('wrangler.jsonc is valid JSONC-compatible JSON.'); }
catch { fail('wrangler.jsonc is not valid JSON/JSONC.'); process.exit(1); }

if (wrangler.name !== 'easybiodatamaker') fail('Worker name must remain easybiodatamaker.');
else pass('Worker name is easybiodatamaker.');
if (wrangler.main !== '.open-next/worker.js') fail('Worker entrypoint must be .open-next/worker.js.');
else pass('Worker entrypoint targets the generated OpenNext worker.');
if (!wrangler.compatibility_flags?.includes('nodejs_compat')) fail('nodejs_compat compatibility flag is missing.');
else pass('nodejs_compat is enabled.');
if (wrangler.assets?.directory !== '.open-next/assets' || wrangler.assets?.binding !== 'ASSETS') fail('OpenNext static asset binding/directory is incorrect.');
else pass('OpenNext static assets are configured.');
if (wrangler.images?.binding !== 'IMAGES') fail('Cloudflare Images binding IMAGES is missing.');
else pass('Cloudflare Images binding is preserved.');
if (!wrangler.services?.some((x) => x.binding === 'WORKER_SELF_REFERENCE' && x.service === wrangler.name)) fail('WORKER_SELF_REFERENCE must point to the current Worker.');
else pass('Worker self-reference service binding is configured.');
if (!wrangler.d1_databases?.some((x) => x.binding === 'ANALYTICS_DB' && x.database_name === 'easybiodatamaker-analytics' && x.database_id === 'd1024181-a82c-4406-9e63-c51b29c37ee4')) fail('D1 ANALYTICS_DB binding or database ID is missing/invalid.');
else pass('D1 ANALYTICS_DB binding points to the configured analytics database.');
if (!wrangler.d1_databases?.some((x) => x.binding === 'DB' && x.database_name === 'easybiodatamaker-analytics' && x.database_id === 'd1024181-a82c-4406-9e63-c51b29c37ee4')) fail('Existing DB binding was not preserved.');
else pass('Existing DB binding is preserved as a compatibility alias.');

if (!fs.existsSync(path.join(root, 'open-next.config.ts'))) fail('open-next.config.ts is missing.');
else {
  const config = read('open-next.config.ts');
  if (!config.includes('defineCloudflareConfig') || !config.includes('export default')) fail('open-next.config.ts does not export defineCloudflareConfig().');
  else pass('OpenNext Cloudflare configuration exists.');
}

for (const [key, expected] of [
  ['preview:cf', 'opennextjs-cloudflare build && opennextjs-cloudflare preview'],
  ['deploy:cf', 'opennextjs-cloudflare deploy'],
  ['db:migrate:remote', 'wrangler d1 execute easybiodatamaker-analytics --remote --file=./migrations/0001_analytics.sql'],
]) {
  if (pkg.scripts?.[key] !== expected) fail(`package.json script ${key} is missing or unexpected.`);
  else pass(`package.json script ${key} is configured.`);
}

const sql = read('migrations/0001_analytics.sql');
for (const table of ['download_totals', 'download_daily', 'visitor_daily', 'daily_unique_visitors']) {
  if (!sql.includes(`CREATE TABLE IF NOT EXISTS ${table}`)) fail(`D1 migration is missing ${table}.`);
}
if (!process.exitCode) pass('D1 migration contains all four analytics tables.');
console.log(`\n${process.exitCode ? 'FAIL' : 'PASS'} Cloudflare configuration audit.`);
