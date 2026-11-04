# Homepage motion + live download analytics update

## UI updates
- The landing hero now has a mouse-reactive 3D biodata preview, layered paper sheets, floating micro-cards, ambient light and animated sparkles.
- Download analytics now shows lifetime downloads, today's downloads, and lifetime/today counts for PDF, PNG, JPG and Word.
- Statistics cards animate into view and lift on hover; counters animate when refreshed.
- Motion respects the visitor's `prefers-reduced-motion` setting.

## Analytics behavior
- Successful PDF, PNG, JPG and Word exports increment lifetime and daily counters.
- Daily keys use the `Asia/Kolkata` timezone and reset at midnight IST.
- Homepage statistics refresh every 10 seconds.
- Share/WhatsApp is not included as a download.

## Setup required
Set `NEXT_PUBLIC_FIREBASE_DATABASE_URL` and publish the updated rules in `FIREBASE-DOWNLOAD-STATS-SETUP.md`, then redeploy. The frontend can only show shared live counters after the database is configured.

## Verification note
The project dependencies were not fully available in the build environment, and `npm ci` timed out. Run `npm ci`, `npm run typecheck`, `npm test` and `npm run build` locally/CI before deploying.


## 2026-11-03 follow-up
- Fixed the missing-counter UX: the homepage now displays an explicit Firebase setup state instead of hiding the entire counter section.
- Brightened the homepage palette and replaced the near-black hero title with a plum/coral gradient.
- Replaced the dark hero document with Blush Rose and Pearl Lavender previews featuring original illustrated man/woman sample avatars.
- See `HOMEPAGE-THEME-COUNTER-AUDIT-2026-11-03.md` for the audit and deployment requirements.
