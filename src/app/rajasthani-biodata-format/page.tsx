import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rajasthani Marriage Biodata Free – Marwari Rajput Agarwal | EasyBiodataMaker',
  description: 'Create Rajasthani marriage biodata free. Marwari (Agarwal, Maheshwari, Oswal), Rajput (Chauhan, Rathore), Brahmin communities. Hindi format. PDF download instantly.',
  keywords: ['rajasthani marriage biodata','marwari biodata format','rajasthani biodata free','rajput biodata rajasthan','agarwal maheshwari biodata','oswal jain biodata rajasthan','jaipur jodhpur marriage biodata','rajasthani vivah biodata hindi','marwari shaadi biodata','rajasthani biodata pdf free'],
  alternates: { canonical: 'https://easybiodatamaker.com/rajasthani-biodata-format' },
  openGraph: { title: 'Rajasthani Marriage Biodata Free – Marwari, Rajput, Brahmin', description: 'Free Rajasthani marriage biodata in Hindi format. Agarwal, Maheshwari, Oswal, Rajput, Brahmin communities.', url: 'https://easybiodatamaker.com/rajasthani-biodata-format' },
};

const aeoFaqs = [
  { question: 'Rajasthani marriage biodata mein kya kya likhna hota hai?', answer: "Rajasthan ke biodata mein standard fields ke alawa — kul (gotra) aur shakha (Brahmin families ke liye) zaroor hona chahiye. Marwari families ke liye business ka type aur scale mention karein — Agarwal, Maheshwari, Oswal families mainly business community hain aur vyavsay ka detail important hai. Rajput families ke liye khandan aur village important hota hai. Address mein sheher ke saath rajya zaroor likhein kyunki Rajasthan ka Jaipur aur UP ka Jaipur alag hai." },
  { question: 'Marwari community biodata mein business detail kaise mention karein?', answer: "Marwari families (Agarwal, Maheshwari, Oswal) business-centric hain. Sirf 'Self-employed' likhna kaafi nahi. Clearly mention karein: business type (kapda, jewellery, pharma, real estate), scale (approximate turnover), aur kahan — Jodhpur, Jaipur, Mumbai mein settled Marwari? Many Marwari families have settled across India — Delhi, Mumbai, Kolkata. City of current business operations matters." },
  { question: 'Rajput families ke liye biodata mein clan and village important kyun hai?', answer: "Rajput community mein vansh (Chauhan, Rathore, Sisodia, Tomar, Bhati, Shekhawat, Shekhawati) aur original gaon dono important hain. Two families from the same vansh may have distant kinship connections that affect the match decision. The ancestral village or jagir (in older families) is also significant in traditional Rajput matrimonial discussions." },
  { question: 'Oswal Jain vs Oswal Hindu — kya difference hai biodata mein?', answer: "Oswal is a community name used by both Jain and Hindu families from Rajasthan. An Oswal Jain biodata should mention the sect (Shvetambar or Digambar) and the family's religious observances. An Oswal Hindu biodata follows standard Hindu format with gotra and kuldevi. The distinction matters because these are different matrimonial pools — write clearly which tradition your family follows." },
  { question: 'Which template works best for a Rajasthani biodata?', answer: "Hindi Shaadi template is the most appropriate — it has Devanagari section headings, traditional double-border design, and gold accents that suit Rajasthani family aesthetics. Classic Saffron also works well. For Jain families from Rajasthan (Oswal Jain), the Classic Saffron template is preferred over the community-specific ones." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function RajasthaniBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #fdf6e3, #fef3c7)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🏰</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Rajasthani Marriage Biodata
              <span className="block text-xl mt-2 text-amber-700 font-normal">Marwari · Rajput · Brahmin · Free</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Rajasthan has three very distinct matrimonial cultures — Marwari business families, Rajput clans, and Brahmin communities. Our Hindi Shaadi template with Devanagari headings and traditional double-border works well for all three.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">🏰 Create Rajasthani Biodata — Free</Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Rajasthan Ke Teen Alag Matrimonial Cultures</h2>
            <p><strong>Marwari families</strong> (Agarwal, Maheshwari, Oswal) — business community hai. Biodata mein business ki detail bahut important hai. Sirf &ldquo;vyavsay&rdquo; likhna kaafi nahi — type aur scale bhi bataiye.</p>
            <p><strong>Rajput families</strong> — vansh (Chauhan, Rathore, Sisodia, Bhati, Shekhawat) aur ancestral village ya jagir dono important hain. Khandaan ki pehchaan matter karti hai.</p>
            <p><strong>Brahmin families</strong> — Rajasthan ke Brahmin mein Pushtimarg ke Brahmins, Gaur Brahmin, Saraswat Brahmin hain. Gotra aur shakha dono mention karein.</p>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">Marwari Business Family ke liye</h3>
              <p>Sirf &ldquo;self-employed&rdquo; mat likhein. Business type clearly batayein — textile, jewellery, pharma, real estate. Bahut si Marwari families Rajasthan se bahar settle hain — Delhi, Mumbai, Kolkata, Ahmedabad. Current city of business mention karein. Families want to know if the boy or girl is running the business with the family or independently.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Agarwal (Marwari)','Maheshwari','Oswal Jain','Oswal Hindu','Rajput (Chauhan)','Rajput (Rathore)','Rajput (Sisodia)','Rajput (Shekhawat)','Brahmin (Gaur)','Brahmin (Saraswat)','Jat (Rajasthan)'].map(c => (
                <span key={c} className="bg-amber-50 border border-amber-200 text-amber-900 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">🏰 Rajasthani Biodata Banao — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Rajasthani Biodata — Sawaal Aur Jawab" ctaHref="/create" ctaText="Create Rajasthani Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
