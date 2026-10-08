import Link from 'next/link';
import { AEOBlock } from '@/components/ui/AEOBlock';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { SEARCH_INTENT_ENHANCEMENTS } from '@/lib/seo/searchIntentEnhancements';
import { EditorialByline } from '@/components/seo/EditorialByline';

export type SearchIntentPageConfig = {
  path: string;
  updatedAt: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  quickAnswer: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  checklist: string[];
  related: Array<{ href: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const templatePreviewByPath: Record<string, { id: string; alt: string }> = {
  '/simple-marriage-biodata-format': { id: 'editorial-mono', alt: 'Editorial Mono simple marriage biodata template preview' },
  '/modern-marriage-biodata-format': { id: 'blush-rose-floral', alt: 'Blush Rose Floral modern marriage biodata template preview' },
  '/traditional-marriage-biodata-template': { id: 'midnight-gold', alt: 'Midnight Gold traditional marriage biodata template preview' },
  '/royal-wedding-biodata-format': { id: 'royal-peacock', alt: 'Royal Peacock royal wedding biodata template preview' },
  '/marriage-biodata-template-free-download': { id: 'sandstone-rajasthan', alt: 'Sandstone Rajasthan marriage biodata template preview' },
};

export type SearchIntentEnhancement = {
  sampleImage: string;
  sampleAlt: string;
  examples: string[];
  mistakes: string[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export function SearchIntentLandingPage({ page, includeSoftwareSchema = false }: { page: SearchIntentPageConfig; includeSoftwareSchema?: boolean }) {
  const enhancement = SEARCH_INTENT_ENHANCEMENTS[page.path];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easybiodatamaker.com/' },
      { '@type': 'ListItem', position: 2, name: page.title, item: `https://easybiodatamaker.com${page.path}` },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main lang="en" className="min-h-screen bg-[#FBF7F0] text-[var(--ink)]">
      {includeSoftwareSchema ? <SoftwareApplicationSchema /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: page.title }]} />
        <EditorialByline lastUpdated={page.updatedAt} />
        <p className="mt-4 text-xs font-medium uppercase tracking-[.14em] text-stone-500">Last updated: {page.updatedAt}</p>

        <header className="mt-8 max-w-4xl">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">{page.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/create" className="btn-primary">Create your biodata</Link>
            <Link href="/templates" className="btn-secondary">Explore templates</Link>
          </div>
        </header>

        <section className="mt-10 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Quick answer</p>
          <p className="mt-3 text-base leading-8 text-stone-700">{page.quickAnswer}</p>
        </section>

        {templatePreviewByPath[page.path] ? (
          <section className="mt-10 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
            <img src={`/templates/${templatePreviewByPath[page.path].id}.webp`} alt={templatePreviewByPath[page.path].alt} width={910} height={1287} loading="lazy" decoding="async" className="mx-auto h-auto max-h-[760px] w-full object-contain" />
          </section>
        ) : null}

        {enhancement ? (
          <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <img src={enhancement.sampleImage} alt={enhancement.sampleAlt} width={1200} height={900} loading="lazy" decoding="async" className="h-auto w-full" />
              <figcaption className="px-5 py-4 text-xs leading-5 text-stone-500">Fictional sample for layout guidance. Replace every value with your own verified information.</figcaption>
            </figure>
            <div className="card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Filled sample</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">What this example demonstrates</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                {enhancement.examples.map((example) => <li key={example}>✓ {example}</li>)}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="mt-12 space-y-7">
          {page.sections.map((section) => (
            <article key={section.heading} className="card p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-7 text-stone-600">{paragraph}</p>)}
            </article>
          ))}
        </section>

        {enhancement ? (
          <>
            <section className="mt-12 grid gap-7 lg:grid-cols-2">
              <article className="card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold">Common mistakes for this intent</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                  {enhancement.mistakes.map((mistake) => <li key={mistake}>• {mistake}</li>)}
                </ul>
              </article>
              <article className="card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold">Practical examples to compare</h2>
                <ol className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                  {enhancement.examples.map((example, index) => <li key={example}><span className="font-semibold text-stone-900">{index + 1}.</span> {example}</li>)}
                </ol>
              </article>
            </section>

            <section className="mt-12 space-y-7">
              {enhancement.sections.map((section) => (
                <article key={section.heading} className="card p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-7 text-stone-600">{paragraph}</p>)}
                </article>
              ))}
            </section>
          </>
        ) : null}

        <section className="mt-12 rounded-3xl bg-[var(--ink)] p-7 text-white sm:p-9">
          <h2 className="font-display text-2xl font-semibold">A practical checklist</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-stone-200 sm:grid-cols-2">
            {page.checklist.map((item) => <li key={item}>✓ {item}</li>)}
          </ul>
          <Link href="/create" className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900">Start a free biodata</Link>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Related biodata resources</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {page.related.map((link) => <Link key={link.href} href={link.href} className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-semibold hover:border-stone-400">{link.label}</Link>)}
          </div>
        </section>
      </div>
      <AEOBlock faqs={page.faqs} title="Frequently asked questions" ctaHref="/create" ctaText="Create a free biodata" />
    </main>
  );
}
