# Phase B — Three genuinely different templates

Implemented only templates 1, 4 and 7:

- Midnight Gold
- Blush Rose Floral
- Editorial Mono

Each has its own layout component, palette system, photo treatment, ornament language and display-font token. All consume only the normalized `BiodataViewModel` plus template colorway/symbol settings.

## Validation

- All Phase B TSX files transpile with TypeScript with 0 syntax diagnostics.
- `useBiodataView` now exposes `fullName` so every template can render the name without reaching into raw storage data.
- Section order is consumed from the normalized view model; Midnight Gold was specifically changed to render sections in normalized order.
- Additional photos and custom fields are rendered through the normalized view model.
- `contactVisible` and `optionalFields` are applied before templates receive data.
- `/templates` now uses real template renders, includes colorway swatches, and links to `/create?template=id`.
- Builder template selection is visual on desktop and a bottom sheet on mobile.

## Render previews

The PNGs in `phaseB-previews/` are static A4 render checks produced from the same Phase B CSS/layout language using realistic Indian sample data. They are not browser screenshots because project npm dependencies are not installed in this execution environment.

The repository still needs the requested self-hosted WOFF2 font assets for the exact named display families (Cinzel, Great Vibes, Fraunces and the 600/700 Indic families). The code exposes the requested font tokens without synthesizing Indic bold weights.
