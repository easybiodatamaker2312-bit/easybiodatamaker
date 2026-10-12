import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorBox } from '@/components/seo/AuthorBox';
import { buildMetadata, buildArticleSchema, getSitePage } from '@/lib/seo';

const page = getSitePage('/blog/marriage-biodata-sample-girl-boy');
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
          <div className="mt-8"><p className="mt-4 text-base leading-8 text-stone-700">{"A marriage biodata sample is useful when you know the information you want to share but are unsure about order and wording. A good sample should show structure rather than pretend that one format is correct for every family. The same core sections can work for a bride or groom, while education, career, lifestyle and expectations are filled with the actual person’s information."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Sample for a girl"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Name:"</strong>{" Aditi Shah "}<strong>"Age:"</strong>{" 28 "}<strong>"Height:"</strong>{" 5'4\" (163 cm) "}<strong>"Current city:"</strong>{" Ahmedabad, Gujarat "}<strong>"Education:"</strong>{" MBA, Finance "}<strong>"Occupation:"</strong>{" Finance Manager "}<strong>"About:"</strong>{" Aditi enjoys reading, weekend travel and spending time with family. She values clear communication and a balanced professional and personal life. "}<strong>"Family:"</strong>{" Father — business; Mother — homemaker; Brother — software professional in Bengaluru "}<strong>"Expectations:"</strong>{" Looking for a kind, communicative partner who respects family relationships and supports each other’s career goals."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"This is fictional sample data. A real biodata should use verified information and only include fields the candidate is comfortable sharing."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Sample for a boy"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Name:"</strong>{" Rohan Mehta "}<strong>"Age:"</strong>{" 30 "}<strong>"Height:"</strong>{" 5'10\" (178 cm) "}<strong>"Current city:"</strong>{" Mumbai, Maharashtra "}<strong>"Education:"</strong>{" B.E., Information Technology "}<strong>"Occupation:"</strong>{" Product Manager "}<strong>"About:"</strong>{" Rohan likes cycling, technology, cooking on weekends and short trips. He prefers a practical lifestyle and enjoys staying connected with family. "}<strong>"Family:"</strong>{" Father — retired professional; Mother — teacher; Sister — working in Pune "}<strong>"Expectations:"</strong>{" Looking for a thoughtful partner who values communication, family time and mutual support for professional goals."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Again, the example is fictional and demonstrates structure only."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"What should be different between a girl and boy biodata?"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"There does not need to be a completely different information architecture. Both profiles can contain personal details, education, career, family, About Me, expectations, photo and contact information. The actual content should reflect the person rather than forcing gender-specific stereotypes."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"For example, income should not automatically be displayed because a profile is for a man, nor should hobbies or career ambitions be minimized because a profile is for a woman. If a family expects a particular field, it can be added as an optional field."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Three sample styles"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Simple one-page sample:"</strong>{" personal details, photo, education, career, family and expectations. This is useful for WhatsApp forwarding and first introductions."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Modern sample:"</strong>{" prominent photo, short profile summary, career/location, lifestyle interests and a compact family section. This can work well when the candidate wants a contemporary presentation."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Traditional sample:"</strong>{" personal details, family, community or horoscope fields, education/career and expectations. Use this only when those traditional fields are genuinely relevant to the family."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Common mistakes when copying samples"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Do not copy another person's salary, job title, family description or horoscope details just because they appear in a sample. Sample text should demonstrate structure, not become factual content for the new profile."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Another mistake is writing an excessively long About Me. Three or four specific sentences are often more useful than a page of adjectives. Expectations should also be realistic and respectful. Avoid turning them into an exclusion list."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Privacy is equally important. A sample should never encourage publishing Aadhaar numbers, passport numbers, exact home addresses, bank information or confidential employment details. A matrimonial biodata is often forwarded, so the first version should contain only information needed for a meaningful introduction."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Create your own sample from the structure"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Start with "}<Link className="underline underline-offset-4" href="/marriage-biodata-format">Marriage Biodata Format</Link>{" if you want a general structure. For gender-specific examples, the existing "}<Link className="underline underline-offset-4" href="/biodata-for-marriage-boy">biodata format for boy</Link>{" and "}<Link className="underline underline-offset-4" href="/biodata-for-marriage-girl">biodata format for girl</Link>{" pages can be used as references. You can then create the actual document in the "}<Link className="underline underline-offset-4" href="/marriage-biodata-maker-online">online marriage biodata maker</Link>{". More examples and practical resources are available in the "}<Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage Biodata Guides</Link>{"."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Final review checklist"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Before sharing, verify name, age/date of birth, height, education, occupation, city, family names and contact information. Confirm that the photo is current. Remove sensitive information that does not belong in the first introduction. Finally, read the document on a phone to make sure the important facts can be found quickly."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"A useful girl or boy marriage biodata sample should make the next conversation easier. It should not try to make a person sound perfect. Accurate details, a natural introduction and clear expectations are more valuable than decorative claims."}</p></div>
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
