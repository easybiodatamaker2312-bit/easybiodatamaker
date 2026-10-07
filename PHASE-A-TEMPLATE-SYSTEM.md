# Phase A — Template System Infrastructure

Implemented:

- `useBiodataView()` normalized, localized view-model for all biodata fields, section ordering, optional-field visibility, contact visibility, custom fields and photos.
- Shared template contract with `Layout`, `Thumbnail`, 3 colorways and scoped CSS-variable helpers.
- Inline SVG ornament primitives: corner filigree, jaali, paisley, rangoli, gopuram and girih star.
- Auspicious header symbol preference persisted in the local Zustand store; default is `None`.
- Print export root separated from the transformed live preview. Builder UI is marked no-print and the print copy is rendered at true A4 scale.
- PDF action renamed to `Save as PDF` with browser-dialog guidance.
- PNG sharing uses `navigator.canShare({ files })` when supported and falls back to download + WhatsApp.
- Removed duplicate `biodata-preview` IDs from the legacy renderer.
- Split builder fields, steps, preview pane and resume dialog into dedicated files.
- Removed the builder's `as any` resolver cast by using typed Zod step validation and RHF errors.
- Vitest excludes Playwright e2e files.
- Added localized view-model unit tests.
- Replaced stale landing copy that claimed language/PNG work was still being designed or planned.

Known asset limitation: the repository currently contains only regular-weight Indic font assets (TTF). The template system is ready for self-hosted WOFF2 400/600/700 families, but this phase does not synthesize fake bold files. Real 600/700 WOFF2 assets must be added before the final typography acceptance gate.
