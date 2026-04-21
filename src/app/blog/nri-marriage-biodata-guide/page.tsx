import type { Metadata } from 'next';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NRI Marriage Biodata Guide – Complete Guide for Indians Abroad 2024',
  description: 'Complete guide for NRIs creating marriage biodata from USA, UK, Canada, Australia, UAE. What to include, how to mention visa status, income in foreign currency, and more.',
  keywords: ['nri marriage biodata', 'overseas indian marriage biodata', 'nri biodata format', 'usa nri biodata', 'uk nri biodata', 'canada nri biodata', 'australia nri biodata', 'nri groom biodata', 'nri bride biodata', 'how to write nri biodata'],
  alternates: { canonical: 'https://easybiodatamaker.com/nri-marriage-biodata-guide' },
  openGraph: { title: 'NRI Marriage Biodata Guide – Complete Guide for Indians Abroad 2024', description: 'Complete guide for NRIs creating marriage biodata from USA, UK, Canada, Australia, UAE. What to include, how to mention visa status, income in foreign currency, and more.', url: 'https://easybiodatamaker.com/nri-marriage-biodata-guide', type: 'article' },
};


const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `NRI Marriage Biodata Guide – Complete Guide for Indians Abroad 2024`,
    description: `Complete guide for NRIs creating marriage biodata from USA, UK, Canada, Australia, UAE. What to include, how to mention visa status, income in foreign currency, and more.`,
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    author: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png' } },
    mainEntityOfPage: `https://easybiodatamaker.com/blog/nri-marriage-biodata-guide`,
    image: 'https://easybiodatamaker.com/og-image.png',
  };

const aeoFaqs = [
  { question: 'What extra information should NRI add to biodata?', answer: 'NRI biodata should add: country of residence, visa/PR/citizenship status, income in both currencies (USD/GBP + approx INR equivalent), openness to partner relocating abroad or returning to India, and frequency of India visits.' },
  { question: 'Which template is best for NRI marriage biodata?', answer: 'Emerald Modern (professional, clean) and Royal Navy Gold (prestigious look) are most popular for NRI biodatas. The Classic Saffron also works well for NRI families who prefer traditional presentation.' },
];

const aeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aeoFaqs.map((f: {question: string; answer: string}) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
              <Link href="/blog" className="hover:text-saffron-600">Blog</Link>
              <span>/</span><span>NRI Marriage Biodata – Complete Guide for Indians Abroad</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-maroon-900 mb-4 leading-tight">
              ✈️ NRI Marriage Biodata – Complete Guide for Indians Abroad
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm">USA · UK · Canada · Australia · UAE · Singapore</p>
          </div>
        </section>
        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="card p-6 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              NRI marriage biodata requires several extra fields beyond the standard format. Here is what to include:

Country of Residence: Always mention prominently — USA, UK, Canada, Australia, UAE, Singapore, etc.
Visa/PR/Citizenship Status: Mention PR (Permanent Resident), Citizen, H1B visa, Tier 2 visa, etc. Families need to know if their child can also settle there.
Income: Convert to INR for context. Example: "$120,000 per year (approx. ₹1 Crore)" — helps families who may not be familiar with foreign salaries.
Return Plans: Whether you plan to return to India, or prefer a partner willing to relocate abroad.
Indian Connections: Mention frequency of India visits, ties maintained with family, participation in Indian community abroad.
Native City: Even if living abroad for years, maintain the native city/state mention — families search by origin.
            </div>
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-6 text-white text-center">
              <h2 className="font-display text-xl font-bold mb-3">Create Your Biodata Free</h2>
              <p className="text-amber-200/80 text-sm mb-4">10 templates · 7 languages · Instant PDF</p>
              <Link href="/create" className="btn-primary text-sm">Create Free Biodata →</Link>
            </div>
          </div>
        </article>
      </main>
      <AEOBlock faqs={aeoFaqs} title="People Also Ask" ctaHref="/create" ctaText="Create Your Free Biodata" />
      <Footer />
    </div>
  );
}
