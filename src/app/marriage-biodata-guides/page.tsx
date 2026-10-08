import { buildMetadata, getSitePage } from '@/lib/seo';
import Link from 'next/link';
import { SEARCH_INTENT_PAGES } from '@/lib/seo/searchIntentPages';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const page = getSitePage('/marriage-biodata-guides');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });

const groups = [
  { title: 'Formats & templates', paths: ['/marriage-biodata-format','/marriage-biodata-format','/marriage-biodata-format','/marriage-biodata-format','/simple-marriage-biodata-format','/modern-marriage-biodata-format','/marriage-biodata-template-free-download','/traditional-marriage-biodata-template','/royal-wedding-biodata-format','/single-page-marriage-biodata-format'] },
  { title: 'Maker, PDF & Word', paths: ['/marriage-biodata-maker-online','/marriage-biodata-maker-online','/marriage-biodata-maker-online','/marriage-biodata-format-pdf','/marriage-biodata-format-pdf','/marriage-biodata-format-word'] },
  { title: 'Photos, phone & sharing', paths: ['/biodata-maker-with-photo','/biodata-maker-with-ganesh-photo','/biodata-maker-for-mobile','/biodata-maker-for-whatsapp'] },
  { title: 'Writing & profile content', paths: ['/about-myself-for-marriage-biodata','/partner-expectations-for-marriage-biodata','/family-details-in-marriage-biodata','/marriage-biodata-profile-summary-examples'] },
  { title: 'Community & life-stage formats', paths: ['/divorcee-marriage-biodata-format','/widow-widower-marriage-biodata','/late-marriage-biodata-format','/kundali-marriage-biodata-format','/maratha-biodata-format','/brahmin-biodata-format-for-marriage','/rajput-marriage-biodata-format','/anand-karaj-biodata-format','/islamic-biodata-for-marriage','/urdu-biodata-for-marriage','/bilingual-biodata-maker'] },
];

export default function MarriageBiodataGuidesPage() {
  const lookup = new Map(SEARCH_INTENT_PAGES.map((page) => [page.path, page]));
  const itemList = SEARCH_INTENT_PAGES.map((page, index) => ({ '@type': 'ListItem', position: index + 1, name: page.title, url: `https://easybiodatamaker.com${page.path}` }));
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Marriage Biodata Guides', url: 'https://easybiodatamaker.com/marriage-biodata-guides', mainEntity: { '@type': 'ItemList', itemListElement: itemList } }) }} />
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Marriage Biodata Guides' }]} />
        <header className="mt-8 max-w-4xl">
          <p className="eyebrow">Practical content hub</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Marriage Biodata Guides</h1>
          <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">Use these guides when you are deciding what to include, which format to choose, how to write personal sections, or how to export and share the finished profile. Each guide focuses on a different practical question instead of repeating the same template text.</p>
          <Link href="/create" className="mt-7 inline-flex btn-primary">Create a biodata</Link>
        </header>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <section key={group.title} className="card p-6 sm:p-7">
              <h2 className="font-display text-2xl font-semibold">{group.title}</h2>
              <div className="mt-5 grid gap-2">
                {group.paths.map((path) => {
                  const page = lookup.get(path);
                  if (!page) return null;
                  return <Link key={path} href={path} className="rounded-xl border border-stone-200 bg-white p-4 text-sm font-semibold hover:border-gold">{page.title}</Link>;
                })}
              </div>
            </section>
          ))}
        </section>

        <section className="mt-12 card p-7 sm:p-9">
          <h2 className="font-display text-2xl font-semibold">Use the guide, then build the real profile</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">The guides explain the decision behind a format; the builder lets you apply it. Start with predefined fields, remove what you do not need, reorder the information, add a custom field and preview the actual document before exporting.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/templates" className="btn-secondary">Browse templates</Link>
            <Link href="/create" className="btn-primary">Create your biodata</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
