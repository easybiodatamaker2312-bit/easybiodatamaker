# Template gallery layout and live colour preview fix

## Fixes
- Replaced static WebP card thumbnails with each template's actual React Layout component.
- The selected colourway is passed directly to the live card preview, so changing a swatch immediately updates the gallery artwork.
- Kept the existing Quick View live preview and colour selector.
- Fixed the scattered controls: colour swatches now occupy a dedicated nine-column grid; selected theme text and Use design CTA are on a separate row.
- Standardized card content with a flex column layout so CTA rows align and do not collide with swatches.
- Kept the A4 preview proportional (794px source width scaled to 0.36 inside a 420px viewport).
- Updated the gallery verification script to test live palette-aware previews rather than static thumbnail loading.

## Validation
`npm run verify:all` passed all five offline verification groups:
- Source integrity
- Build readiness
- Template gallery live preview and colourway wiring
- SEO static checks
- E-E-A-T checks

A fresh TypeScript check and Next.js production build were not run because dependencies are not installed in this validation environment.
