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
