# Template colour themes update

## What changed
- Added six additional coordinated colour palettes to every registered biodata template.
- Each template retains its original three designed colourways and adds Ocean Blue, Lavender Mist,
  Mint Sage, Sunset Peach, Berry Plum and Teal Champagne.
- All 19 templates now expose nine selectable colour themes (198 template/theme combinations).
- The builder colour selector displays the available palette count and the currently selected theme.
- New visitors start with Classic Ivory / Ivory Gold instead of the dark Midnight Gold design.
- Choosing another template continues to select that template's own first, deliberately distinct default palette.
- Updated the offline template-gallery verification to understand wrapped colourway sets.

## Validation
`npm run verify:all` passed all five offline verification scripts.
A full TypeScript compile and Next.js production build still need to be run after `npm install`
on the local machine.
