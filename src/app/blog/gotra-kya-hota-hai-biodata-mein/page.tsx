import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorBox } from '@/components/seo/AuthorBox';
import { buildMetadata, buildArticleSchema, getSitePage } from '@/lib/seo';

// TODO: needs native-speaker review before publish
const page = getSitePage('/blog/gotra-kya-hota-hai-biodata-mein');
export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: 'article' });
const articleSchema = buildArticleSchema({ title: page.title, description: page.description, path: page.path, datePublished: '2026-10-11', dateModified: '2026-10-11' });

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-stone-900">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: page.title }]} schemaPath="/blog/gotra-kya-hota-hai-biodata-mein" />
        <article lang="hi" className="mt-8 rounded-3xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">EasyBiodataMaker · Practical guide</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">{page.description}</p>
          <p className="mt-3 text-sm text-stone-500">Reviewed on 11 October 2026</p>
          <div className="mt-8"><h2 className="mt-9 font-display text-2xl font-semibold">{"Biodata mein gotra ka matlab kya hai?"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"शादी के biodata में "}<strong>"gotra"</strong>{" एक पारंपरिक family-lineage detail हो सकती है। कई Hindu families में gotra का उपयोग परिवार की वंश परंपरा को बताने और विवाह के पारंपरिक मिलान में संदर्भ के रूप में किया जाता है। लेकिन हर परिवार gotra को एक ही तरह से नहीं देखता। इसलिए biodata बनाते समय सबसे अच्छा तरीका यह है कि वही जानकारी लिखें जिसे आपका परिवार सही और उपयोगी मानता है।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर किसी परिवार में gotra महत्वपूर्ण है, तो इसे personal details के साथ ठूंसने के बजाय एक साफ optional field में रखा जा सकता है। उदाहरण के लिए: “Gotra: Kashyap” या परिवार द्वारा पुष्टि किया गया कोई अन्य gotra। अनुमान लगाकर या किसी रिश्तेदार के पुराने biodata से copy करके gotra भरना सही नहीं है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Gotra biodata में कहाँ लिखें?"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Gotra को कई तरह से रखा जा सकता है। अगर biodata traditional format का है, तो इसे “Family & Traditional Details” के अंतर्गत रखना आसान रहता है। अगर profile modern है, तो “Traditional Details” नाम का छोटा section बनाया जा सकता है। इससे education, career और personality की जानकारी अलग और readable रहती है।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"एक practical order यह हो सकता है: नाम, जन्म विवरण, height, education, occupation, family details, traditional details, About Me और partner expectations। अगर family में rashi, nakshatra या manglik status भी देखा जाता है, तो उन्हें gotra के साथ एक optional section में रखा जा सकता है। सभी fields भरना जरूरी नहीं है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"तीन उदाहरण"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"उदाहरण 1 — छोटा traditional profile:"</strong>{" “Gotra: Bharadwaj | Rashi: Kanya | Nakshatra: Hasta”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"उदाहरण 2 — modern profile:"</strong>{" “Traditional details: Gotra — Family verified; Horoscope — available separately.”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{""}<strong>"उदाहरण 3 — privacy-first profile:"</strong>{" “Gotra: Shared during family discussion.”"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"तीसरा विकल्प तब उपयोगी हो सकता है जब biodata बहुत लोगों को forward होना है और परिवार शुरुआती document में limited information रखना चाहता है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Gotra लिखते समय common mistakes"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"सबसे आम गलती spelling या family information को verify किए बिना भरना है। दूसरी गलती यह मान लेना है कि एक ही surname का मतलब हमेशा एक ही gotra होता है। Biodata में gotra surname से अनुमान नहीं किया जाना चाहिए। तीसरी गलती यह है कि family की traditional practice को universal rule की तरह लिखा जाए। बेहतर है कि field को factual और neutral रखा जाए।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर horoscope अलग document में share होता है, तो biodata में पूरा horoscope data दोहराने की जरूरत नहीं है। इससे profile छोटा और आसान रहता है। इसी तरह government ID, exact home address या किसी sensitive document को gotra section के साथ attach नहीं करना चाहिए।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Biodata में gotra कब छोड़ सकते हैं?"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर परिवार gotra को matrimonial introduction में इस्तेमाल नहीं करता, तो उसे खाली छोड़ना बिल्कुल ठीक है। A good biodata should represent the family’s actual process, not every field available in a template. Optional fields का उद्देश्य यही है कि profile जरूरत के अनुसार बदली जा सके।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"Biodata बनाते समय practical checklist"}</h2>
<ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-stone-700">
<li>{"परिवार से gotra की spelling confirm करें।"}</li>
<li>{"अनुमान लगाकर gotra न लिखें।"}</li>
<li>{"Gotra को अलग और स्पष्ट field में रखें।"}</li>
<li>{"Rashi, nakshatra और manglik status को optional रखें।"}</li>
<li>{"Sensitive identity documents biodata में न जोड़ें।"}</li>
<li>{"अगर horoscope अलग भेजना है, तो biodata को compact रखें।"}</li>
<li>{"Final PDF को phone पर पढ़कर देखें।"}</li>
</ul>
<p className="mt-4 text-base leading-8 text-stone-700">{"अगर आपको एक structured profile बनानी है, तो "}<Link className="underline underline-offset-4" href="/kundali-marriage-biodata-format">Kundali marriage biodata format</Link>{" देखें। पूरा profile बनाने के लिए "}<Link className="underline underline-offset-4" href="/marriage-biodata-maker-online">EasyBiodataMaker</Link>{" का browser-based maker इस्तेमाल किया जा सकता है। सभी format resources के लिए "}<Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage Biodata Guides</Link>{" देखें।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"अंतिम बात"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"Gotra biodata का एक traditional हिस्सा हो सकता है, लेकिन इसका सही उपयोग family-specific है। सबसे अच्छा biodata वही है जिसमें सही जानकारी, readable structure और जरूरी privacy controls हों। अगर आपके परिवार में gotra महत्वपूर्ण है, तो उसे साफ तरीके से दिखाएं; अगर नहीं है, तो केवल SEO या template की वजह से उसे जोड़ने की जरूरत नहीं है।"}</p>
<h2 className="mt-9 font-display text-2xl font-semibold">{"अगर परिवार की जानकारी अलग-अलग हो"}</h2>
<p className="mt-4 text-base leading-8 text-stone-700">{"कभी-कभी परिवार के अलग सदस्यों को gotra की spelling या traditional details याद नहीं होतीं। ऐसी स्थिति में biodata जल्दी publish करने के बजाय जानकारी verify करना बेहतर है। अगर verification में समय लग रहा है, तो field को temporarily hide रखा जा सकता है और बाद में updated version बनाया जा सकता है। यह approach किसी गलत detail को कई WhatsApp groups में फैलने से भी बचाती है।"}</p>
<p className="mt-4 text-base leading-8 text-stone-700">{"यह भी ध्यान रखें कि biodata कोई legal या official identity document नहीं है। इसका उद्देश्य matrimonial introduction को आसान बनाना है। इसलिए जितनी जानकारी पहली बातचीत के लिए जरूरी है उतनी ही रखें और बाकी details परिवारों के बीच आगे की बातचीत में साझा करें।"}</p></div>
          <p className="mt-7 text-sm leading-7 text-stone-600">Related resource: <Link className="underline underline-offset-4" href="/kundali-marriage-biodata-format">traditional matching format</Link>, <Link className="underline underline-offset-4" href="/marriage-biodata-guides">Marriage biodata guides</Link> and <Link className="underline underline-offset-4" href="/templates">biodata templates</Link>.</p>
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
