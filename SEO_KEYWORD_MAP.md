# EasyBiodataMaker SEO keyword architecture

This file documents the active keyword-to-page architecture after the Phase 2 cannibalization cleanup.

## Rules

- One primary search intent per indexable landing page.
- Natural language first; exact-match phrases are not repeated for their own sake.
- Closely overlapping URLs were consolidated with redirects rather than kept as competing pages.
- Keyword targets point to the page that best satisfies the intent, even when that page has a different but clearer URL.
- Existing community/language pages remain the targets for their supported community and language intents.
- Word, PDF, mobile, WhatsApp and photo searches are mapped to feature-led pages where those features are actually supported.
- Canva and PSD searches are mapped only to a page that clearly explains the product does not provide Canva/PSD source files; the map must not imply those files exist.
- Unsupported “without watermark” targeting has been removed because the product includes its own footer/credit.
- No fake ratings, reviews, popularity counts or “#1” claims are used.
- No ranking-speed or ranking-position guarantee is made.

## Redirected intents

These former URLs were consolidated during Phase 2. Their keyword phrases remain useful search language but target the surviving canonical page:

- `/wedding-biodata-format` → `/marriage-biodata-format`
- `/biodata-for-marriage` → `/marriage-biodata-format`
- `/matrimonial-biodata-format` → `/marriage-biodata-format`
- `/free-marriage-biodata-generator` → `/marriage-biodata-maker-online`
- `/free-biodata-maker-without-login` → `/marriage-biodata-maker-online`
- `/biodata-maker-word-document-export` → `/marriage-biodata-format-word`
- `/biodata-maker-pdf-one-page` → `/marriage-biodata-format-pdf`

The machine-readable source is `src/lib/seo/keywordMap.ts`.


## Phase 4 overlap decisions (2026-10-11)

No URL was merged in this phase because the existing routes can serve distinct intents when their copy stays focused:

- `/divorcee-marriage-biodata-format` answers the practical format/field needs of a divorced candidate.
- `/widow-widower-marriage-biodata` addresses widowhood/widowerhood-specific wording and privacy considerations.
- `/late-marriage-biodata-format` addresses candidates marrying later in life and the details they may choose to foreground.
- `/blog/second-marriage-biodata-guide` remains an editorial guide to respectful disclosure, children, legal-status wording and examples across remarriage situations. It should link to the relevant life-stage page rather than duplicate its entire landing-page content.
- `/simple-marriage-biodata-format`, `/modern-marriage-biodata-format`, `/traditional-marriage-biodata-template`, `/royal-wedding-biodata-format`, and `/single-page-marriage-biodata-format` each answer a distinct design or document-length choice. `/templates` remains the interactive browse-and-select gallery. The format pages should explain the decision and link to the gallery; they should not reproduce the whole gallery.

Because these intents are separable, no 301 redirects were added and no URLs were removed from the sitemap. Revisit the decision if Search Console query/page data later shows persistent cannibalization.
