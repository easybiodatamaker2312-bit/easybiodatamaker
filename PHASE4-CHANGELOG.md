# Phase 4 — Deepen existing content

## Changed files
- `src/app/blog/intercaste-marriage-biodata/page.tsx`: added practical family discussion guidance, example wording, what-not-to-write guidance and FAQ content.
- `src/app/blog/nri-marriage-biodata-guide/page.tsx`: added a fictional NRI sample, privacy notes, practical relocation topics, what-not-to-write guidance and FAQs.
- `src/app/blog/second-marriage-biodata-guide/page.tsx`: added respectful wording examples for divorce, widowhood and parenthood, privacy boundaries, what-not-to-write guidance and FAQs.
- `src/components/seo/SearchIntentLandingPage.tsx`: added filled fictional text samples for the 15 priority format/writing pages; sample illustrations already configured by each enhancement continue to use descriptive alt text.
- `src/components/seo/CommunityLandingPage.tsx`: added a filled fictional sample to community pages and native-language quick answers for Hindi, Gujarati and Marathi pages; updated the visible H1 for these language pages.
- `src/lib/seo/communityPages.ts`: revised Hindi, Gujarati and Marathi titles, descriptions, introductions, additional section copy and selected FAQs in the native language; added the required native-speaker-review TODO; refreshed community-page updatedAt values after shared content changed.
- `src/lib/seo/searchIntentPages.ts`: refreshed updatedAt values for the priority search-intent pages updated in this phase.
- `src/lib/seo/keywordMap.ts`: documented intent-separation decisions for life-stage and design-style page groups.
- `SEO_KEYWORD_MAP.md`: documented the keep-vs-merge decisions.

## Overlap decisions
No merge redirects were added. Life-stage pages answer different questions from the editorial second-marriage guide. Style-specific pages answer a format-selection intent, while `/templates` is the interactive gallery. All routes remain intact and none were removed from the sitemap.

## Owner/editorial notes
Hindi, Gujarati and Marathi copy is marked for native-speaker review before publish. Samples are fictional and should be replaced with accurate user details. The articles avoid legal or astrological guarantees.

## Verification
- `node scripts/verify-seo-static.mjs` — PASS
- `node scripts/verify-source-integrity.mjs` — PASS
- `node scripts/verify-build-readiness.mjs` — PASS
- `npm run lint`, `npm test`, `npm run build` — attempted; local binaries returned `Permission denied` because `node_modules/next` and `node_modules/vitest` are not present as usable installed packages in this environment. These commands must be run in a normal dependency-installed environment before deployment.
