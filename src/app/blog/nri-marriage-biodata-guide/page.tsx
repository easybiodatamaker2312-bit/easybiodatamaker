import { buildMetadata, getSitePage } from '@/lib/seo';
import { EditorialByline } from '@/components/seo/EditorialByline';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { AuthorBox } from '@/components/seo/AuthorBox';

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

        <AuthorBox reviewedOn="2026-10-11" />
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

            
            <section className="mt-9 rounded-2xl border border-amber-100 bg-white p-6">
              <h2 className="font-display text-xl font-bold text-maroon-900">A sample NRI profile that separates facts from plans</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600"><strong>Fictional example:</strong> “Currently based in Toronto, Canada. Works as a data analyst. Permanent residency application: in progress. Open to discussing where to live after marriage based on both partners’ work and family needs.” This wording separates current location, work and immigration status instead of implying that a particular status is already granted. Use the exact status that applies; do not copy the example if it does not fit.</p>
              <p className="mt-3 text-sm leading-7 text-gray-600">For an NRI profile, a country and city often provide enough context at the first stage. Add citizenship or residency only if the candidate is comfortable sharing it and can describe it accurately. Avoid passport numbers, visa identifiers, immigration documents, employer access details and a full residential address. Those details are not needed for an introductory biodata.</p>
              <h3 className="mt-6 font-semibold text-maroon-900">What to discuss beyond the country name</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                <li>Whether the candidate expects to remain abroad, return to India or is genuinely undecided.</li>
                <li>Whether a move would depend on employment, immigration rules, family responsibilities or both partners’ preferences.</li>
                <li>How the couple expects to manage visits to parents, holidays, time zones and long-distance introductions.</li>
                <li>Whether education, professional licensing or a career change would affect relocation plans.</li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-gray-600">These are conversation topics, not promises. Immigration decisions depend on individual circumstances and official processes; a biodata should not be treated as legal advice or a guarantee that a partner can migrate.</p>
              <h3 className="mt-6 font-semibold text-maroon-900">What not to write</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">Avoid “settled abroad” if the situation is temporary or uncertain, and do not imply citizenship or permanent residency when an application is pending. Do not quote income without saying whether it is annual and which currency it uses. Never attach financial or immigration documents to a biodata that may be forwarded widely.</p>
              <h3 className="mt-6 font-semibold text-maroon-900">FAQ</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600"><strong>Should visa status appear in the biodata?</strong> A brief, accurate description may help if it affects plans, but detailed numbers and documents should stay private.</p>
              <p className="mt-3 text-sm leading-7 text-gray-600"><strong>Should I state relocation preference?</strong> Yes, if you have a genuine preference; if you are undecided, say that you are open to discussing it together.</p>
            </section>

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
