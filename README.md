# 🎊 EasyBiodataMaker.com — Complete Production-Ready App

> Premium Marriage Biodata Maker | 22 Templates | 9 Languages | Photo Upload | Save as PDF

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option A — Vercel Dashboard
1. Push to GitHub: `git init && git add . && git commit -m "Initial" && git push`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click **Deploy** — zero config needed ✅

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Environment Variables (None required!)
No environment variables needed — the app is fully client-side.

---

## 📁 Full Project Structure

```
easybiodatamaker/
├── public/
│   └── manifest.json           ← PWA manifest
├── src/
│   ├── app/                    ← Next.js 14 App Router pages
│   │   ├── page.tsx            ← Homepage (/)
│   │   ├── layout.tsx          ← Root layout + JSON-LD schemas
│   │   ├── globals.css         ← Tailwind + custom styles
│   │   ├── sitemap.ts          ← Dynamic sitemap.xml (from the page registry)
│   │   │
│   │   ├── create/             ← /create — 5-step builder
│   │   ├── templates/          ← /templates — template gallery
│   │   │
│   │   ├── ── SEO LANDING PAGES ──
│   │   ├── marriage-biodata-format/
│   │   ├── marriage-biodata-maker-online/
│   │   ├── marriage-biodata-format-word/
│   │   ├── marriage-biodata-format-pdf/
│   │   ├── hindu-marriage-biodata-format/
│   │   ├── muslim-marriage-biodata-format/
│   │   │
│   │   ├── ── LANGUAGE PAGES ──
│   │   ├── gujarati-marriage-biodata/    ← ગુજરાતી
│   │   ├── rajasthani-marriage-biodata/
│   │   ├── telugu-marriage-biodata/
│   │   ├── kannada-marriage-biodata/
│   │   ├── marathi-marriage-biodata/     ← मराठी
│   │   ├── hindi-marriage-biodata/       ← हिंदी
│   │   ├── punjabi-marriage-biodata/     ← ਪੰਜਾਬੀ
│   │   ├── tamil-marriage-biodata/       ← தமிழ்
│   │   ├── bengali-marriage-biodata/     ← বাংলা
│   │   │
│   │   ├── ── CONTENT PAGES ──
│   │   ├── blog/
│   │   ├── faq/
│   │   ├── about/
│   │   ├── contact/
│   │   │
│   │   └── ── LEGAL PAGES ──
│   │       ├── privacy-policy/
│   │       ├── disclaimer/
│   │       └── terms-of-service/
│   │
│   ├── components/
│   │   ├── ui/                  ← Accessible reusable UI primitives
│   │   ├── builder/             ← Five-step mobile-first builder
│   │   ├── photos/              ← Crop, compression and 3-photo flow
│   │   └── biodata/             ← 22 registered A4 templates + registry
│   ├── lib/
│   │   ├── biodata-schema.ts    ← Zod schema + age calculation
│   │   ├── pdf.ts               ← Browser print PDF + PNG/share helpers
│   │   └── pdf/page-breaks.ts   ← Multi-page layout planning
│   ├── store/
│   │   └── biodataStore.ts      ← Zustand + localStorage persistence
│   └── types/
│       └── biodata.ts

```

---

## 22 Premium A4 Templates

| Template | Style |
|---|---|
| Classic Ivory | Traditional |
| Rose Arch | Modern |
| Blue Ledger | Minimal |
| Garden Green | Regional / botanical |
| Modern Split | Modern |
| Gold Frame | Traditional |
| Minimal Grid | Minimal |
| Floral Border | Modern |
| Royal Maroon | Traditional |
| Contemporary Card | Modern |
| Midnight Gold | Traditional |
| Blush Rose Floral | Modern |
| Editorial Mono | Minimal |
| Rajwada Crimson | Traditional |
| Emerald Palace | Traditional |
| Royal Peacock | Modern |
| Haldi Marigold | Traditional |
| Pearl Lavender | Modern |
| Sandstone Rajasthan | Regional |
| Kanjivaram Temple | Regional |
| Noor Navy | Modern |
| Sapphire Silver | Minimal |

The gallery uses optimized WebP thumbnails and loads live template layouts in the quick-view dialog. Review [SEO_RANKING_GUIDE.md](./SEO_RANKING_GUIDE.md) for the search and post-launch checklist.

## 📸 Photo Upload Feature

Users can add up to 3 photos in the builder: 1 profile photo and up to 2 additional photos. Images are cropped/compressed client-side and persisted locally only.

---

## Template System

The template system contains 12 independent A4 layouts. Each template has three colorways, consumes the normalized biodata view model, and stays independent from browser storage. The current product does not include payment or account-gated features.

## 🔧 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | App Router, SSR, SEO |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4 | Styling |
| React Hook Form | 7.x | Form management |
| Zod | 3.x | Validation |
| html2canvas | 1.4 | PNG export only |
| Zustand | 5.x | Local draft persistence |
| react-easy-crop | 5.x | Portrait photo crop |
| Vitest | 2.x | Unit tests |
| Playwright | 1.x | Mobile/desktop e2e tests |
| Lucide React | 0.38 | Icons |

---

## 📝 Customization Guide

### Add a new template:
1. Create a pure template component in `TemplateRegistry.tsx`
2. Add its theme to `TEMPLATE_THEMES`
3. Register it in `TEMPLATES`
4. It automatically becomes available to the builder and template gallery

### Add a new language page:
1. Create `src/app/[language]-biodata-format/page.tsx`
2. Add it to `sitemap.ts`
3. Add link to `Footer.tsx` and homepage language section

### Change domain:
- Replace `easybiodatamaker.com` → `yourdomain.com` in:
  - `src/app/layout.tsx` (metadataBase)
  - `src/app/sitemap.ts` (baseUrl)
  - All page `alternates.canonical` fields

---

## 📞 Support

- Email: support@easybiodatamaker.com
- Website: https://easybiodatamaker.com


## Premium template collection update (October 2026)

The template gallery now registers 22 usable template designs. Ten additional layouts were added: Classic Ivory, Rose Arch, Blue Ledger, Garden Green, Modern Split, Gold Frame, Minimal Grid, Floral Border, Royal Maroon, and Contemporary Card. Each has three colorways, renders live biodata values, supports the existing language set, and is available in the builder template selector. The new gallery cards render the actual layout component so their preview matches the selected design. New visual directions are original interpretations of the supplied references, not copied competitor assets or text.

The crawler rules are generated by `src/app/robots.ts`; both `sitemap.xml` and `image-sitemap.xml` are declared there.
