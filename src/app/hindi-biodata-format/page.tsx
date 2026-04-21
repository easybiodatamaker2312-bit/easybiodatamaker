import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hindi Marriage Biodata Free – हिंदी में शादी का बायोडेटा | EasyBiodataMaker',
  description:
    'शादी का बायोडेटा हिंदी में बनाएं — बिल्कुल free, बिना registration के। Devanagari headings के साथ professional format। UP, Bihar, MP, Rajasthan, Delhi सभी के लिए। 5 मिनट में PDF download।',
  keywords: [
    'hindi marriage biodata format',
    'shaadi ka biodata hindi mein',
    'hindi biodata maker free',
    'vivah biodata hindi format',
    'shaadi biodata kaise banaye hindi mein',
    'UP Bihar marriage biodata format',
    'rajasthan marriage biodata hindi',
    'hindi biodata devanagari headings',
    'hindi shaadi biodata pdf free download',
    'brahmin biodata hindi format',
    'yadav biodata format hindi',
    'kayastha biodata hindi format',
    'rajput biodata hindi format',
    'biodata in hindi language free',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/hindi-biodata-format' },
  openGraph: {
    title: 'Hindi Marriage Biodata Free – हिंदी में शादी का बायोडेटा',
    description: 'हिंदी में बायोडेटा बनाएं — free, 5 मिनट में। Devanagari headings, English fields. UP, Bihar, MP, Rajasthan, Delhi सभी communities के लिए।',
    url: 'https://easybiodatamaker.com/hindi-biodata-format',
  },
};

const aeoFaqs = [
  {
    question: 'हिंदी में शादी का बायोडेटा कैसे बनाएं?',
    answer: 'EasyBiodataMaker.com पर जाएं → Hindi भाषा select करें → 4-step form भरें → Hindi Shaadi template चुनें (Devanagari section headings के साथ) → PDF download करें। बिना registration के, बिल्कुल free।',
  },
  {
    question: 'UP और Bihar में marriage biodata में क्या-क्या लिखते हैं?',
    answer: "UP और Bihar में families सबसे पहले देखती हैं — जाति और उपजाति, गोत्र, पिता का नाम और occupation, लड़के/लड़की की नौकरी (government हो तो extra good), education का college और degree, और annual income। Photo quality भी matters — plain background से बेहतर है natural setting में photo।",
  },
  {
    question: 'Government job का बायोडेटा में कैसे mention करें?',
    answer: "Government job को prominently लिखें — सिर्फ 'Government employee' नहीं। पूरी detail: Department (UP Police/Indian Railways/BSNL), Designation (Sub-Inspector/Station Master/JTO), Pay Grade/Level अगर comfortable हों। IAS, IPS, PCS जैसी posts को बड़े font में या heading में रखें — ये UP-Bihar में बहुत weight carry करती हैं।",
  },
  {
    question: 'Brahmin gotra in biodata — क्या लिखें?',
    answer: "हिंदी-speaking states में Brahmin families के लिए gotra essential है। Kashyap, Bharadwaj, Vasishtha, Atreya, Gautam, Shandilya — अपना सही gotra लिखें। अगर पता नहीं तो घर के बड़े-बुजुर्ग से पूछें। Same gotra में शादी नहीं होती — इसलिए यह field छोड़ें नहीं।",
  },
  {
    question: 'कौन सी Hindi communities के लिए यह template काम करता है?',
    answer: 'Brahmin (Saryu Parin, Kanyakubja, Maithil, Sanadhya, Gaur), Kayastha, Rajput (Chauhan, Rathore, Sisodia, Tomar), Bania/Agarwal, Yadav, Kurmi, Lodhi Rajput, Jat, Gupta, Vaishya, Khatri, Tyagi — UP, Bihar, MP, Rajasthan, Delhi, Uttarakhand सभी communities।',
  },
];

const aeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aeoFaqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function HindiBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #fdf6e3, #fef3c7)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">📜</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Hindi Marriage Biodata
              <span className="block text-2xl mt-2 text-red-700 font-normal">
                हिंदी + English · Free · No Registration
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              हमारा Hindi Shaadi template traditional double-border design के साथ आता है। Section
              headings हिंदी में हैं — जैसे <em>व्यक्तिगत विवरण, पारिवारिक विवरण</em> — और fields
              English में भरे जाते हैं। UP से लेकर Rajasthan तक, सभी के लिए।
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              📜 हिंदी बायोडेटा बनाएं — Free
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              Preview page पर &ldquo;Hindi Shaadi&rdquo; template select करें
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              UP-Bihar में बायोडेटा में क्या देखते हैं घरवाले?
            </h2>

            <p>
              हिंदी-speaking states में बायोडेटा की culture थोड़ी अलग है। यहाँ सबसे पहले <strong>जाति
              और गोत्र</strong> देखा जाता है। उसके बाद <strong>पिता की नौकरी या business</strong> —
              क्योंकि family का background बताता है। फिर लड़के/लड़की की खुद की job।
            </p>

            <p>
              Government job का UP-Bihar में अलग ही status है। अगर कोई IAS, IPS, PCS, या Railway
              officer है — तो बायोडेटा में उसे ऊपर mention करें, clearly। सिर्फ &ldquo;Government
              employee&rdquo; लिखना काफी नहीं। Department, designation, और posting city तीनों
              लिखें।
            </p>

            <div className="bg-amber-50 border-l-4 border-red-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">Income के बारे में</h3>
              <p>
                Exact salary mat likhein — <em>14,32,500 per year</em> likhna awkward lagta hai aur
                income-based bargaining shuru ho jaati hai. Ranges use karein: <strong>12–18 LPA</strong>
                ya <strong>20–30 LPA</strong>. Yeh zyada professional lagta hai aur sahi information
                bhi deta hai.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Brahmin Biodata — Gotra और Pravar
            </h2>

            <p>
              UP-Bihar के Brahmin families के लिए gotra essential है। Saryu Parin, Kanyakubja,
              Maithil, Sanadhya, Gaur — अलग-अलग Brahmin communities हैं और सभी में gotra matching
              होती है। Same gotra में शादी नहीं होती — यह rule generally follow होता है।
            </p>

            <p>
              Manglik के बारे में — अगर आपको पता है तो लिखें। अगर नहीं पता तो &ldquo;Not Known&rdquo;
              लिखें। Blank छोड़ने से families assume करती हैं कि छुपाया जा रहा है।
            </p>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Hindi Template कैसा दिखता है?
            </h2>

            <p>
              Hindi Shaadi template में traditional double-border design है — ऊपर और नीचे maroon
              border, बीच में gold accent। ऊपर <em>ॐ श्री गणेशाय नमः</em> लिखा होता है। Section
              headings Devanagari में हैं: <em>● व्यक्तिगत विवरण, ● पारिवारिक विवरण</em> आदि।
              Overall look traditional परिवारों के लिए सही है — fancy नहीं, dignified है।
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                'Brahmin (Saryu Parin)', 'Brahmin (Kanyakubja)', 'Brahmin (Maithil)',
                'Kayastha', 'Rajput (Chauhan)', 'Rajput (Rathore)', 'Yadav',
                'Agarwal / Gupta', 'Kurmi', 'Jat', 'Lodhi Rajput', 'Vaishya',
              ].map(c => (
                <span key={c} className="bg-red-50 border border-red-200 text-red-800 text-xs px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mt-2">
              <h3 className="font-bold text-red-900 mb-2">अभी बनाइए — एकदम free</h3>
              <p className="text-gray-600 text-sm mb-4">No registration. Form भरें, Hindi Shaadi template चुनें, PDF download करें।</p>
              <Link href="/create" className="btn-primary text-sm">📜 शुरू करें — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Hindi Biodata — आपके सवाल, सीधे जवाब" ctaHref="/create" ctaText="Hindi Biodata Banao Free" />
      </main>
      <Footer />
    </div>
  );
}
