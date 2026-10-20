import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorBox } from '@/components/seo/AuthorBox';
import { buildMetadata, buildArticleSchema, getSitePage } from '@/lib/seo';

const page = getSitePage('/blog/biodata-photo-tips');
export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: 'article' });
const articleSchema = buildArticleSchema({ title: page.title, description: page.description, path: page.path, datePublished: '2026-10-11', dateModified: '2026-10-11' });

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-stone-900">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: page.title }]} schemaPath="/blog/biodata-photo-tips" />
        <article className="mt-8 rounded-3xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">EasyBiodataMaker · Practical guide</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">{page.description}</p>
          <p className="mt-3 text-sm text-stone-500">Reviewed on 11 October 2026</p>
          <div className="mt-8"><p className="mt-4 text-base leading-8 text-stone-700">{"A profile photo is usually one of the first things a family notices in a marriage biodata. That does not mean the photo needs to look like a professional fashion shoot. For a matrimonial biodata, clarity, current appearance and natural presentation matter more than heavy editing. The image should also remain readable when the biodata is viewed on a phone or printed on A4 paper."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Choose a current, clear portrait"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Use a recent photograph that represents how you currently look. A clear head-and-shoulders or upper-body portrait is usually easier to place in a biodata than a distant full-group photograph. The face should be visible without excessive cropping."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Avoid using an old college photograph if your appearance has changed significantly. Also avoid screenshots from social media because compression can make the image soft when placed into a PDF or Word document."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Lighting matters more than expensive equipment"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Natural, even light usually works well. Stand facing a window or use a bright outdoor location without harsh direct sunlight. Strong backlighting can make the face dark, while a very bright overhead light can create deep shadows."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"The background does not need to be elaborate. A clean wall or uncluttered outdoor background is often better than a busy room. The goal is to keep attention on the person."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Keep editing realistic"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Basic brightness, crop and exposure adjustments are reasonable. Avoid filters that change skin tone, face shape or other identifying features. A matrimonial biodata should present a genuine current image rather than a heavily altered version."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"For example, a slightly dark photo can be corrected for brightness. A photo with a strong beauty filter that changes facial features should be replaced rather than “fixed.”"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Three useful photo examples"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 1 — professional and simple:"</strong>{" A recent portrait with neutral clothing, even lighting and a plain background."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 2 — traditional family profile:"</strong>{" A clean portrait in appropriate traditional or formal clothing, with enough space around the head for a balanced template crop."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 3 — modern profile:"</strong>{" A natural lifestyle portrait with a simple background, provided the face remains clearly visible and the image is not a group photo."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Common biodata photo mistakes"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"The most common problem is low resolution. A photograph that looks acceptable inside a phone gallery may become blurry after being enlarged on an A4 page. Another issue is extreme cropping. If the template expects a portrait frame, leave enough space around the face before uploading."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Group photographs are another common mistake. The reader should not have to guess which person is the candidate. Sunglasses, dramatic filters and heavily edited backgrounds can also reduce clarity."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Do not add contact numbers, social handles or identity documents to the photograph itself. Keep those details in the appropriate biodata sections if they are needed at all."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Photo and privacy"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Remember that a biodata may be forwarded beyond the original recipient. Use only the photograph you are comfortable sharing. Avoid images that reveal sensitive location information, vehicle registration numbers, workplace documents or other private details in the background."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"If a family is sharing a wider version of the biodata, consider whether the contact information should be reduced as well. Photo privacy and contact privacy should be treated together because both can travel with the same PDF or image."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"How the photo should fit the biodata"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Before final export, check the image at actual page size. The face should remain clear, the crop should not cut the top of the head or shoulders awkwardly, and the photo should not push important text off the page."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"A good "}<Link className="underline underline-offset-4" href="/biodata-maker-with-photo">biodata maker with photo</Link>{" can help you place the image inside a structured template. For a one-page layout, see "}<Link className="underline underline-offset-4" href="/single-page-marriage-biodata-format">single-page marriage biodata format</Link>{". If you want the broader process, use the "}<Link className="underline underline-offset-4" href="/marriage-biodata-guides">marriage biodata guides</Link>{"."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Final photo checklist"}</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-stone-700">
<li>{"Use a recent photograph."}</li>
<li>{"Keep the face clear and well lit."}</li>
<li>{"Avoid group photos."}</li>
<li>{"Avoid heavy filters and face-changing edits."}</li>
<li>{"Use sufficient resolution for A4 output."}</li>
<li>{"Check the crop on a phone before sharing."}</li>
<li>{"Review the background for private information."}</li>
<li>{"Make sure the photo represents how you currently look."}</li>
</ul>
<p className="mt-4 text-base leading-8 text-stone-700">{"The best marriage biodata photo is usually the simplest one: recent, clear, natural and easy to recognize. Good presentation helps, but accuracy and privacy should come first."}</p></div>
          <p className="mt-7 text-sm leading-7 text-stone-600">Related resource: <Link className="underline underline-offset-4" href="/biodata-maker-with-photo">biodata maker with photo</Link>, <Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage biodata guides</Link> and <Link className="underline underline-offset-4" href="/templates">biodata templates</Link>.</p>
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
