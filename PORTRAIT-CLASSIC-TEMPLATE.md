# Portrait Classic template

Added a new A4 biodata design based on the supplied visual reference.

## Design
- Ivory paper with a refined double gold frame and delicate corner flourishes.
- Centered first-name heading and small "A Personal Introduction / Marriage Biodata" title.
- Two-column upper layout: large rounded portrait on the left and personal details on the right.
- Full-width family, education/career, about-me, additional and contact sections below.
- Warm translucent section bars, fine row dividers and a small ornamental footer.
- Three built-in colourways (Portrait Gold, Portrait Rose, Portrait Sage), plus the six shared extra colour themes.

## Integration
- Registered as `portrait-classic` / "Portrait Classic" in the template registry.
- Available in the template gallery, Quick View, builder selection, and export via the shared template registry.
- Gallery uses the live React template for colour switching; supplied reference image is also included as the optimized WebP preview asset.
- Existing default template remains Gold Frame.

## Validation
`node scripts/verify-all.mjs` passed all five offline verification groups, including 19 template registrations and the gallery checks.

`npm run typecheck` and `npm run build` were not run because `node_modules` is not installed in this working environment. Run them locally before deploying.
