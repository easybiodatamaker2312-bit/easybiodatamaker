# 🎊 EasyBiodataMaker.com — Complete Production-Ready App

> India's #1 Free Marriage Biodata Maker | 10 Templates | 6 Languages | Photo Upload | Instant PDF

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
│   │   ├── create/             ← /create — 4-step form
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
│   │   ├── ui/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx       ← All language + legal links
│   │   │   ├── StepProgress.tsx
│   │   │   └── FormField.tsx    ← Input, Select, Textarea
│   │   ├── form/
│   │   │   ├── MultiStepForm.tsx        ← Core form orchestrator
│   │   │   ├── PersonalDetailsStep.tsx  ← Step 1
│   │   │   ├── FamilyDetailsStep.tsx    ← Step 2
│   │   │   ├── EducationCareerStep.tsx  ← Step 3
│   │   │   └── ContactDetailsStep.tsx   ← Step 4
│   │   └── biodata/
│   │       ├── AllTemplates.tsx   ← All 10 template designs
│   │       └── PreviewClient.tsx  ← Template picker + photo upload
│   ├── lib/
│   │   ├── utils.ts    ← Helpers, sessionStorage functions
│   │   └── pdf.ts      ← html2canvas + jsPDF generation
│   └── types/
│       └── biodata.ts  ← Zod schemas + TypeScript types
```

---

## 🎨 10 Templates (All Free)

| # | Name | Language | Community |
|---|------|----------|-----------|
| 1 | 🕉️ Classic Indian | English | All Hindu |
| 2 | 👑 Royal Gold | English (dark) | All |
| 3 | 🌸 Rose Garden | English (pink) | All / Girls |
| 4 | ✦ Modern Minimal | English | Urban/NRI |
| 5 | 🪔 Gujarati Festive | ગુજ + EN | Gujarati |
| 6 | 🌼 Marathi Tradition | मराठी + EN | Marathi |
| 7 | 📜 Hindi/Devanagari | हिंदी + EN | Hindi belt |
| 8 | 🌺 South Indian | EN (Tamil/Telugu) | South India |
| 9 | ☪️ Islamic Nikah | Arabic + EN | Muslim |
| 10 | 🌾 Punjabi/Sikh | ਪੰਜਾਬੀ + EN | Sikh |

---

## 🔍 SEO Features

- **21-URL sitemap.xml** auto-generated at `/sitemap.xml`
- **robots.txt** with proper crawl rules
- **JSON-LD Schemas**: WebSite, SoftwareApplication, FAQPage, HowTo, Organization
- **Long-tail keywords** on every page (English + Hindi + Gujarati + Marathi)
- **Canonical URLs** on all pages
- **OpenGraph + Twitter Cards** on all pages
- **geo.region: IN** meta tag for India-specific ranking
- **en-IN locale** for Indian English ranking signals

### Top Targeted Keywords
```
biodata maker for marriage           (Primary)
free biodata maker online            (Primary)
gujarati lagna biodata               (Regional)
marathi vivah biodata                (Regional)
hindi shaadi biodata                 (Regional)
marriage biodata format India        (Informational)
how to make biodata for marriage     (Informational)
free biodata format download         (Transactional)
hindu marriage biodata format        (Community)
muslim nikah biodata                 (Community)
```

---

## 📸 Photo Upload Feature

Users can upload up to 3 photos on the preview page (`/preview`). Photos appear inline on the biodata template in an appropriate size/position. Processed client-side only — never uploaded to any server.

---

## 💰 Future Premium Features (Structure Ready)

```typescript
// In AllTemplates.tsx — templates are already marked:
// isPremium: false  → free
// isPremium: true   → locked (Coming Soon)

// Razorpay integration ready:
// 1. Add NEXT_PUBLIC_RAZORPAY_KEY to env
// 2. Create /api/create-order route
// 3. Unlock premium templates on payment verification
```

Premium templates planned:
- Watermark-free downloads
- Royal Heritage (ornate)
- Christian Marriage
- South Indian Extended (2-page)
- Custom color themes
- Photo collage layout

---

## 🔧 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | App Router, SSR, SEO |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4 | Styling |
| React Hook Form | 7.x | Form management |
| Zod | 3.x | Validation |
| html2canvas | 1.4 | DOM to canvas |
| jsPDF | 2.5 | Canvas to PDF |
| Lucide React | 0.38 | Icons |

---

## 📝 Customization Guide

### Add a new template:
1. Create a new component in `AllTemplates.tsx`
2. Add it to the `TEMPLATES` registry at the bottom
3. It auto-appears in the template picker on `/preview`

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
