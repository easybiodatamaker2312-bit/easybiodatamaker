# EasyBiodataMaker — Cloudflare Workers deployment

This project uses **Next.js 16 + OpenNext Cloudflare + Cloudflare Workers + D1**.
It is not a Cloudflare Pages static export. Keep the existing `wrangler.jsonc` and
`open-next.config.ts` in the repository root.

## Requirements

- Node.js 22 or newer (Node 24 is suitable).
- npm 10 or newer.
- A Cloudflare account authenticated with Wrangler (`npx wrangler login`).
- Existing Worker: `easybiodatamaker`.
- Existing D1 database: `easybiodatamaker-analytics`.

## Files added/updated for Cloudflare

- `open-next.config.ts`: required OpenNext adapter configuration.
- `wrangler.jsonc`: Worker entrypoint, assets, Node compatibility, Images binding,
  self-reference service binding, D1 database binding and observability.
- `package.json`: OpenNext build/preview/deploy commands.
- `migrations/0001_analytics.sql`: aggregate visitor and download counters.

## Local setup (Windows CMD or PowerShell)

```cmd
node --version
npm --version
npm install
```

Node must report v22 or newer. Do not run `npx @opennextjs/cloudflare migrate`:
this project already has a Wrangler configuration, and the migration command
stops when it finds that file. The missing OpenNext file is provided directly.

## Validate the source and application

```cmd
npm run verify:all
npm run typecheck
npm test
npm run build
```

`npm run build` is the ordinary Next.js build. It does **not** create the Worker
bundle. The Cloudflare build below does that.

## Build and preview in the Workers runtime

```cmd
npx @opennextjs/cloudflare build
npx @opennextjs/cloudflare preview
```

The build must generate `.open-next/worker.js` and `.open-next/assets/`.
Preview it before deploying. The `.open-next` directory is generated output and
must not be committed.

## Apply the D1 schema

The Wrangler binding in `wrangler.jsonc` is named `DB` and points to the existing
D1 database ID. Apply the SQL migration once (it uses `IF NOT EXISTS`, so it can
safely be rerun):

```cmd
npx wrangler d1 execute easybiodatamaker-analytics --remote --file=./migrations/0001_analytics.sql
```

Check that the tables exist:

```cmd
npx wrangler d1 execute easybiodatamaker-analytics --remote --command="SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;"
```

Expected tables: `daily_unique_visitors`, `download_daily`, `download_totals`,
`visitor_daily`.

## Deploy

```cmd
npx @opennextjs/cloudflare deploy
```

This uses the configured Worker name and Wrangler resources. The CLI may build
as part of deploy; that is expected. For a manual split build/deploy pipeline,
run `npx @opennextjs/cloudflare build` followed by `npx wrangler deploy`.

## Cloudflare Workers Builds dashboard settings

For a dashboard build pipeline where build and deploy are separate fields, use:

- Build command: `npx @opennextjs/cloudflare build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Production branch: `main`

Do not use `npm run build` as the only Worker build command: it creates `.next`,
not `.open-next/worker.js`. Do not use `npx wrangler deploy` until the OpenNext
build has completed successfully.

The config declares these bindings so deployment configuration remains explicit:

- `DB` — D1 database `easybiodatamaker-analytics`.
- `IMAGES` — Cloudflare Images binding shown in the existing dashboard.
- `WORKER_SELF_REFERENCE` — service binding to `easybiodatamaker`.

If the dashboard contains any other production-only bindings, secrets, vars,
custom domains or routes, compare them with `wrangler.jsonc` before deploying.
Do not paste secrets into source control. Set secrets with Wrangler or the
Cloudflare dashboard.

## Verify production analytics

After deployment and after applying the D1 migration, open:

`https://easybiodatamaker.com/api/analytics/stats`

Expected JSON includes `downloads` and `visitors`. Visit a few pages, then
complete an actual PDF/PNG/JPG/Word export. The homepage analytics cards refresh
automatically. Downloads are counted only after the export flow completes.

The analytics implementation stores aggregate counters and a daily one-way
hash of a random browser ID; it does not submit biodata fields or photos.

## Notes

- Keep `wrangler.jsonc`, `open-next.config.ts`, `next.config.js`, and the D1
  migration in the repository.
- Do not commit `.env`, `.dev.vars`, Cloudflare API tokens, or other secrets.
- Keep the `nodejs_compat` flag and compatibility date in `wrangler.jsonc`.
- If `npm install` modifies package versions, review the resulting lockfile and
  run the validation commands again before production deployment.
