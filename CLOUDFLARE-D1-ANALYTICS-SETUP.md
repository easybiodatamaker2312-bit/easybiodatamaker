# Cloudflare Workers analytics setup (D1)

This replaces the old Firebase Realtime Database download counter with Cloudflare D1 and adds aggregate visitor tracking.

## What is counted

- Successful PDF, PNG, JPG and Word exports.
- Total page views across the site.
- Page views today (India Standard Time).
- Approximate unique browsers today, using a random browser ID stored in localStorage and a one-way daily SHA-256 hash in D1.

The analytics code does not send or store biodata fields, uploaded photos, names, email addresses, phone numbers, query strings or IP addresses in D1. Cloudflare itself processes network data to deliver and secure the Worker. The browser ID is pseudonymous analytics data, not a verified count of individual people. Old daily hashes are removed automatically as new-day traffic arrives.

## 1. Confirm the adapter

These API routes use the OpenNext Cloudflare adapter. Your Worker config should use `main: ".open-next/worker.js"`. If your deployed Worker uses vinext instead, do not copy the OpenNext `getCloudflareContext` import; the binding access code must be adapted to vinext's `cloudflare:workers` runtime.

## 2. Install the project dependencies

Use Node.js 22 or newer. The OpenNext Cloudflare adapter and Wrangler are already declared in this project's `package.json`; do not install floating `@latest` versions over the pinned project setup.

```bash
npm install
```

The `next.config.js` initializes the OpenNext Cloudflare development adapter so the D1 binding can be accessed while developing with `next dev`.

## 3. Confirm the existing D1 database binding

This project already targets the existing database `easybiodatamaker-analytics` with ID `d1024181-a82c-4406-9e63-c51b29c37ee4`. The binding name used by the application is `ANALYTICS_DB`. It is already present in this project’s `wrangler.jsonc` and in the Cloudflare Worker settings shown during setup. Do not create another database.

The expected Wrangler entry is:

```jsonc
"d1_databases": [
  {
    "binding": "ANALYTICS_DB",
    "database_name": "easybiodatamaker-analytics",
    "database_id": "PASTE_THE_REAL_DATABASE_ID_HERE"
  }
]
```

The dashboard currently shows both `ANALYTICS_DB` and the previous `DB` binding to the same database. Both are retained in `wrangler.jsonc` so deployment preserves the existing configuration. This build reads `ANALYTICS_DB`.

## 4. Apply the analytics schema in D1

The earlier manual tables named `visitors`, `visitor_days`, and `downloads` can remain. This migration adds the four aggregate tables used by this application; it does not drop or overwrite those earlier tables.

For a local test database:

```bash
npx wrangler d1 execute easybiodatamaker-analytics --local --file=./migrations/0001_analytics.sql
```

For the production database used by your live Worker:

```bash
npx wrangler d1 execute easybiodatamaker-analytics --remote --file=./migrations/0001_analytics.sql
```

## 5. Generate binding types

```bash
npx wrangler types --env-interface CloudflareEnv
```

The route code includes a small local D1 interface so the feature does not depend on a generated global type file, but generating types is still recommended for the rest of your Worker project.

## 6. Test locally

```bash
npm run dev
```

Open the homepage and another page. Then open these endpoints:

- `http://localhost:3000/api/analytics/stats` — reads current stats.
- Page navigation should POST to `/api/analytics/event`.
- A successful export should POST a download event to `/api/analytics/event`.

For a more production-like Worker test, use your existing OpenNext preview script (commonly `npm run preview`) after checking that it runs the OpenNext build and Wrangler preview.

## 7. Deploy

Use your existing production deploy command so the same Worker receives the new D1 binding. For a standard OpenNext project, the deploy command is commonly:

```bash
npx opennextjs-cloudflare build
npx wrangler deploy
```

If you deploy through the Cloudflare dashboard / Git integration, commit the source and ensure the D1 binding is present in the Worker configuration before deploying.

## 8. Verify production

Visit:

```text
https://easybiodatamaker.com/api/analytics/stats
```

The JSON response should contain `downloads` and `visitors`. Visit two pages, refresh the stats endpoint, then complete a PDF or image export. Counts should update on the homepage within 15 seconds.

## Important notes

- Remove `NEXT_PUBLIC_FIREBASE_DATABASE_URL` from your production environment after verifying that no other feature uses it. The analytics code no longer reads Firebase.
- Existing Firebase totals are not automatically imported. If you want to preserve old totals, export them and seed `download_totals` and `download_daily` before switching.
- Existing Google Analytics remains separate. This D1 counter is first-party and is not a replacement for GA4.
- Add a Cloudflare rate-limiting rule for `POST /api/analytics/event` if the endpoint receives abusive traffic. Public counters can be manipulated; do not use them for billing or security decisions.
- Update your privacy notice before launch. This update documents the random localStorage ID and daily hashed visitor estimate.
