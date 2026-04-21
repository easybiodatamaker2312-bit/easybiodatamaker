import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jain Marriage Biodata Free – Shvetambar Digambar Online | EasyBiodataMaker',
  description: 'Create a Jain marriage biodata online free. Specify sect (Shvetambar or Digambar), Jain gotra, Paryushan observance, vegetarian lifestyle. Gujarat, Rajasthan, Maharashtra Jain communities.',
  keywords: ['jain marriage biodata','jain biodata format free','shvetambar biodata','digambar biodata','jain lagna biodata','gujarat jain biodata','rajasthani jain biodata','oswal jain biodata','porwal jain biodata','jain gotra biodata','jain vegetarian biodata','jain matrimony biodata'],
  alternates: { canonical: 'https://easybiodatamaker.com/jain-marriage-biodata' },
  openGraph: { title: 'Jain Marriage Biodata Free – Shvetambar & Digambar', description: 'Free Jain marriage biodata. Sect, gotra, Paryushan observance. Gujarat, Rajasthan, Maharashtra Jain communities.', url: 'https://easybiodatamaker.com/jain-marriage-biodata' },
};

const aeoFaqs = [
  { question: 'What makes a Jain marriage biodata different from a regular Hindu biodata?', answer: "A Jain biodata needs to clearly specify sect — Shvetambar or Digambar — because Shvetambar-Digambar matches are rare and families prefer to know upfront. Beyond that, Jain families look at: the sub-sect within Shvetambar (Murtipujak, Sthanakvasi, Terapanthi), religious observance level (how strictly Paryushan is observed, whether the family is pratikraman-doing), and vegetarian lifestyle details. Non-vegetarian is a dealbreaker for most Jain families." },
  { question: 'Shvetambar aur Digambar mein kya fark hai biodata ke liye?', answer: "Shvetambar aur Digambar Jain do alag sects hain — alag practices, alag temples, alag community networks. Generally these two communities do not intermarry. Within Shvetambar, further distinctions exist: Murtipujak (idol worshippers), Sthanakvasi (non-idol), and Terapanthi. Apna sect clearly likhein — 'Jain' alone is insufficient on a biodata where the other family will definitely ask." },
  { question: 'Jain gotra kya hota hai aur kaise pata karein?', answer: "Jain gotra (also called kul or vansh) is different from Hindu gotra in origin but serves a similar purpose — identifying your patrilineal clan. Common Jain gotras: Oswal, Porwal, Khandelwal, Agrawal (Jain), Maheshwari (Jain). In some communities, same gotra marriage is avoided; in others it is acceptable with family consent. Ask your parents or family elders for your specific gotra." },
  { question: 'Should Paryushan observance be mentioned in a Jain biodata?', answer: "For devout Jain families, yes. Paryushan is the most important Jain religious festival and how strictly it is observed signals the family's religious commitment level. You do not need to go into detail — simply indicating whether the family observes Paryushan regularly, and whether they follow Samvatsari pratikraman, is enough for families who care about this." },
  { question: 'Which template works best for a Jain marriage biodata?', answer: "Classic Saffron or Gujarati Navratri (for Gujarat Jains) works well. The Gujarati Navratri template has a Navratri-inspired design that is familiar and appropriate for Gujarati Jain families. For Rajasthani Jain families (Oswal, Khandelwal), Classic Saffron or Hindi Shaadi is more appropriate." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function JainBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🙏</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Jain Marriage Biodata
              <span className="block text-xl mt-2 text-amber-700 font-normal">Shvetambar · Digambar · All Communities · Free</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              A Jain biodata needs to be specific — sect, sub-sect, gotra, vegetarian commitment. Generic templates leave out fields Jain families actually ask for. Create yours in 5 minutes, free.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">🙏 Create Jain Biodata — Free</Link>
            <p className="text-sm text-gray-400 mt-3">Add Paryushan observance and sect details in custom fields</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Fields Jain Families Actually Ask For</h2>
            <p>The first thing most Jain families clarify: <strong>Shvetambar or Digambar?</strong> These two sects have different practices, different temples, and generally separate matrimonial communities. Within Shvetambar: <strong>Murtipujak, Sthanakvasi, or Terapanthi?</strong> These further distinctions matter to religious families.</p>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">What to Add in Custom Fields</h3>
              <p>EasyBiodataMaker's custom fields section is where Jain-specific details go:</p>
              <ul className="mt-3 space-y-1.5">
                {[
                  'Sect: Shvetambar (Murtipujak) / Sthanakvasi / Digambar',
                  'Gotra / Kul: e.g., Oswal, Porwal, Khandelwal',
                  'Paryushan observance: Yes, strictly / Yes, family level',
                  'Pratikraman: Daily / Festival-time / Not regularly',
                  'Diet: Jain vegetarian (no root vegetables) / Vegetarian',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs"><span className="text-amber-500 mt-0.5">→</span> {item}</li>
                ))}
              </ul>
            </div>
            <h2 className="font-display text-2xl font-bold text-maroon-900">Jain Communities This Works For</h2>
            <div className="flex flex-wrap gap-2">
              {['Oswal Jain','Porwal Jain','Khandelwal Jain','Maheshwari (Jain)','Shvetambar Murtipujak','Shvetambar Sthanakvasi','Shvetambar Terapanthi','Digambar','Gujarat Jain','Rajasthan Jain','Maharashtra Jain'].map(c => (
                <span key={c} className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">🙏 Create Jain Biodata — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Jain Biodata — Questions Families Ask" ctaHref="/create" ctaText="Create Jain Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
