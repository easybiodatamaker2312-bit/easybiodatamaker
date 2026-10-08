# EasyBiodataMaker Production Build Audit — 2026-10-08

## Vercel failure analyzed

The production build compiled and passed lint/type checking, then failed during static page generation with:

`useSearchParams() should be wrapped in a suspense boundary`

The failure appeared on `/404`, `/_not-found`, `/templates`, `/about`, multiple community pages, search-intent pages, and blog pages. This was a single shared dependency problem, not dozens of independent page bugs.

## Root cause

`src/components/analytics/GoogleAnalytics.tsx` was rendered from the root layout and called `useSearchParams()` directly. Because the component is present on every route, the App Router's prerendering phase required a Suspense boundary for every affected route.

## Fix

Removed the unnecessary `useSearchParams()` dependency from Google Analytics. Analytics now tracks the initial page and Next.js pathname navigations using `usePathname()`, while the actual URL is read from `window.location.href` only after the component is running in the browser.

This keeps analytics client-side and removes the static-prerender CSR bailout from the shared root layout.

## Additional source audit

- Confirmed there are no remaining `useSearchParams()` call sites in `src/`.
- Confirmed no duplicate `page` declarations remain in app route files.
- Confirmed all source imports resolve through the project's static source-integrity checker.
- Confirmed the 66 configured indexable SEO routes pass metadata/sitemap/robots/structured-data guards.
- Confirmed all 12 registered templates exist.
- Confirmed the language URL migration and redirect rules remain present.
- Confirmed `/create` remains `noindex, follow` and excluded from the sitemap.
- Confirmed no duplicate route directories.

## Automated checks run

### Passed

- `node scripts/verify-build-readiness.mjs`
- `node scripts/verify-seo-static.mjs`
- `node scripts/verify-source-integrity.mjs`

The build-readiness scan covers all 151 TypeScript/TSX source files.

## Local build limitation

A complete local `next build` could not be executed in this environment because the uploaded project does not contain `node_modules` or a lockfile, and package installation could not complete before the execution timeout. Therefore this audit does **not** claim that a local production build was executed successfully.

The Vercel log itself already confirmed that compilation, linting and type checking had passed before the prerendering failure. The source-level root cause shown in that log has been removed, and the affected shared hook is now absent from the application source.
