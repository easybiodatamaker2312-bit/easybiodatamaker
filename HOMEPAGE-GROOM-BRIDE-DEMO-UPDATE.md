# Homepage groom and bride demo previews

## Changes
- Replaced the homepage hero's old illustrated avatar SVGs with the same modern sample portrait JPGs used by the template gallery.
- Hero now shows both Groom and Bride biodata documents side by side, each populated with fictional sample data.
- Updated sample names to first names only: Aarav and Ananya.
- Added gender-specific sample details such as birth date, height, education, occupation, family names, contact details and personal introduction.
- Updated hero labels to `GROOM · SAMPLE` and `BRIDE · SAMPLE`.
- The homepage template showcase now uses the photo portraits as well, alternating groom and bride examples across the featured templates.
- Removed the obsolete avatar SVG demo assets.
- Added verification checks to ensure the homepage uses the photo assets and first-name-only sample profiles.

## Validation
`node scripts/verify-all.mjs` passed all five offline verification groups. TypeScript and production build were not run in this environment; run `npm run typecheck` and `npm run build` locally before deployment.
