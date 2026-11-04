#!/usr/bin/env node
/** Run all offline source, route, template and SEO verification checks. */
import { spawnSync } from 'node:child_process';
const checks = [
  'verify-source-integrity.mjs',
  'verify-build-readiness.mjs',
  'verify-template-gallery.mjs',
  'verify-seo-static.mjs',
  'verify-eeat-phase2.mjs',
];
let failed = false;
for (const check of checks) {
  console.log(`\n=== ${check} ===`);
  const result = spawnSync(process.execPath, [`scripts/${check}`], { stdio: 'inherit' });
  if (result.error) {
    console.error(result.error);
    failed = true;
  } else if (result.status !== 0) {
    failed = true;
  }
}
console.log(`\n${failed ? 'FAIL' : 'PASS'} Offline project audit (${checks.length} checks)`);
if (failed) process.exitCode = 1;
