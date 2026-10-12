import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorBox } from '@/components/seo/AuthorBox';
import { buildMetadata, buildArticleSchema, getSitePage } from '@/lib/seo';

// TODO: needs native-speaker review before publish
const page = getSitePage('/blog/manglik-kya-hota-hai');
export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: 'article' });
const articleSchema = buildArticleSchema({ title: page.title, description: page.description, path: page.path, datePublished: '2026-10-11', dateModified: '2026-10-11' });

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-stone-900">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: page.title }]} />
        <article lang="hi" className="mt-8 rounded-3xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">EasyBiodataMaker · Practical guide</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">{page.description}</p>
          <p className="mt-3 text-sm text-stone-500">Reviewed on 11 October 2026</p>
          <div className="mt-8"><h2 className="mt-9 font-display text-2xl font-semibold">{"Manglik ka simple meaning"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"“मंगलिक” शब्द आम तौर पर विवाह के पारंपरिक ज्योतिषीय संदर्भ में इस्तेमाल होता है। कुछ families जन्म कुंडली में Mars (Mangal) की स्थिति को देखकर Manglik status पर चर्चा करती हैं। अलग-अलग ज्योतिषीय परंपराओं में इसकी गणना और interpretation अलग हो सकती है। इसलिए किसी online checklist या generic sentence को final fact मानने के बजाय परिवार जिस horoscope source या astrologer पर भरोसा करता है, उसी से जानकारी verify करना बेहतर है।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"Marriage biodata में इसका मुख्य काम candidate की traditional matching information को concise तरीके से बताना है। Biodata को astrology report में बदलने की जरूरत नहीं होती। अगर family Manglik status share करती है, तो एक simple field पर्याप्त हो सकती है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Biodata mein Manglik status kaise likhen?"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Traditional biodata में “Manglik: Yes/No” जैसा field मिल सकता है। लेकिन अगर family अधिक context चाहती है, तो “Manglik status: As per family horoscope” जैसा neutral wording इस्तेमाल किया जा सकता है। इससे document किसी specific astrological conclusion को बिना source के present नहीं करता।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर कुंडली अलग से भेजी जाती है, तो biodata में केवल यह लिखना पर्याप्त हो सकता है कि “Horoscope available separately.” इससे first-introduction document साफ रहता है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"तीन practical examples"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 1 — compact:"</strong>{" “Manglik: As per family horoscope”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 2 — traditional:"</strong>{" “Manglik Status: Family-verified horoscope detail”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"Example 3 — separate horoscope:"</strong>{" “Horoscope: Available separately; Manglik details discussed with family.”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"इन examples में कोई fabricated astrological result नहीं है। Actual status वही होना चाहिए जो family के verified horoscope information से आता है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Common mistakes"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"पहली गलती किसी website के calculator से result लेकर उसे final matrimonial fact की तरह biodata में लिखना है। अलग traditions में interpretation अलग हो सकती है। दूसरी गलती “Manglik” को candidate की personality या compatibility का automatic measure बना देना है। Biodata को factual profile रखना बेहतर है। तीसरी गलती पूरे horoscope की details first page पर डाल देना है, जिससे education, career और family information दब जाती है।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"एक और practical issue privacy है। Birth date, birth time और birthplace कभी-कभी traditional matching के लिए उपयोगी होते हैं, लेकिन इन्हें उतना ही share करें जितना family comfortable हो। Government IDs, exact address और unrelated documents कभी horoscope section की जरूरत की वजह से जोड़ने की जरूरत नहीं है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Manglik information aur kundali section"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर आपके परिवार में horoscope matching महत्वपूर्ण है, तो biodata में एक “Traditional Details” section बनाया जा सकता है। इसमें gotra, rashi, nakshatra और Manglik status जैसे optional fields हो सकते हैं। हर field भरना आवश्यक नहीं है। Candidate की education, occupation, current city और expectations को prominent रखना practical रहता है।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"एक useful approach यह है कि biodata first introduction के लिए हो और detailed horoscope separate document में रहे। इससे biodata छोटा, readable और easier to forward रहता है। अगर कोई field family-specific है, तो उसे family से confirm करके ही publish करें।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"किस तरह का biodata format चुनें?"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर आप horoscope-related details रखना चाहते हैं, तो "}<Link className="underline underline-offset-4" href="/kundali-marriage-biodata-format">Kundali marriage biodata format</Link>{" देख सकते हैं। अगर आपको सामान्य profile बनानी है, तो "}<Link className="underline underline-offset-4" href="/marriage-biodata-format">Marriage Biodata Format</Link>{" बेहतर starting point है। Actual profile बनाने के लिए "}<Link className="underline underline-offset-4" href="/marriage-biodata-maker-online">online marriage biodata maker</Link>{" इस्तेमाल किया जा सकता है। Related practical articles और templates के लिए "}<Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage Biodata Guides</Link>{" देखें।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Final checklist"}</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-stone-700">
<li>{"Manglik status family के verified source से लें।"}</li>
<li>{"Online result को बिना verification final fact न मानें।"}</li>
<li>{"Horoscope details को optional रखें।"}</li>
<li>{"जरूरत हो तो detailed kundali अलग share करें।"}</li>
<li>{"Personal identity documents biodata में न जोड़ें।"}</li>
<li>{"PDF को phone पर पढ़कर finalise करें।"}</li>
</ul>
<p className="mt-4 text-base leading-8 text-stone-700">{"Manglik status biodata में एक traditional field हो सकता है, लेकिन यह profile का पूरा आधार नहीं है। A useful marriage biodata should first help a family understand the person, family context, education, work, lifestyle and expectations. Traditional matching information को उसी structure में रखें जो आपके परिवार के लिए वास्तव में उपयोगी है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Family discussion ke liye practical approach"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर Manglik status को लेकर परिवारों में अलग जानकारी है, तो biodata को लेकर जल्दी निष्कर्ष निकालने की जरूरत नहीं है। पहले birth details और family horoscope source verify करें। फिर जिस terminology को आपका परिवार इस्तेमाल करता है, उसी को concise field में लिखें। इससे biodata किसी technical astrology report का substitute नहीं बनता।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"यह भी useful है कि profile में person की बाकी जानकारी balanced रहे। Education, career, hobbies, family background और expectations को केवल इसलिए छोटा न करें कि traditional matching fields के लिए जगह चाहिए। A marriage biodata should help families understand the person as a whole, while optional horoscope information can support the conversation where the family actually uses it."}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर किसी family को detailed compatibility analysis चाहिए, तो वह अलग horoscope discussion में किया जा सकता है। Biodata में केवल relevant summary रखने से document readable और easier to update रहता है।"}</p></div>
          <p className="mt-7 text-sm leading-7 text-stone-600">Related resource: <Link className="underline underline-offset-4" href="/kundali-marriage-biodata-format">kundali and traditional details</Link>, <Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage biodata guides</Link> and <Link className="underline underline-offset-4" href="/templates">biodata templates</Link>.</p>
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
