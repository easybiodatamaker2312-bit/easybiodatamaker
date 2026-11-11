# Start here — enable live visitor and download counters

This is the exact checklist for the EasyBiodataMaker Cloudflare Workers project in this ZIP. The application remains browser-first: biodata details, photos and PDF/PNG/JPG/Word generation stay in the visitor’s browser. The existing Next.js API route handlers run inside your Cloudflare Worker; you do not need a separate backend server.

## What is already included

- `open-next.config.ts` — required OpenNext Cloudflare configuration.
- `wrangler.jsonc` — Worker configuration, existing database ID, `ANALYTICS_DB` binding and preserved `DB` compatibility binding.
- `src/app/api/analytics/event/route.ts` — receives page-view and successful-download events.
- `src/app/api/analytics/stats/route.ts` — returns aggregate counters.
- `src/components/analytics/CloudflareAnalytics.tsx` — tracks page views across routes.
- `src/components/analytics/DownloadStats.tsx` — homepage live statistics, refreshed every 15 seconds.
- `src/components/builder/PreviewPane.tsx` — records PDF, PNG, JPG and Word downloads only after the export flow completes.
- `migrations/0001_analytics.sql` — creates the four tables used by the application.

## Step 1 — use this project source

1. Extract this ZIP.
2. Open the extracted `easybiodatamaker-main` folder in VS Code.
3. Do not copy only individual analytics files into an older project; this ZIP contains the matching API, component, configuration and migration files.

## Step 2 — confirm the Cloudflare binding

Your Cloudflare screenshot already showed these bindings pointing to `easybiodatamaker-analytics`:

- `ANALYTICS_DB` — used by this analytics code.
- `DB` — retained for compatibility with the previous configuration.

The same bindings and existing database ID are included in `wrangler.jsonc`. Do not create a second D1 database.

## Step 3 — apply the app's D1 migration (required)

Open Command Prompt in the extracted project root (the folder containing `package.json`) and run:

```cmd
npm install
npx wrangler login
npm run db:migrate:remote
```

The D1 Console screenshot showed manually created tables named `visitors`, `visitor_days` and `downloads`. Keep those tables; this migration does not delete them. It adds these four additional tables required by the included API routes:

- `download_totals`
- `download_daily`
- `visitor_daily`
- `daily_unique_visitors`

The migration uses `CREATE TABLE IF NOT EXISTS`, so it is safe to rerun.

## Step 4 — run the source/config checks

```cmd
npm run verify:all
npm run verify:cloudflare
npm run typecheck
npm test
```

## Step 5 — test the actual Cloudflare Worker build

```cmd
npx @opennextjs/cloudflare build
npx @opennextjs/cloudflare preview
```

The build must generate `.open-next/worker.js`. Do not use plain `next build` as the Cloudflare build command.

## Step 6 — deploy

For the Cloudflare Workers Builds dashboard, use:

- Build command: `npx @opennextjs/cloudflare build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

Alternatively, from the project root after the preview works:

```cmd
npx @opennextjs/cloudflare deploy
```

Do not run `npx @opennextjs/cloudflare migrate`: your project already has `wrangler.jsonc` and `open-next.config.ts`.

## Step 7 — verify live analytics

Open `https://easybiodatamaker.com/api/analytics/stats`. Before traffic is recorded, the response should show zero-valued `downloads` and `visitors` fields. Then visit the homepage and another route, wait a few seconds, and refresh the endpoint. Complete a real PDF, PNG, JPG or Word export; the matching download count should increase. The homepage counter polls the stats endpoint every 15 seconds.

## Counting and privacy notes

- Page views count each route navigation.
- Daily unique visitors are approximate unique browsers, not verified people; they use a random browser ID and a one-way daily hash.
- Downloads count only after the export/download function completes.
- Biodata details, names, contact details and photos are not sent to the analytics database.
- Public counters can be manipulated. Add Cloudflare rate limiting for `POST /api/analytics/event` before treating analytics as business-critical data.

**Build verification note:** The offline source/template/SEO/config checks are included and can be run locally. A full dependency-backed Next.js/OpenNext build must still be run in your project environment after `npm install`; this packaging environment could not finish installing dependencies, so this ZIP is not represented as having passed a full production compilation here.
