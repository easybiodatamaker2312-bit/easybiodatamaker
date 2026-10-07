# Phase 5 — Performance / Lighthouse optimization

## Scope
Performance work only. No analytics, server-side processing, paid services, URL renames, or SEO content changes were introduced.

## Changes
- `/create` now lazy-loads the entire interactive `BiodataBuilder` with `next/dynamic` and `ssr:false`.
- Added a fixed-size loading skeleton for `/create` to reserve layout space while the builder chunk loads, reducing layout shift.
- Existing interaction-only `html2canvas` loading remains dynamic in `src/lib/pdf.ts`.
- Existing interaction-only `docx` loading remains dynamic in `src/lib/word-export.ts`.
- Removed seven legacy Indic TTF `@font-face` declarations from `globals.css`; the optimized `next/font/local` WOFF2 definitions are the single source of truth.
- Set `preload:false` on all 14 non-Latin Indic font definitions so the initial page does not preload every script. Latin UI/display fonts remain eligible for initial loading.
- Template photos use asynchronous image decoding and lazy loading for gallery/preview images.
- Existing A4 preview dimensions remain reserved in the builder CSS.

## Static performance deltas
- Initial font preload candidates: 16 font families -> 2 primary Latin families.
- Legacy global Indic TTF declarations: 7 -> 0.
- Heavy builder dependency graph is no longer part of the initial `/create` route module; it loads after the route shell.
- `html2canvas` remains interaction-only.
- `docx` remains interaction-only.

## Lighthouse targets
The intended mobile targets remain:
- LCP <= 2.0s target; never > 2.5s
- INP <= 200ms
- CLS <= 0.10

A real Lighthouse run was not claimed because this execution environment could not complete `npm install` within the available time, so no fabricated before/after Lighthouse numbers are reported.

## Validation
- 100 TS/TSX source files present.
- 14 Indic `preload:false` declarations present.
- 0 legacy Indic `@font-face` declarations remain in `globals.css`.
- `docx` and `html2canvas` are dynamically imported.
- `npm install --ignore-scripts --no-audit --no-fund` timed out in this environment; no full `next build` or Lighthouse score is claimed.
