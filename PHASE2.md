# Phase 2 — Product + Export

Implemented on top of Phase 1.

## Builder
- Optional community field packs for all 13 Phase 1 community routes.
- NRI pack with country, citizenship, visa/residency, relocation preference, years abroad, height in feet/inches and height in cm.
- Packs are off on plain `/create`; community/NRI CTAs can pre-enable the relevant pack through query parameters.
- Pack labels and descriptions are localized for the supported builder languages.

## Word export
- Added `docx` dependency (`^9.8.1`).
- Client-only dynamic import: `await import('docx')` happens only when Download Word is clicked.
- Real `.docx` generation in the browser.
- A4 page dimensions and margins.
- Text remains selectable/editable.
- Language-specific Indic font families are specified for Devanagari, Gujarati, Tamil, Telugu, Bengali, Gurmukhi and Kannada.
- Exact EasyBiodataMaker footer is added as a Word document footer.

## Share / PDF / PNG
- Existing browser print pipeline remains the PDF path, preserving selectable text.
- Added exact EasyBiodataMaker footer to the print pipeline with fixed positioning so it repeats on printed pages.
- Existing PNG share path uses `navigator.canShare({ files })`; unsupported file sharing falls back to PNG download and WhatsApp text.
- Added one-line export/share hint in the preview controls.

## SEO page
- Added `/marriage-biodata-format-word` with original content, self-canonical metadata, visible FAQ and clear Word-vs-PDF guidance.

## Validation
- TypeScript/TSX transpilation syntax check: 96 files, 0 syntax errors.
- Full dependency install/build/typecheck could not be completed because package installation timed out in the execution environment.
