import { buildMetadata, getSitePage } from '@/lib/seo';
import { EditorialByline } from '@/components/seo/EditorialByline';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

const page = getSitePage('/blog/nri-marriage-biodata-guide');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });


const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `NRI Marriage Biodata Guide – Complete Guide for Indians Abroad`,
    description: `Complete guide for NRIs creating marriage biodata from USA, UK, Canada, Australia, UAE. What to include, how to mention visa status, income in foreign currency, and more.`,
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    author: { '@type': 'Person', name: 'Karan Shah', url: 'https://easybiodatamaker.com/about' },
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/icon-192.png' } },
    mainEntityOfPage: `https://easybiodatamaker.com/blog/nri-marriage-biodata-guide`,
    image: 'https://easybiodatamaker.com/og-image.png',
  };

const aeoFaqs = [
  { question: 'What extra information should NRI add to biodata?', answer: 'NRI biodata should add: country of residence, visa/PR/citizenship status, income in both currencies (USD/GBP + approx INR equivalent), openness to partner relocating abroad or returning to India, and frequency of India visits.' },
  { question: 'Which template is best for NRI marriage biodata?', answer: 'Emerald Palace and Sapphire Silver offer clean options for NRI biodatas, while Midnight Gold suits families who prefer a more traditional presentation.' },
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
        <div className="max-w-3xl mx-auto px-4"><EditorialByline lastUpdated="2024-12-28" /></div>
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
        <div className="max-w-3xl mx-auto px-4"><EditorialByline lastUpdated="2024-12-28" /></div>

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
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <h2 className="font-display text-lg font-bold text-maroon-900">Country-specific NRI formats</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">For a more focused starting point, use the USA format or the combined UK and Canada format.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                <Link href="/indian-marriage-biodata-maker-usa" className="text-saffron-700 hover:underline">USA NRI biodata format →</Link>
                <Link href="/marriage-biodata-format-uk-canada" className="text-saffron-700 hover:underline">UK & Canada biodata format →</Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-6 text-white text-center">
              <h2 className="font-display text-xl font-bold mb-3">Create Your Biodata Free</h2>
              <p className="text-amber-200/80 text-sm mb-4">premium templates · 9 Indian languages · Instant PDF</p>
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
