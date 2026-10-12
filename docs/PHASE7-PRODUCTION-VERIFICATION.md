# Phase 7 — Production verification and launch operations

Updated: 2026-10-11

This phase adds a read-only HTTP smoke test for the deployed site and clarifies the post-deployment workflow. It does **not** deploy the site, submit URLs to search engines, or claim that indexing has happened.

## 1. Local static guards

Run these first:

```bash
npm run verify:seo
npm run verify:source
npm run verify:build-readiness
npm run verify:templates
npm run verify:eeat
```

These checks inspect source/configuration. They do not replace a production build or browser test.

## 2. Build and regression checks

Use the Node version supported by the project and a clean dependency install:

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run test:e2e
npm run build
```

Do not mark a command as passed unless it exits successfully. If CI or the local machine reports a failure, fix it before deployment; if the environment cannot run a command, record it as blocked rather than passed.

## 3. Production HTTP smoke test

After the latest build is deployed, run:

```bash
npm run verify:production
```

The default target is `https://easybiodatamaker.com`. To check a staging deployment:

```bash
npm run verify:production -- https://YOUR-STAGING-HOST.example
```

To request checks for every URL currently listed in the deployed sitemap (this can generate many requests):

```bash
npm run verify:production -- https://easybiodatamaker.com --all-sitemap
```

The script checks HTTP availability for `robots.txt`, `sitemap.xml`, `image-sitemap.xml`, representative public pages, metadata, same-path canonicals, `/create`'s `noindex, follow` directive, exclusion of `/create` from the sitemap, duplicate sitemap paths, and the legacy Tamil redirect. It only reads public URLs. Run it against a site you own or are authorized to test.

## 4. Manual browser and schema checks

- [ ] Test mobile layout at 390px and desktop layout.
- [ ] Generate a biodata and test PDF/print, Word export, and WhatsApp/share flows.
- [ ] Confirm browser-only writing tools work without an account and generated text remains editable.
- [ ] Check a sample page, an article, a community page, a language page, and a template page.
- [ ] Validate visible JSON-LD with Schema Markup Validator; use Rich Results Test only for schema types it supports.
- [ ] Confirm no page accidentally emits `noindex`, and no indexable page points its canonical to a different intent URL.
- [ ] Check redirects resolve to their intended final destination and do not loop.
- [ ] Run Lighthouse on mobile for the homepage, a representative landing page, a guide/article, `/templates`, and `/create`.

## 5. Google Search Console

1. Add or open the verified `https://easybiodatamaker.com` property.
2. If HTML meta verification is being used, set `NEXT_PUBLIC_GSC_TOKEN` to the real token supplied by Search Console in the deployment environment. Never commit the actual verification token.
3. Deploy, then confirm the verification meta tag is present in the live document head.
4. Submit `https://easybiodatamaker.com/sitemap.xml` in the Sitemaps report.
5. Inspect the homepage, a key format page, a community page, a language page, an article, and `/create` using URL Inspection.
6. For `/create`, verify that Google can crawl the page and sees `noindex`; do not request indexing for it.
7. Review Page indexing and Sitemaps reports for fetch errors, discovered URLs, canonical selection, and excluded pages.
8. Use Performance reports after data becomes available. Improve existing pages where real queries show a useful content gap; do not infer a ranking problem from a short period without impressions.

Submitting a sitemap or requesting indexing is not a guarantee that a URL will be indexed or ranked.

## 6. Bing Webmaster Tools and IndexNow

Bing Webmaster Tools is optional. If the owner chooses to use it, verify the exact production property through Bing's current official workflow and submit the same sitemap. IndexNow is also optional and should only be enabled after choosing a supported provider/workflow and reviewing its deployment configuration. No IndexNow key, provider integration, or external submission is assumed by this project.

## 7. Privacy and analytics

Search Console verification is separate from analytics. Do not add server-side tracking, a paid analytics product, or new personal-data collection as part of SEO deployment without an explicit product decision and privacy review. The browser-only writing tools should remain usable without login.

## 8. Hold the content line

Do not add another batch of near-duplicate SEO pages immediately after launch. Let crawlers discover the current set and use real Search Console evidence to decide whether to improve, consolidate, or add content. Avoid fake ratings, reviews, user counts, unsupported claims, keyword stuffing, and ranking/indexing guarantees.
