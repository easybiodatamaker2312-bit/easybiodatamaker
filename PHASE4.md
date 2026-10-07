# Phase 4 — Technical SEO, structured data, robots and sitemap

Implemented:
- Added `src/app/robots.ts` with public crawl access and sitemap declaration.
- Kept `/create` crawlable but `noindex`; removed `/create` from sitemap so the sitemap contains indexable URLs only.
- Removed obsolete geo-targeting meta tags (`geo.region`, `geo.placename`, coordinates/ICBM) and the obsolete `revisit-after` hint.
- Removed root-level hreflang/language alternates because these community pages are not verified translations of the homepage. Community pages remain self-canonical.
- Removed the unsupported blog `SearchAction` structured-data declaration.
- Organization JSON-LD no longer publishes an unverified founding date or `areaServed` geo signal.
- SoftwareApplication JSON-LD now declares the actual platform as `Web Browser` and keeps the free offer at `price: 0`, `priceCurrency: INR`.
- Added BreadcrumbList and FAQPage JSON-LD to the Word page; the FAQ data exactly matches the visible FAQ content.
- Confirmed no `aggregateRating`, `ratingValue`, `reviewCount`, or `review` structured-data fields exist in source.
- Sitemap now contains all 37 indexable routes and only supplies `lastModified` for URLs whose content-change date is known in this release; unchanged URLs omit it rather than publishing a fabricated date.

Validation:
- 100 TS/TSX files syntax-transpiled with TypeScript: 0 errors.
- 37 indexable routes in sitemap; `/create` excluded because it is noindex.
- No geo meta tags, fake ratings/reviews, or root hreflang mappings remain.
- Full Next typecheck/build could not be run because `node_modules` is not installed in the extracted project environment.
