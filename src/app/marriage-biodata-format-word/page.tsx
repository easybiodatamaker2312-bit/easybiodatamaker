import { buildMetadata, getSitePage } from '@/lib/seo';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const page = getSitePage('/marriage-biodata-format-word');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });

const faqs = [
  ['Can I edit the Word biodata after downloading it?', 'Yes. The download is a real .docx document, so its text can be edited in Microsoft Word and compatible editors.'],
  ['Is the Word file A4?', 'Yes. The export uses A4 page dimensions and practical margins for a marriage biodata.'],
  ['Will Indian-language text remain selectable?', 'Yes. The Word export keeps text as document text rather than converting the biodata into a screenshot. Indic fonts are specified according to the selected builder language.'],
  ['Do I need an account?', 'No. EasyBiodataMaker is designed for no-login creation and keeps the working biodata in the browser.'],
];

export default function WordFormatPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easybiodatamaker.com/' },
      { '@type': 'ListItem', position: 2, name: 'Marriage Biodata Format in Word', item: 'https://easybiodatamaker.com/marriage-biodata-format-word' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return <main className="min-h-screen bg-[#FBF7F0] text-[var(--ink)]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Marriage Biodata Format in Word' }]} />
      <header className="mt-10 max-w-3xl">
        <p className="eyebrow">Editable .docx format</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Marriage biodata format in Word</h1>
        <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">Create your biodata in the private browser builder, then download a real Word document when you need an editable copy. The export uses A4 page settings, selectable text, and language-aware font choices instead of turning the whole biodata into an image.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link href="/create" className="btn-primary">Create biodata & download Word</Link><Link href="/marriage-biodata-formats-by-community" className="btn-secondary">Browse community formats</Link></div>
      </header>

      <section className="mt-14 grid gap-5 sm:grid-cols-3">
        {[['Editable text', 'Names, family details, education and contact information remain selectable in the .docx file.'], ['A4 document', 'The Word export is prepared as an A4 document with sensible margins for printing or further editing.'], ['Indian languages', 'The exporter selects an Indic font family for the active builder language where applicable.']].map(([title, body]) => <article key={title} className="card p-5"><h2 className="font-display text-xl font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-stone-600">{body}</p></article>)}
      </section>

      <section className="mt-14 card p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">How to make a Word marriage biodata</h2>
        <ol className="mt-5 space-y-4 text-sm leading-7 text-stone-600"><li><strong className="text-stone-900">1. Enter your details.</strong> Add personal, family, education, career and contact information in the builder.</li><li><strong className="text-stone-900">2. Choose your layout.</strong> Pick a template and optional community or NRI field pack if those details are useful.</li><li><strong className="text-stone-900">3. Preview the biodata.</strong> Check names, dates, contact visibility, photos and optional fields before exporting.</li><li><strong className="text-stone-900">4. Download Word.</strong> Use the Download Word action to create the editable .docx file on your device.</li></ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold">Word versus PDF</h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white"><table className="w-full min-w-[560px] text-left text-sm"><thead className="border-b border-stone-200 bg-stone-50"><tr><th className="px-4 py-3">Need</th><th className="px-4 py-3">Word</th><th className="px-4 py-3">Save as PDF</th></tr></thead><tbody><tr className="border-b border-stone-100"><td className="px-4 py-3 font-semibold">Further editing</td><td className="px-4 py-3">Best for editable text</td><td className="px-4 py-3">Better for a fixed shareable copy</td></tr><tr><td className="px-4 py-3 font-semibold">Text selection</td><td className="px-4 py-3">Native document text</td><td className="px-4 py-3">Browser print output remains text-based</td></tr></tbody></table></div>
      </section>

      <section className="mt-14"><h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2><div className="mt-5 space-y-3">{faqs.map(([q,a]) => <details key={q} className="rounded-2xl border border-stone-200 bg-white p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-sm leading-6 text-stone-600">{a}</p></details>)}</div></section>
      <div className="mt-14 rounded-2xl bg-[var(--ink)] p-6 text-white sm:p-8"><h2 className="font-display text-2xl font-semibold">Ready to make an editable biodata?</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-stone-300">Start without creating an account. Your working biodata stays in the browser unless you choose to export or share it.</p><Link href="/create" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900">Open the biodata maker</Link></div>
    </div>
  </main>;
}
