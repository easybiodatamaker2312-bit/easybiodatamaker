# Phase 7 changelog — Production verification

Date: 2026-10-11

## Changes
- Added `scripts/verify-production.mjs`, a read-only HTTP smoke test for the deployed domain or a supplied staging URL.
- Added `npm run verify:production` command.
- Checks robots, XML sitemaps, representative page HTTP responses, title/description metadata, canonical paths, `/create` noindex/follow behavior, sitemap exclusion, duplicate sitemap URLs, and the legacy Tamil route redirect.
- Added optional `--all-sitemap` mode for checking every sitemap URL; this should be used deliberately because it makes more requests.
- Updated `docs/PHASE7-PRODUCTION-VERIFICATION.md` with local build/regression steps, production smoke-test usage, manual export/schema checks, Search Console workflow, optional Bing/IndexNow guidance, and post-launch content rules.
- Corrected the E-E-A-T source guard so blog routes using the shared `AnswerGuideArticle` component are recognized as rendering its embedded `AuthorBox`.

## Verification results
- SEO static guard: PASS (66 configured unique indexable routes).
- Source integrity guard: PASS (162 source files, 22 registered designs).
- Build-readiness guard: PASS.
- Template gallery guard: PASS (22 unique template IDs).
- E-E-A-T guard: PASS (19 blog routes checked).
- Production HTTP smoke test: NOT VERIFIED in this execution environment because outbound requests to the production domain failed/aborted. This is an environment/network limitation and does not establish that the live site is down. Run `npm run verify:production` from a machine with network access after deployment.
- Full Next build, typecheck, unit tests, Playwright browser tests, and Lighthouse: not claimed as passed here.
