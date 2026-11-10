# Cloudflare Workers + D1 build update

## Included in this build

- OpenNext Cloudflare adapter dependency and Wrangler CLI dependency.
- Cloudflare Worker config at `wrangler.jsonc`, using Worker name `easybiodatamaker`.
- D1 binding `DB` connected to `easybiodatamaker-analytics` (the database ID supplied in the Cloudflare dashboard screenshot).
- D1 migration for aggregate visitor and download analytics.
- Automatic page-view tracking and approximate daily unique-browser counts.
- Successful PDF, PNG, JPG and Word download tracking.
- Homepage live analytics cards that refresh automatically.
- Cloudflare preview, deploy, upload, type-generation and D1 migration scripts.
- README corrected to use Cloudflare Workers and D1 rather than Vercel/Firebase setup.

## Install and deploy

Use Node.js 22 or newer. From the project root:

```bash
npm install
npm run typecheck
npm test
npm run build
npm run db:migrate:remote
npm run preview:cf
```

After checking the Worker preview, deploy with:

```bash
npm run deploy:cf
```

The deploy command publishes to the Cloudflare Worker named `easybiodatamaker`. Confirm the Worker has the D1 binding `DB` before deploying. Keep any additional bindings, secrets, routes, or environment variables configured in your Cloudflare dashboard; this config includes the Worker runtime, static assets, self-reference and the supplied D1 binding.

## Verification performed for this package

- `package.json` parses as valid JSON.
- `wrangler.jsonc` parses as valid JSON.
- `node scripts/verify-all.mjs` passed: source integrity, build-readiness, template gallery, SEO static checks, E-E-A-T checks and offline project audit.

A full Next.js production build, TypeScript check and Vitest run were not executed in this packaging environment because the project dependencies were not installed here. Run the commands above on Node.js 22+ before production deployment.
