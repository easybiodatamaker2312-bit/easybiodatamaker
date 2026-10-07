import Link from 'next/link';
import { AEOBlock } from '@/components/ui/AEOBlock';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export type NriPageConfig = {
  path: string;
  title: string;
  eyebrow: string;
  intro: string;
  countryLabel: string;
  countryBody: string;
  residencyBody: string;
  relocationBody: string;
  moneyBody: string;
  familyBody: string;
  checklist: string[];
  faqs: { question: string; answer: string }[];
};

export function NriLandingPage({ page }: { page: NriPageConfig }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://easybiodatamaker.com/' },
      { '@type': 'ListItem', position: 2, name: page.title, item: `https://easybiodatamaker.com${page.path}` },
    ],
  };

  return (
    <main lang="en" className="min-h-screen bg-[#FBF7F0] text-[var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'NRI marriage biodata' }, { label: page.title }]} />

        <header className="mt-10 max-w-4xl">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">{page.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/create?nri=1&template=emerald-palace" className="btn-primary">Create an NRI biodata</Link>
            <Link href="/blog/nri-marriage-biodata-guide" className="btn-secondary">Read the NRI guide</Link>
          </div>
        </header>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="card p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold">{page.countryLabel}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">{page.countryBody}</p>
          </article>
          <article className="card p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold">Visa, PR and citizenship</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">{page.residencyBody}</p>
          </article>
          <article className="card p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold">Relocation expectations</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">{page.relocationBody}</p>
          </article>
          <article className="card p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold">Income and work details</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">{page.moneyBody}</p>
          </article>
        </section>

        <section className="mt-14 card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">What to say about life abroad</h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">{page.familyBody}</p>
          <div className="mt-6 rounded-2xl bg-stone-50 p-5">
            <h3 className="font-semibold text-stone-900">NRI biodata checklist</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-stone-600 sm:grid-cols-2">
              {page.checklist.map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-[var(--ink)] p-7 text-white sm:p-9">
          <h2 className="font-display text-2xl font-semibold">Create a clear NRI biodata without overloading it</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">The builder keeps overseas fields optional. Add only the details that help a family understand where you live, your residency position and what you expect from a future move.</p>
          <Link href="/create?nri=1&template=emerald-palace" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900">Open the NRI builder</Link>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold">Related resources</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Link className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-semibold hover:border-stone-400" href="/marriage-biodata-format-word">Marriage biodata format in Word</Link>
            <Link className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-semibold hover:border-stone-400" href="/marriage-biodata-formats-by-community">Formats by community</Link>
            <Link className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-semibold hover:border-stone-400" href="/create?nri=1">Create an NRI biodata</Link>
          </div>
        </section>
      </div>
      <AEOBlock faqs={page.faqs} title="Frequently asked questions" ctaHref="/create?nri=1" ctaText="Create an NRI biodata" />
    </main>
  );
}
