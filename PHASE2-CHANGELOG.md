# Phase 2 — Trust and E-E-A-T changelog

Date: 2026-10-11

## Added
- `src/components/seo/AuthorBox.tsx` — author/reviewer box with Karan Shah, a product-focused bio, reviewed-on date, `/about` link, optional credentials/photo props, and owner-input TODO.
- `scripts/verify-eeat-phase2.mjs` — automated checks for author boxes, sensitive guides, social schema and About-page editorial details.

## Changed
- `src/app/blog/biodata-mistakes-to-avoid/page.tsx` — added AuthorBox.
- `src/app/blog/free-biodata-maker-vs-word-template/page.tsx` — added AuthorBox.
- `src/app/blog/how-to-write-biodata-for-marriage/page.tsx` — added AuthorBox.
- `src/app/blog/intercaste-marriage-biodata/page.tsx` — added AuthorBox.
- `src/app/blog/marriage-biodata-format-india/page.tsx` — added AuthorBox.
- `src/app/blog/nri-marriage-biodata-guide/page.tsx` — added AuthorBox.
- `src/app/blog/second-marriage-biodata-guide/page.tsx` — added AuthorBox.
- `src/app/blog/what-to-write-in-partner-expectations/page.tsx` — added AuthorBox.
- `src/components/seo/SearchIntentLandingPage.tsx` — conditionally adds AuthorBox to divorcee, widow/widower and late-marriage sensitive guides.
- `src/app/layout.tsx` — Organization JSON-LD `sameAs` is now built from `NEXT_PUBLIC_SOCIAL_LINKEDIN`, `NEXT_PUBLIC_SOCIAL_INSTAGRAM`, and `NEXT_PUBLIC_SOCIAL_YOUTUBE`; empty values are omitted.
- `src/app/about/page.tsx` — expanded product ownership, review process, cultural guidance, contact path and owner-input placeholders; corrected template count to 22.
- `package.json` — added `verify:eeat` script.

## Verification
- `node scripts/verify-eeat-phase2.mjs` — PASS (5 checks; 8 blog routes checked).
- `node scripts/verify-seo-static.mjs` — PASS.
- `node scripts/verify-source-integrity.mjs` — PASS (144 source files, 22 registered designs).
- `node scripts/verify-build-readiness.mjs` — PASS.
- `npm run lint` — BLOCKED: `next` is not installed in the environment (exit 127).
- `npm test` — BLOCKED: `vitest` is not installed in the environment (exit 127).
- `npm run build` — BLOCKED: `next` is not installed in the environment (exit 127).

## Owner input still required
- Add only verified author credentials and an approved photo, or confirm that they should remain omitted.
- Set the three social environment variables only to official profiles controlled by EasyBiodataMaker.
- Confirm the preferred public support email/contact process before making any response-time promises.
