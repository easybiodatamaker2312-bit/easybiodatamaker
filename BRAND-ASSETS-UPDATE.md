# EasyBiodataMaker brand asset update

Updated the site branding using the supplied EasyBiodataMaker brand banner.

## Updated assets
- `public/brand-logo.webp` — new complete wordmark/banner used by Navbar and Footer.
- `public/favicon.svg` — lightweight vector favicon in the brand's gold/plum style.
- `public/favicon.ico` — legacy browser favicon.
- `public/favicon.png` — high-resolution favicon fallback.
- `public/icon-192.png` and `public/icon-512.png` — PWA icons.
- `public/apple-touch-icon.png` — iOS home-screen icon.
- `public/manifest.json` — refreshed PWA icon paths and warm theme colors.

## Metadata
- Root Next.js metadata now declares SVG, ICO, PNG and Apple touch icons.
- Organization structured-data logo points to the 512px icon.
- Browser theme color matches the new ivory/gold identity.

## After deploying
Favicons are aggressively cached by browsers. Hard-refresh the site, or clear the browser cache.
If the old favicon remains, test `/favicon.svg`, `/favicon.ico`, `/icon-192.png` and `/icon-512.png` directly.
