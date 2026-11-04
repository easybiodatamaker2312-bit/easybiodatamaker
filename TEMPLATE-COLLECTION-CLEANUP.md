# Template collection cleanup

Removed these similar/overlapping templates from the active template registry and gallery:
- Garden Green
- Classic Ivory
- Floral Border
- Midnight Gold

Kept Gold Frame from this group.

The active collection now contains 18 registered templates. Gold Frame is the default template for new drafts and invalid/legacy template fallback. Builder selectors, landing showcase, sample metadata, SEO preview metadata, and export E2E fixtures were updated. Obsolete thumbnail assets for the four retired templates were removed.

Validation: `node scripts/verify-all.mjs` passed all offline verification groups. Run `npm run typecheck` and `npm run build` locally before deployment.
