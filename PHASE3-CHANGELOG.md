# Phase 3 — Publish six blog drafts

## Added
- `src/app/blog/gotra-kya-hota-hai-biodata-mein/page.tsx`
- `src/app/blog/manglik-kya-hota-hai/page.tsx`
- `src/app/blog/shaadi-ka-biodata-kaise-banaye/page.tsx`
- `src/app/blog/biodata-photo-tips/page.tsx`
- `src/app/blog/marriage-biodata-sample-girl-boy/page.tsx`
- `src/app/blog/mumbai-marriage-biodata/page.tsx`

## Changed
- `src/lib/seo/sitePages.ts`: added all six routes as `article` entries with metadata and updatedAt.
- `src/app/blog/page.tsx`: added all six to the blog index.
- `src/app/marriage-biodata-guides/page.tsx`: added the articles to a dedicated group, included their routes in the collection ItemList, and resolves titles from SITE_PAGES as well as search-intent pages.
- Hindi article content has `lang="hi"` on its article element and a TODO comment for native-speaker review.
- Corrected `मंगlik` to `मंगलिक` in the Manglik article.

## Deleted
- The six corresponding Markdown drafts from `docs/drafts/blog/` after publishing as routes.

## Editorial note
The content avoids treating astrological traditions as universally interpreted facts and recommends verifying family-specific details. It does not claim expert credentials. All six articles link to a relevant format/tool page and the guides hub.

## Verification
Static SEO/source/build-readiness checks and local TypeScript syntax checks are recorded in the delivery response. Full lint, tests and production build require project dependencies.
