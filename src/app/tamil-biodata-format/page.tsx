import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tamil Marriage Biodata Free – திருமண பரிசய தாள் | EasyBiodataMaker',
  description: 'Create Tamil marriage biodata free. Nakshatra, rashi, gothram, kula deivam fields. Iyer, Iyengar, Mudaliar, Chettiar, Nadar, Gounder, Thevar communities. PDF instantly.',
  keywords: ['tamil marriage biodata','tamil biodata free online','thirumanam parichayam','iyer biodata format','iyengar biodata format','mudaliar biodata','chettiar biodata','nadar biodata format','gounder biodata','thevar biodata','nakshatra biodata tamil','chennai coimbatore marriage biodata'],
  alternates: { canonical: 'https://easybiodatamaker.com/tamil-biodata-format' },
  openGraph: { title: 'Tamil Marriage Biodata Free – All Communities', description: 'Free Tamil marriage biodata. Nakshatra, rashi, gothram, kula deivam. Iyer, Iyengar, Mudaliar, Nadar, Gounder.', url: 'https://easybiodatamaker.com/tamil-biodata-format' },
};

const aeoFaqs = [
  { question: 'Tamil marriage biodata mein kya fields hote hain jo North India se alag hain?', answer: "Tamil biodata mein teen extra fields hote hain: nakshatra (birth star — Rohini, Krittika, Ashwini jaise 27 nakshatras mein se), rashi (moon sign — Mesha, Vrishabha, etc.), aur gothram (patrilineal clan). Iyer aur Iyengar families mein ek aur field bhi hoti hai — 'pravaram' (ancestral sages list). Kula deivam (family deity) bhi important hai, especially Mudaliar, Nadar, Gounder communities mein." },
  { question: 'What is the difference between Iyer and Iyengar in Tamil matrimony?', answer: "Both are Tamil Brahmin communities but they follow different religious traditions. Iyers are Shaiva Brahmins — they primarily worship Shiva. Iyengars are Vaishnava Brahmins — they worship Vishnu/Narayana, and further divide into Vadakalai and Thenkalai sub-sects with different practices. Iyer-Iyengar marriages do happen but some families prefer same-tradition matches. Specify clearly: 'Brahmin (Iyer)' or 'Brahmin (Iyengar — Vadakalai)' or 'Brahmin (Iyengar — Thenkalai)'." },
  { question: 'Tamil biodata mein nakshatra porutham kya hota hai?', answer: "Nakshatra porutham is the system of checking compatibility between a boy and girl's birth stars. The traditional system checks 10 compatibility factors called dasavidha porutham — dina, gana, yoni, rashi, rajju, vethai, vasya, mahendra, stree deergha, and nadi. Most Tamil families who follow astrological matching need the nakshatra clearly mentioned. Without it, they cannot do the porutham check and may not proceed with the match." },
  { question: 'Which Tamil communities follow strict nakshatra matching and which do not?', answer: "Iyer and Iyengar Brahmin families most strictly follow nakshatra matching — it is almost mandatory. Mudaliar and Pillai communities generally do matching but may be more flexible. Chettiar families have their own specific traditions. Communities like Nadar, Gounder, and Thevar in more urban educated settings are increasingly flexible about astrological matching, though many families still check nadi dosha specifically." },
  { question: 'Tamil biodata mein kula deivam kaise mention karein?', answer: "Kula deivam is the ancestral family deity — every Tamil family has one. For Brahmin families, it is often a form of Lakshmi or specific temple deity. For non-Brahmin communities: Mariamman, Murugan, Pillaiyar, and various local deities. You can add it in EasyBiodataMaker's custom fields. Format: 'Kula Deivam: Thiruvannamalai Annamalayar (for example)'. Some families check kula deivam compatibility — having the same or compatible deities is seen as auspicious." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function TamilPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-violet-50 to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌺</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Tamil Marriage Biodata
              <span className="block text-xl mt-2 text-violet-700 font-normal">திருமண பரிசய தாள் · All Communities · Free</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Tamil matrimony uses nakshatra, rashi, and gothram fields that most biodata tools do not include. Our Purple Temple template is designed for South Indian families — add nakshatra and kula deivam in custom fields. Free PDF.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">🌺 Create Tamil Biodata — Free</Link>
          </div>
        </section>
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Why Tamil Biodata Has More Fields Than Most</h2>
            <p>Tamil matrimony — especially for Brahmin families — requires nakshatra porutham (star compatibility check). Without the nakshatra clearly mentioned, families who follow this tradition simply cannot do the matching and may not respond. It is that foundational.</p>
            <div className="bg-violet-50 border-l-4 border-violet-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">Iyer vs Iyengar — Write It Clearly</h3>
              <p>Both Tamil Brahmin, but Shaiva vs Vaishnava tradition. Iyengars divide further into Vadakalai and Thenkalai — these have different practices and some families prefer within-sub-sect. Never write just &ldquo;Brahmin&rdquo; for a Tamil biodata. Specify Iyer, Iyengar (Vadakalai), or Iyengar (Thenkalai).</p>
            </div>
            <h2 className="font-display text-2xl font-bold text-maroon-900">Fields to Add via Custom Fields</h2>
            <div className="space-y-2">
              {[
                {f:'Nakshatra', ex:'e.g., Rohini, Krittika, Mrigashira, Revati'},
                {f:'Rashi', ex:'e.g., Vrishabha, Mithuna, Mesha'},
                {f:'Gothram', ex:'e.g., Bharadwaja, Kashyapa, Vasishtha'},
                {f:'Kula Deivam', ex:'e.g., Arulmigu Thiruvannamalai Annamalayar'},
              ].map(({f, ex}) => (
                <div key={f} className="flex gap-3 text-xs">
                  <span className="font-bold text-violet-700 w-28 flex-shrink-0">{f}</span>
                  <span className="text-gray-500">{ex}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Brahmin (Iyer)','Brahmin (Iyengar - Vadakalai)','Brahmin (Iyengar - Thenkalai)','Mudaliar','Pillai (Vellala)','Chettiar (Nattukotai)','Nadar','Gounder','Thevar','Vanniyar','Maravar'].map(c => (
                <span key={c} className="bg-violet-50 border border-violet-200 text-violet-800 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">🌺 Create Tamil Biodata — Free</Link>
            </div>
          </div>
        </section>
        <AEOBlock faqs={aeoFaqs} title="Tamil Biodata — Questions Families Ask" ctaHref="/create" ctaText="Create Tamil Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
