# Homepage theme and live counter audit — 2026-11-03

## Findings in the prior build
- `DownloadStats` returned `null` when `Cloudflare D1 DB binding` was absent. This hid the entire homepage counter section, making it appear that the download buttons were not tracked.
- The hero explicitly rendered `midnight-gold`, a dark template with near-black text.
- The homepage title used the global `text-ink` palette (`#1C1917`).
- The landing preview passed an empty photo array, so it showed a photo placeholder rather than a sample portrait.

## Changes in this update
- The counter section now remains visible before Cloudflare D1 setup and clearly reports that shared live statistics are not configured; it never fabricates counts.
- After Firebase is configured, the existing lifetime and India-time daily counts remain visible, with per-format totals and 10-second refresh.
- The hero headline uses a plum-to-coral gradient, and the brand ink palette is now plum rather than near-black.
- Replaced the dark hero sample with two colorful template previews: Blush Rose Floral and Pearl Lavender.
- Added original illustrated SVG sample portraits for a man and a woman. They are clearly marked as illustrated samples and are not real people or stock photographs.
- Refreshed the hero and statistics backgrounds with brighter rose, peach and lilac gradients.

## Required to activate shared counts
Set `Cloudflare D1 DB binding` in the hosting provider and publish the Realtime Database rules from `CLOUDFLARE-D1-ANALYTICS-SETUP.md`, then redeploy. The frontend cannot create shared cross-visitor counters without a configured shared database.

## Download counting
PDF, PNG, JPG and Word are counted after the existing export/download function completes. Share/WhatsApp actions are not counted. Daily totals roll over at midnight Asia/Kolkata.

## Verification
Run `npm ci`, `npm run typecheck`, `npm test`, and `npm run build` in the project environment. Dependencies are not included in this ZIP, and a production build has not been run in this environment.
