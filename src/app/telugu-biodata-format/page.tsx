import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Telugu Marriage Biodata Free – Andhra Telangana All Communities | EasyBiodataMaker',
  description: 'Create Telugu marriage biodata free. Nakshatra, rashi, gothram, kula deivam fields included. Reddy, Kamma, Kapu, Velama, Niyogi Brahmin, Vaidiki Brahmin. Instant PDF.',
  keywords: ['telugu marriage biodata format','telugu biodata free online','andhra marriage biodata','telangana biodata format','reddy community biodata','kamma biodata format','kapu naidu biodata','telugu brahmin niyogi vaidiki biodata','nakshatra biodata telugu','gothram biodata andhra','hyderabad marriage biodata','telugu biodata pdf free'],
  alternates: { canonical: 'https://easybiodatamaker.com/telugu-biodata-format' },
  openGraph: { title: 'Telugu Marriage Biodata Free – Andhra & Telangana', description: 'Free Telugu biodata. Nakshatra, rashi, gothram, kula deivam. All communities.', url: 'https://easybiodatamaker.com/telugu-biodata-format' },
};

const aeoFaqs = [
  { question: 'What fields are specific to a Telugu marriage biodata?', answer: "Telugu families look for three fields most North Indian biodatas skip: nakshatra (birth star — like Rohini, Krittika), rashi (moon sign — Mesha, Vrishabha), and gothram (clan — Bharadwaja, Kashyapa). For Brahmin families, nakshatra and gothram are checked before anything else. For Reddy and Kamma families, gothram is the hard rule — same gothram is a no." },
  { question: 'What is kula deivam and do Telugu families need it in a biodata?', answer: "Kula deivam is the family or clan deity — every Telugu household has one and it has been worshipped for generations. Many Andhra and Telangana families check kula deivam compatibility before agreeing to a match. You can add it in EasyBiodataMaker's custom fields section. Common ones include various forms of Durga, Venkateswara, Yellamma, and village deities specific to your ancestral area." },
  { question: 'Niyogi vs Vaidiki — why does this distinction matter?', answer: "For Telugu Brahmin families, Niyogi and Vaidiki are completely separate communities — not just sub-categories. Niyogi Brahmins traditionally worked in secular administration and law; Vaidiki Brahmins traditionally served in priestly roles. They generally prefer same-community matches. Write 'Brahmin (Niyogi)' or 'Brahmin (Vaidiki)' on the biodata — never just 'Brahmin.'" },
  { question: 'Is gothram the same as caste in Telugu biodata?', answer: "No. Caste is your community — Reddy, Kamma, Brahmin. Gothram is a separate lineage traced to an ancient sage, like Bharadwaja or Vasishtha. Two people from the same community but different gothrams can marry. Two from the same gothram generally cannot, regardless of community. Both are separate fields." },
  { question: 'Which Telugu communities does this support?', answer: "Reddy, Kamma, Kapu (Naidu), Velama, Raju (Kshatriya), Brahmin Niyogi, Brahmin Vaidiki, Komati (Vaishya), Munnuru Kapu, Turpu Kapu, Balija, Mudaliar, and all other Andhra Pradesh and Telangana communities." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function TeluguBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-violet-50 to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌸</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Telugu Marriage Biodata
              <span className="block text-xl mt-2 text-violet-700 font-normal">Andhra &amp; Telangana · All Communities · Free</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our Purple Temple template is built for South Indian families — it covers nakshatra, rashi, and gothram fields that Telugu families check. Add kula deivam in custom fields. Free PDF in 5 minutes.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">🌸 Create Telugu Biodata — Free</Link>
            <p className="text-sm text-gray-400 mt-3">On preview page, pick &ldquo;Purple Temple&rdquo; template</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">What Telugu Families Check First</h2>
            <p>For Telugu Brahmin families, it starts with <strong>nakshatra compatibility</strong> — the ten porutham checks. For Reddy, Kamma, Velama families, gothram comes first. Same gothram is a hard rule across almost all Telugu communities.</p>
            <div className="bg-violet-50 border-l-4 border-violet-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">The Niyogi vs Vaidiki Distinction</h3>
              <p>These are separate communities, not just sub-groups. Niyogi Brahmins worked in administration and secular fields historically; Vaidiki Brahmins in priestly traditions. Both respect each other but prefer same-community matches. Write <em>Brahmin (Niyogi)</em> or <em>Brahmin (Vaidiki)</em> — &ldquo;Brahmin&rdquo; alone is too vague.</p>
            </div>
            <h2 className="font-display text-2xl font-bold text-maroon-900">Fields to Add via Custom Fields</h2>
            <p>EasyBiodataMaker lets you add any field. For Telugu biodatas, add: <strong>Nakshatra</strong> (e.g. Rohini, Krittika), <strong>Rashi</strong> (e.g. Vrishabha), and <strong>Kula Deivam</strong> (your family deity). These three are expected — their absence will be noticed.</p>
            <div className="flex flex-wrap gap-2">
              {['Reddy','Kamma','Kapu / Naidu','Velama','Raju (Kshatriya)','Brahmin (Niyogi)','Brahmin (Vaidiki)','Komati (Vaishya)','Munnuru Kapu','Turpu Kapu','Balija','Mudaliar'].map(c => (
                <span key={c} className="bg-violet-50 border border-violet-200 text-violet-800 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">🌸 Create Telugu Biodata — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Telugu Biodata — Questions Families Ask" ctaHref="/create" ctaText="Create Telugu Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
