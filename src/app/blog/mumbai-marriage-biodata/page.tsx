import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorBox } from '@/components/seo/AuthorBox';
import { buildMetadata, buildArticleSchema, getSitePage } from '@/lib/seo';

const page = getSitePage('/blog/mumbai-marriage-biodata');
export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: 'article' });
const articleSchema = buildArticleSchema({ title: page.title, description: page.description, path: page.path, datePublished: '2026-10-11', dateModified: '2026-10-11' });

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-stone-900">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: page.title }]} />
        <article className="mt-8 rounded-3xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">EasyBiodataMaker · Practical guide</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">{page.description}</p>
          <p className="mt-3 text-sm text-stone-500">Reviewed on 11 October 2026</p>
          <div className="mt-8"><p className="mt-4 text-base leading-8 text-stone-700">{"Mumbai families may need a marriage biodata that explains both the candidate and the practical realities of city life. A person may work in Mumbai, live in a nearby suburb, have family roots in another district, or be considering relocation after marriage. A useful biodata should make these details clear without turning the profile into a property or salary document."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Start with current location, not assumptions"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Write the candidate’s actual current city and, when useful, the broad area or suburb. “Mumbai, Maharashtra” is often enough for a first introduction. If the family wants more detail, a suburb can be added. Avoid publishing an exact residential address in a biodata that may be widely forwarded."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Also distinguish current residence from native place. For example, a candidate can currently live in Mumbai while the family’s native place is Nashik, Ratnagiri or another town. Keeping these fields separate prevents confusion when relatives review the profile."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Career information for Mumbai professionals"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Mumbai has candidates working across finance, technology, media, healthcare, consulting, business and many other sectors. The useful biodata detail is usually the occupation, designation and broad work location. Confidential employer information is unnecessary."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"For example:"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Occupation:"</strong>{" Chartered Accountant "}<strong>"Work location:"</strong>{" Mumbai "}<strong>"Industry:"</strong>{" Financial services"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Or:"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Occupation:"</strong>{" Product Manager "}<strong>"Work location:"</strong>{" Mumbai "}<strong>"Work mode:"</strong>{" Hybrid"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"These details explain the person’s professional context without creating a detailed financial profile."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Three Mumbai-focused examples"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 1 — local professional:"</strong>{" “Currently based in Mumbai and working in financial services. Open to continuing a professional career after marriage.”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 2 — Mumbai with family roots elsewhere:"</strong>{" “Working in Mumbai; family roots in Vadodara. Comfortable discussing relocation depending on mutual plans.”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 3 — NRI or returning professional:"</strong>{" “Currently working overseas with family based in Mumbai. Future relocation preferences can be discussed with both families.”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"These are example structures, not claims about real people."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Expectations and relocation"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Location can be an important marriage discussion in a large city. Instead of writing a rigid demand, explain the broad preference. “Open to Mumbai or nearby locations” is more useful than a long list of neighbourhoods. If the candidate wants to continue working, say so clearly and respectfully."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"For someone whose family lives in Mumbai but who works in another city, write the current work location separately. If the person is open to relocation, that can be a single sentence in the expectations section."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Family details without unnecessary status claims"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"A Mumbai biodata does not need to prove family wealth, property ownership or social standing. Parents’ occupations, siblings, family city and native place provide enough context for most first introductions. If the family business is relevant, describe its sector factually."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Avoid phrases such as “well-established family” unless the phrase has a clear meaning. A reader gets more useful information from “family runs a textile business in Mumbai” when that statement is accurate."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Common mistakes in Mumbai biodata"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"One common mistake is writing Mumbai as both current city and native place without explaining the difference. Another is listing a full home address. A third is turning the career section into a salary or property disclosure. A fourth is failing to mention relocation expectations when city-based work is important."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Also check the final PDF on a phone. Mumbai profiles are often shared through family WhatsApp groups, so a layout that only works on a desktop is not practical."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Build a Mumbai-ready biodata"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"For a general structure, use "}<Link className="underline underline-offset-4" href="/marriage-biodata-format">Marriage Biodata Format</Link>{". If you want a concise layout, see "}<Link className="underline underline-offset-4" href="/single-page-marriage-biodata-format">Single Page Marriage Biodata Format</Link>{". Candidates who need a modern presentation can compare the "}<Link className="underline underline-offset-4" href="/modern-marriage-biodata-format">Modern Marriage Biodata Format</Link>{". To create the actual profile, use the "}<Link className="underline underline-offset-4" href="/marriage-biodata-maker-online">online marriage biodata maker</Link>{". Additional writing and format resources are collected in the "}<Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage Biodata Guides</Link>{"."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Final Mumbai checklist"}</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-stone-700">
<li>{"Current city is clearly stated."}</li>
<li>{"Native place is separate when relevant."}</li>
<li>{"Occupation and designation are accurate."}</li>
<li>{"Work location is clear."}</li>
<li>{"Relocation expectations are stated simply."}</li>
<li>{"Family information is factual rather than status-focused."}</li>
<li>{"Exact home address and sensitive identifiers are omitted."}</li>
<li>{"Photo and text remain readable on a phone."}</li>
</ul>
<p className="mt-4 text-base leading-8 text-stone-700">{"A Mumbai marriage biodata does not need a special stereotype or a completely separate format. It needs accurate location, career and family context, plus enough flexibility to explain how the candidate sees work and relocation after marriage. Keep the document practical and let the actual person—not the city—define the profile."}</p></div>
          <p className="mt-7 text-sm leading-7 text-stone-600">Related resource: <Link className="underline underline-offset-4" href="/marriage-biodata-format">marriage biodata format</Link>, <Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage biodata guides</Link> and <Link className="underline underline-offset-4" href="/templates">biodata templates</Link>.</p>
          <div className="mt-10 rounded-2xl bg-[#F8F0E2] p-5">
            <h2 className="font-display text-xl font-semibold">Continue with a practical guide</h2>
            <p className="mt-2 text-sm leading-7 text-stone-700">Use these explanations as a starting point, then include only accurate details you are comfortable sharing.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/create" className="btn-primary">Create your biodata</Link>
              <Link href="/marriage-biodata-guides" className="btn-secondary">Browse all guides</Link>
            </div>
          </div>
        </article>
        <AuthorBox reviewedOn="11 October 2026" />
      </div>
      <Footer />
    </main>
  );
}
