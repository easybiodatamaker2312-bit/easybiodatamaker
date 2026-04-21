import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bengali Marriage Biodata Free – বিবাহ বায়োডেটা | EasyBiodataMaker',
  description: 'Create Bengali marriage biodata free. বাংলা + English bilingual format. Brahmin (Kulin), Kayastha, Baidya, Namasudra communities. Gotra, para, kul devata. PDF instantly.',
  keywords: ['bengali marriage biodata','bangla biodata free','bibaho biodata bengali','west bengal marriage biodata','kolkata biodata format','brahmin kulin biodata bengali','kayastha biodata bengali','baidya biodata','namasudra biodata','bengali gotra biodata','bengali biodata pdf free'],
  alternates: { canonical: 'https://easybiodatamaker.com/bengali-biodata-format' },
  openGraph: { title: 'Bengali Marriage Biodata Free – বাংলা + English', description: 'Free Bengali marriage biodata. বাংলা + English bilingual. Brahmin, Kayastha, Baidya, all communities.', url: 'https://easybiodatamaker.com/bengali-biodata-format' },
};

const aeoFaqs = [
  { question: 'Bengali marriage biodata mein kya fields specifically important hain?', answer: "Bengali matrimony mein — particularly Brahmin families ke liye — 'kulin' status important tha historically (it denoted a particularly respected lineage) though this is less rigidly observed today. Gotra is essential. Para (neighbourhood) and ancestral home village are often mentioned. Kul devata (family deity) is also common. For the educated urban Bengali family, job in a reputed organisation (government, PSU, or established private company) matters more than community details." },
  { question: 'Kulin Brahmin kya hota hai Bengali biodata mein?', answer: "Kulin Brahmin refers to families of traditionally high social standing within Bengali Brahmin communities — historically associated with notable lineages. In practice today, most Bengali Brahmin families do not strictly enforce kulin-only matching, but some traditional families in rural Bengal and older Kolkata households still prefer it. If your family is from a kulin lineage and this matters to you, it can be mentioned in the sub-caste or custom fields." },
  { question: 'Kolkata vs other West Bengal cities — does it matter in biodata?', answer: "Yes, for some families. Old Kolkata families (from Shyambazar, Hatibagan, Jorasanko areas) carry a certain cultural identity. North Bengal (Siliguri, Darjeeling) has a different culture. Families also distinguish between city-educated candidates and those from mofussil towns. Your city clearly mentioned (Kolkata, Howrah, Burdwan, Siliguri) lets families place you in a community context they understand." },
  { question: 'Bengali biodata mein occupation kaise mention karein?', answer: "Bengali families traditionally respect government jobs (IAS, IPS, state services, PSU) and academic/intellectual professions (professor, doctor, lawyer). Private sector is respected but a senior government role carries more traditional matrimonial weight. If working in a well-known company (TCS, Wipro, etc.) or a good hospital, mention both the company name and designation clearly. Income as a range, not exact figure." },
  { question: 'Which template works best for a Bengali marriage biodata?', answer: "Rose Bloom (soft pink, elegant) works well for Bengali girls' biodatas. Classic Saffron is appropriate for traditional families. Emerald Modern suits urban professional families in Kolkata or elsewhere. Bengali cultural aesthetics tend toward refined and elegant rather than festive — so the Rose Bloom and Classic Saffron both fit well." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function BengaliPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🪷</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Bengali Marriage Biodata
              <span className="block text-xl mt-2 text-rose-600 font-normal">বাংলা + English · Free · No Login</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our Rose Bloom and Classic Saffron templates work well for Bengali families — elegant, dignified, and readable. Covers gotra, para, and all fields Bengali families look for. Free PDF in 5 minutes.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">🪷 বায়োডেটা তৈরি করুন — Free</Link>
          </div>
        </section>
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Bengali Matrimonial Culture — What Actually Matters</h2>
            <p>Bengali matrimony has a strong literary and intellectual tradition. An IAS officer, professor, or doctor carries enormous weight. A well-known author or artist does too. The profession section of a Bengali biodata should be filled with care.</p>
            <p>For Brahmin families — gotra is essential and same gotra is avoided. The &ldquo;kulin&rdquo; tradition is mostly historical now in urban areas but may still matter to some traditional families. Para (neighbourhood in Kolkata) and ancestral village still come up in family conversations even if not always on the biodata.</p>
            <div className="bg-rose-50 border-l-4 border-rose-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">For Kolkata Families</h3>
              <p>Old Kolkata has a strong community memory. Families from Shyambazar, Hatibagan, Kumartuli know each other. Mentioning your neighbourhood (para) signals where you fit in the community. Even for someone who has moved to Salt Lake or New Town, the ancestral para in North Kolkata often comes up.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Brahmin (Kulin)','Brahmin (Non-kulin)','Kayastha','Baidya','Namasudra','Sadgop','Mahishya','Aguri','Tili','Sutradhar'].map(c => (
                <span key={c} className="bg-rose-50 border border-rose-200 text-rose-800 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">🪷 Create Bengali Biodata — Free</Link>
            </div>
          </div>
        </section>
        <AEOBlock faqs={aeoFaqs} title="Bengali Biodata — Questions Families Ask" ctaHref="/create" ctaText="Create Bengali Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
