import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kannada Marriage Biodata Free – Karnataka All Communities | EasyBiodataMaker',
  description: 'Create Kannada marriage biodata free. Lingayat, Vokkaliga, GSB, Havyaka Brahmin, Madhwa Brahmin communities. Nakshatra, gotra, kula deivam fields. PDF in 5 minutes.',
  keywords: ['kannada marriage biodata','karnataka biodata format','lingayat biodata','vokkaliga biodata','gsb biodata format','havyaka brahmin biodata','madhwa brahmin biodata','bangalore marriage biodata','mysore biodata format','kannada biodata pdf free'],
  alternates: { canonical: 'https://easybiodatamaker.com/kannada-biodata-format' },
  openGraph: { title: 'Kannada Marriage Biodata Free – Karnataka All Communities', description: 'Free Kannada biodata. Lingayat, Vokkaliga, GSB, Brahmin communities supported. Nakshatra, gotra, kula deivam.', url: 'https://easybiodatamaker.com/kannada-biodata-format' },
};

const aeoFaqs = [
  { question: 'What makes a Kannada marriage biodata different from other South Indian biodatas?', answer: "Karnataka has significant internal community diversity — Lingayat, Vokkaliga, GSB (Goud Saraswat Brahmin), Havyaka Brahmin, Madhwa Brahmin are all quite different in their matrimonial expectations. Lingayat families check the sub-sect (Panchamasali, Sadar Lingayat, Veerashaiva) and often the jangama (priestly caste) status. Vokkaliga families are concentrated in Old Mysore region and have their own gotras. GSB families from coastal Karnataka have a very distinct culture from inland Brahmin communities." },
  { question: 'Do Lingayat biodatas follow different rules for gotra and matching?', answer: "Lingayat matrimony follows different rules from Vedic Hindu tradition. Lingayats do not use gotra in the same Brahminical sense — instead, they identify by sub-sect (Panchamasali, Sadar, Ganiga Lingayat, etc.) and by sharana tradition. For Lingayat biodatas, sub-community is more important than gotra. You can specify your Lingayat sub-sect in the sub-caste field." },
  { question: 'What is GSB community and why is it specific in biodata?', answer: "GSB stands for Goud Saraswat Brahmin — a coastal Brahmin community from Goa, Konkan coast, Mangalore, and Udupi. They are distinct from inland Karnataka Brahmins in language (Konkani as mother tongue), customs, and matrimonial expectations. A GSB biodata should mention this explicitly — 'Brahmin (GSB)' not just 'Brahmin'. GSB families generally marry within GSB." },
  { question: 'Bangalore IT professional ka biodata Karnataka format mein kaise banaye?', answer: "Bangalore IT families are relatively less strict about nakshatra matching but gothram is still checked. For the career section, company name matters — FAANG, product companies, and tier-1 IT firms carry specific weight. Bangalore families also commonly look at: which area of Bangalore the person lives (North vs South Bangalore has different residential status implications), and whether the candidate is open to living in Bangalore long-term." },
  { question: 'Which Kannada communities does this tool support?', answer: "Lingayat (all sub-sects including Panchamasali, Sadar, Ganiga, Veerashaiva), Vokkaliga (Gowda, Morasu Vokkaliga), GSB (Goud Saraswat Brahmin), Havyaka Brahmin, Madhwa Brahmin, Smartha Brahmin, Setty, Bunt (from coastal Karnataka), Billava, Kuruba Gowda — and all other Karnataka communities." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function KannadaBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-violet-50 to-indigo-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌸</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Kannada Marriage Biodata
              <span className="block text-xl mt-2 text-violet-700 font-normal">Karnataka · All Communities · Free</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Karnataka has some of the most diverse matrimonial communities in South India — Lingayat, Vokkaliga, GSB, Havyaka Brahmin are all quite different. Our Purple Temple template covers all the South Indian fields families look for.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">🌸 Create Kannada Biodata — Free</Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Karnataka's Communities Are Not Interchangeable</h2>
            <p>Unlike some states where caste is a broad identifier, in Karnataka the sub-community distinction within broad categories really matters. <strong>Lingayat families</strong> care a lot about which sub-sect — Panchamasali, Sadar Lingayat, Ganiga Lingayat. <strong>GSB families</strong> from the coast have little in common matrimonially with inland Brahmin communities despite both being "Brahmin." And <strong>Vokkaliga families</strong> primarily from Old Mysore region have their own distinct gotras.</p>
            <div className="bg-indigo-50 border-l-4 border-indigo-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">For Bangalore IT Professionals</h3>
              <p>Nakshatra matching is less common in tech-educated Bangalore families, but gothram is still often checked. Company name matters in the career section — tier-1 firms, product companies, and FAANG carry distinct status. Also worth mentioning: which part of Bangalore you live in (Whitefield, HSR, Koramangala, Jayanagar) matters to some families.</p>
            </div>
            <h2 className="font-display text-2xl font-bold text-maroon-900">Communities This Works For</h2>
            <div className="flex flex-wrap gap-2">
              {['Lingayat (Panchamasali)','Lingayat (Sadar)','Vokkaliga','GSB (Goud Saraswat)','Havyaka Brahmin','Madhwa Brahmin','Smartha Brahmin','Setty','Bunt','Billava','Kuruba Gowda'].map(c => (
                <span key={c} className="bg-violet-50 border border-violet-200 text-violet-800 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">🌸 Create Kannada Biodata — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Kannada Biodata — Questions Karnataka Families Ask" ctaHref="/create" ctaText="Create Kannada Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
