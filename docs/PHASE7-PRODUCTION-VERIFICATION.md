# Phase 7 — Production Verification

Date: 2026-10-07

## Automated static verification

Run:

```bash
npm run verify:seo
```

Current result:

- 37 unique sitemap routes
- `/create` excluded from sitemap
- `/create` is `noindex, follow`
- Sitemap route files exist
- Sitemap routes have title/description/canonical metadata in the page or route layout
- No `aggregateRating`, `ratingValue`, `reviewCount`, or `itemReviewed` source tokens
- `docx` remains interaction-only via dynamic import
- `html2canvas` remains interaction-only via dynamic import
- 13 community titles are within 60 characters
- 13 community descriptions are within 155 characters

## Dependency/build verification

A dependency install was attempted in the isolated execution environment, but `npm install --no-audit --no-fund` timed out before dependencies became available. Consequently this environment cannot honestly certify:

- `npm run typecheck`
- `npm test`
- `npm run test:e2e`
- `npm run build`
- Lighthouse measurements

A global TypeScript compiler was used for syntax/transpilation validation: **101 TS/TSX source files, 0 syntax diagnostics**.

## Production checklist

1. Install dependencies with the project's supported Node version.
2. Run `npm run verify:seo`.
3. Run `npm run typecheck`.
4. Run `npm test`.
5. Run `npm run test:e2e`.
6. Run `npm run build`.
7. Run Lighthouse mobile against `/`, one community page, `/create`, the Word page, USA NRI page and UK/Canada page.
8. After deployment, verify `/robots.txt` and `/sitemap.xml` return 200.
9. Verify `/create` emits `noindex, follow` and is absent from the sitemap.
10. Verify every indexable page has a self-canonical.
11. Verify JSON-LD with Google's Rich Results Test / Schema Markup Validator.
12. Submit the sitemap in Google Search Console.
13. Inspect the homepage, one community page and both NRI pages in URL Inspection.
14. Monitor indexing, impressions, queries, CTR and canonical selection before adding more SEO pages.

## Ranking-growth rule

Do not add another batch of near-duplicate keyword pages immediately after deployment. Let Google discover and evaluate the current set first. Expand only where Search Console data shows a genuine query/content gap.
