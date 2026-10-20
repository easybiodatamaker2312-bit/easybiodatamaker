import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorBox } from '@/components/seo/AuthorBox';
import { buildMetadata, buildArticleSchema, getSitePage } from '@/lib/seo';

const page = getSitePage('/blog/shaadi-ka-biodata-kaise-banaye');
export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: 'article' });
const articleSchema = buildArticleSchema({ title: page.title, description: page.description, path: page.path, datePublished: '2026-10-11', dateModified: '2026-10-11' });

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-stone-900">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: page.title }]} schemaPath="/blog/shaadi-ka-biodata-kaise-banaye" />
        <article className="mt-8 rounded-3xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">EasyBiodataMaker · Practical guide</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">{page.description}</p>
          <p className="mt-3 text-sm text-stone-500">Reviewed on 11 October 2026</p>
          <div className="mt-8"><p className="mt-4 text-base leading-8 text-stone-700">{"Shaadi ka biodata banana difficult nahi hai. A good marriage biodata basically ek clear introduction hota hai jisme person ki important information, family background, education, career, personality aur marriage expectations readable format mein hoti hain. Sabse important rule hai: har available field bharna zaroori nahi hai. Jo information useful aur verified hai wahi include karein."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Step 1: Basic personal details se start karein"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Sabse pehle full name, date of birth ya age, height, current city aur profile photo jaise details rakhein. Agar family traditional matching information use karti hai, to rashi, nakshatra, gotra ya Manglik status ko optional section mein add kiya ja sakta hai."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Name aur dates ko final export se pehle dobara check karein. Old biodata se copy karte waqt spelling mistakes common hoti hain. Current city ko native place se clearly separate karein, especially agar person job ya education ke liye doosre city mein rehta hai."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Step 2: Education aur career ko easy-to-scan banayein"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Education section mein highest qualification, field and institution ka short format use karein. Career mein occupation, designation aur work city enough ho sakte hain. Private employer ki confidential information ya financial documents share karne ki zarurat nahi hai."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Example:"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Education:"</strong>{" B.Tech, Computer Science — ABC University "}<strong>"Occupation:"</strong>{" Software Engineer — Ahmedabad"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Agar candidate self-employed hai, to business category ko plain language mein explain karein. “Businessman” se zyada useful “Family textile business, Ahmedabad” jaisa factual description ho sakta hai, provided it is accurate and comfortable to share."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Step 3: Family details ko short rakhein"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Parents, siblings, family background aur native place ko concise format mein likhein. Family ki social status ya wealth ke exaggerated claims avoid karein. Biodata ka purpose comparison sheet banana nahi hai; reader ko family context samajhna hai."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Example:"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Father:"</strong>{" Business "}<strong>"Mother:"</strong>{" Homemaker "}<strong>"Sibling:"</strong>{" Younger sister, working in Pune "}<strong>"Native place:"</strong>{" Mehsana, Gujarat"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Agar family gotra, community ya other traditional fields use karti hai, to unhe optional section mein add karein."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Step 4: About Me ko natural banayein"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"“Simple, cultured, caring” jaise generic words har biodata mein mil sakte hain. Better hai ki About Me mein actual lifestyle details likhein. Example: “I enjoy weekend travel, reading business news and spending time with family.” Isse profile zyada human lagti hai aur conversation ke topics milte hain."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Step 5: Partner expectations ko respectful rakhein"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Expectations ko demands list ki tarah na likhein. Location, career, family involvement, lifestyle aur values ke broad preferences explain karein. Example: “Looking for someone who values family, communication and mutual career support.”"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Step 6: Photo aur privacy check karein"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Ek clear current portrait generally enough hota hai. Blurry screenshots, group photos aur heavily edited images avoid karein. Biodata WhatsApp par forward ho sakta hai, isliye government IDs, passport/visa numbers, exact home address aur financial documents include na karein."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Agar privacy important hai, shareable version mein family contact number ya city rakhna better ho sakta hai. Final PDF ko mobile par open karke check karein."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Common mistakes"}</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-stone-700">
<li>{"Old job title ya city use karna."}</li>
<li>{"Name ki spelling verify na karna."}</li>
<li>{"Family section ko unnecessary long banana."}</li>
<li>{"Horoscope details guess karna."}</li>
<li>{"Photo ko too small rakhna."}</li>
<li>{"Exact address aur identity documents add karna."}</li>
<li>{"Expectations ko rigid demand list banana."}</li>
<li>{"One-page fit karne ke liye font ko unreadably small kar dena."}</li>
</ul>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Teen quick biodata approaches"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Simple:"</strong>{" Basic details + family + education/career + expectations. Best for a short first introduction."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Modern:"</strong>{" Strong photo hierarchy + concise profile summary + career/location + lifestyle. Useful when education and career are important."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Traditional:"</strong>{" Personal details + family + community/traditional fields + horoscope context + expectations. Useful when the family actually uses these fields."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"You can start with the "}<Link className="underline underline-offset-4" href="/marriage-biodata-format">Marriage Biodata Format</Link>{", compare "}<Link className="underline underline-offset-4" href="/simple-marriage-biodata-format">Simple Marriage Biodata Format</Link>{", or create the actual document using the "}<Link className="underline underline-offset-4" href="/marriage-biodata-maker-online">online marriage biodata maker</Link>{". More practical resources are collected in the "}<Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage Biodata Guides</Link>{"."}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Final checklist before sending"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Read the profile once as if you are receiving it on WhatsApp. Can you understand who the person is, where they live, what they do, their family context and what they are looking for within a minute? If yes, the structure is probably working. Then check names, dates, photo crop, phone number and privacy before sharing."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"A good shaadi biodata does not need to be long or flashy. It needs to be accurate, respectful, readable and appropriate for the amount of information the family wants to share."}</p></div>
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
