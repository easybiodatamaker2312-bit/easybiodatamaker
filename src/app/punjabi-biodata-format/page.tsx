import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Punjabi Marriage Biodata Free – ਪੰਜਾਬੀ ਵਿਆਹ ਬਾਇਓਡੇਟਾ | EasyBiodataMaker',
  description: 'Create Punjabi marriage biodata free. Gurmukhi + English format. Got, Amritdhari, NRI details. Jat Sikh, Arora, Khatri, Hindu Punjabi communities. PDF in 5 minutes.',
  keywords: ['punjabi marriage biodata','punjabi lagna biodata free','punjabi biodata format','punjabi biodata with gurmukhi','jat sikh biodata','arora punjabi biodata','hindu punjabi biodata','amritsar ludhiana marriage biodata','punjabi nri biodata','punjabi biodata pdf free'],
  alternates: { canonical: 'https://easybiodatamaker.com/punjabi-biodata-format' },
  openGraph: { title: 'Punjabi Marriage Biodata Free – Gurmukhi + English', description: 'Free Punjabi biodata. Gurmukhi headers. Got, Amritdhari. Jat Sikh, Arora, Khatri, Hindu Punjabi.', url: 'https://easybiodatamaker.com/punjabi-biodata-format' },
};

const aeoFaqs = [
  { question: 'Punjabi biodata mein kya likhna chahiye jo aur state ke biodata se alag hota hai?', answer: "Punjabi biodata mein alag cheezein hain: got (gotra) — especially Jat Sikh families ke liye mandatory. Got yahi hai: Gill, Dhillon, Sandhu, Grewal, Sidhu, Virk, Cheema, Chahal, Bajwa. NRI status bahut important hai — Punjab ka ek bada hissa Canada, UK, USA, Australia mein settled hai. Agar candidate ya family mein koi abroad settled hai toh clearly mention karein. Amritdhari status religious families ke liye bhi mention karna chahiye." },
  { question: 'Hindu Punjabi aur Sikh Punjabi biodata mein kya fark hai?', answer: "Sikh Punjabi biodata ੴ se shuru hota hai, got mention hota hai, aur Amritdhari status relevant hota hai. Hindu Punjabi biodata Hindu tradition follow karta hai — gotra, manglik (agar relevant ho), aur Hindu auspicious heading. Dono Punjabi hain lekin matrimonial traditions alag hain. Specify karein ki aap Sikh hain ya Hindu Punjabi — 'Punjabi' akela identity kaafi nahi hai biodata ke liye." },
  { question: 'NRI Punjabi candidate ke liye biodata mein kya add karein?', answer: "Punjab se abroad jane ki parampara bahut purani hai. Canada (Brampton, Surrey, Calgary), UK (Birmingham, Wolverhampton, Southall), USA (Fresno, Yuba City, New Jersey), Australia (Melbourne, Sydney) — large Punjabi communities hain. Biodata mein: city clearly likhein (not just 'Canada' — Brampton vs Toronto is different), PR/citizenship status likhein, income in local currency with INR equivalent, aur intent clearly likhe — permanently settle ho ya India wapas aana chahte hain." },
  { question: 'What opening should a Punjabi Sikh biodata use?', answer: "ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ is the correct and complete Sikh greeting used on formal Sikh documents. Our Punjabi Royal template includes this automatically." },
  { question: 'Ludhiana, Amritsar, Jalandhar families ke liye biodata format alag hai kya?', answer: "Format same hai, lekin kuch regional preferences hain. Ludhiana is more business-oriented — industrial families appreciate specific business/career details. Amritsar families tend to be more traditionally religious — Amritdhari status and religious practices may matter more. Doaba region (Jalandhar, Hoshiarpur) has very high NRI concentration — many families specifically search for NRI matches. Your native city/region can be mentioned in the native place field." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function PunjabiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌾</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Punjabi Marriage Biodata
              <span className="block text-xl mt-2 text-blue-700 font-normal">ਪੰਜਾਬੀ + English · Free · No Login</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our Punjabi Royal Blue template has Gurmukhi section headings. Covers got, Amritdhari status, NRI details — the fields Punjabi families actually check. Takes 5 minutes. Free.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">🌾 ਬਾਇਓਡੇਟਾ ਬਣਾਓ — Free</Link>
            <p className="text-sm text-gray-400 mt-3">Preview page ਤੇ &ldquo;Punjabi Royal&rdquo; template ਚੁਣੋ</p>
          </div>
        </section>
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">ਪੰਜਾਬੀ ਬਾਇਓਡੇਟਾ ਵਿੱਚ ਕੀ ਵੱਖਰਾ ਹੈ</h2>
            <p>Punjab has two big matrimonial communities — Sikh and Hindu Punjabi — and they follow different traditions. Both share the same region but the fields that matter in a biodata differ. Specify which you are on the biodata.</p>
            <p>For Jat Sikh families: <strong>got is the first check</strong>. Same got = no match. For Arora and Khatri families, got is less strictly enforced but still mentioned. For Hindu Punjabi families: standard Hindu fields (gotra, manglik if relevant).</p>
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">Doaba Region — NRI Connections</h3>
              <p>Jalandhar, Hoshiarpur, Nawanshahr — this area has the highest NRI concentration in India. Almost every family has someone abroad. If your family has relatives or connections abroad, mentioning the country (Canada, UK, USA) in the native place or family details section can be relevant. Many families from this region specifically look for settled NRI matches.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Jat Sikh','Arora','Khatri','Ramgarhia','Hindu Punjabi (Khatri)','Hindu Punjabi (Brahmin)','Saini','Labana','Bhatia'].map(c => (
                <span key={c} className="bg-blue-50 border border-blue-200 text-blue-800 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">🌾 Create Punjabi Biodata — Free</Link>
            </div>
          </div>
        </section>
        <AEOBlock faqs={aeoFaqs} title="Punjabi Biodata — Questions Families Ask" ctaHref="/create" ctaText="Create Punjabi Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
