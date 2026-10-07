# 🎊 EasyBiodataMaker.com — Complete Production-Ready App

> Premium Marriage Biodata Maker | 12 Templates | 9 Languages | Photo Upload | Save as PDF

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
│   ├── robots.txt              ← SEO crawler rules
│   └── manifest.json           ← PWA manifest
├── src/
│   ├── app/                    ← Next.js 14 App Router pages
│   │   ├── page.tsx            ← Homepage (/)
│   │   ├── layout.tsx          ← Root layout + JSON-LD schemas
│   │   ├── globals.css         ← Tailwind + custom styles
│   │   ├── sitemap.ts          ← Dynamic sitemap.xml (21 URLs)
│   │   │
│   │   ├── create/             ← /create — 5-step builder
│   │   ├── preview/            ← /preview — template picker + PDF
│   │   ├── templates/          ← /templates — template gallery
│   │   │
│   │   ├── ── SEO LANDING PAGES ──
│   │   ├── how-to-make-biodata-for-marriage/
│   │   ├── free-biodata-format-download/
│   │   ├── hindu-marriage-biodata-format/
│   │   ├── muslim-marriage-biodata-format/
│   │   │
│   │   ├── ── LANGUAGE PAGES ──
│   │   ├── gujarati-biodata-format/    ← ગુજરાતી
│   │   ├── marathi-biodata-format/     ← मराठी
│   │   ├── hindi-biodata-format/       ← हिंदी
│   │   ├── punjabi-biodata-format/     ← ਪੰਜਾਬੀ
│   │   ├── tamil-biodata-format/       ← தமிழ்
│   │   ├── bengali-biodata-format/     ← বাংলা
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
│   │   └── biodata/             ← Eight pure A4 templates + registry
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

## Eight Premium A4 Templates

| Template | Style |
|---|---|
| Royal Gold | Traditional |
| Ivory Minimal | Minimal |
| Emerald Modern | Modern |
| Traditional Mandala | Traditional |
| Contemporary Two-Column | Modern |
| Gujarati | Regional |
| Marathi | Regional |
| South Indian | Regional |

Templates are pure components driven by shared theme objects. They do not read browser storage.

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
