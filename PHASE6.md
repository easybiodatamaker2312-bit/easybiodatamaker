# Phase 6 — SEO / QA guards

## Completed

- Added automated SEO guards for sitemap coverage, title/description/canonical presence, `/create` noindex behavior, community self-canonicals and metadata length.
- Added a five-word shingle duplicate-content guard for the 13 community landing pages. Current maximum overlap is 3.14%, well below the 40% threshold.
- Added a source guard rejecting `aggregateRating`, `ratingValue`, `reviewCount`, and `itemReviewed` claims.
- Added export guards for dynamic `docx` and `html2canvas` imports and the exact free-tier print footer.
- Added a 390px Playwright regression test covering Save as PDF, Download Word, Share / WhatsApp visibility and horizontal overflow.
- Fixed legacy canonical paths for `/blog/intercaste-marriage-biodata` and `/blog/second-marriage-biodata-guide` without changing their URLs.
- Fixed the NRI guide Open Graph URL to its actual `/blog/...` path.
- Added self-canonical metadata for `/templates` through a route layout.
- Changed `/create` from `noindex,nofollow` to `noindex,follow`; it remains excluded from the sitemap.

## Validation

- 100 TS/TSX source/test files transpile with 0 syntax diagnostics.
- Sitemap contains 37 indexable URLs; every sitemap URL has a route file and metadata source containing title, description and canonical.
- `/create` is absent from sitemap and has `index: false` + `follow: true`.
- Community duplicate guard: maximum five-word shingle overlap 3.14% (Muslim vs Christian).
- No aggregate rating/review structured-data fields found in `src`.
- No stale canonical strings for the three corrected blog routes remain.

## Environment limitation

A full `npm install` timed out in this execution environment, so `vitest`, `next build`, Playwright browser execution and a production `tsc --noEmit` run could not be honestly reported as passed. The tests are committed to the project for CI/local execution.
