import type { Metadata } from 'next';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inter-Caste Marriage Biodata – How to Write Caste No Bar 2024',
  description: 'If you are open to inter-caste or inter-religion marriage, your biodata must say so clearly. Here is how to write the caste no bar section and what to expect.',
  keywords: ['intercaste marriage biodata', 'caste no bar biodata', 'inter caste biodata india', 'inter religion marriage biodata', 'how to write caste no bar in biodata', 'open minded biodata format', 'progressive biodata india', 'love marriage biodata format'],
  alternates: { canonical: 'https://easybiodatamaker.com/intercaste-marriage-biodata' },
  openGraph: { title: 'Inter-Caste Marriage Biodata – How to Write Caste No Bar 2024', description: 'If you are open to inter-caste or inter-religion marriage, your biodata must say so clearly. Here is how to write the caste no bar section and what to expect.', url: 'https://easybiodatamaker.com/intercaste-marriage-biodata', type: 'article' },
};


const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Inter-Caste Marriage Biodata – How to Write Caste No Bar 2024`,
    description: `If you are open to inter-caste or inter-religion marriage, your biodata must say so clearly. Here is how to write the caste no bar section and what to expect.`,
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    author: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png' } },
    mainEntityOfPage: `https://easybiodatamaker.com/blog/intercaste-marriage-biodata`,
    image: 'https://easybiodatamaker.com/og-image.png',
  };

const aeoFaqs = [
  { question: 'How to write inter-caste in marriage biodata?', answer: 'Write \"Caste no bar\" clearly in the partner expectations section. For more detail: \"Open to all Hindu communities, caste no bar\" or \"Open to all communities and religions.\" This signals openness and dramatically increases the number of interested responses.' },
  { question: 'Does writing caste no bar reduce responses?', answer: 'No — writing \"caste no bar\" typically increases responses significantly. It opens your profile to thousands of additional families and signals progressive, open-minded thinking that many educated families appreciate.' },
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
              <span>/</span><span>Inter-Caste Marriage Biodata – Writing Caste No Bar</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-maroon-900 mb-4 leading-tight">
              🤝 Inter-Caste Marriage Biodata – Writing Caste No Bar
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm">How to Communicate Openness Respectfully</p>
          </div>
        </section>
        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="card p-6 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              Writing "Caste No Bar" in your biodata is one of the most impactful decisions you can make if you genuinely mean it. It opens your prospects to thousands of more families.

How to phrase it:
• Simple: "Caste no bar" (at the end of partner expectations)
• Full: "Open to all Hindu communities, caste no bar"
• Broad: "Open to all communities and religions"
• Specific: "Prefer same religion but caste no bar"

What NOT to do:
• Do not write "Caste no bar" but then reject non-same-caste proposals — it wastes everyone\'s time
• Do not add "but prefer own caste" — this contradicts the message
• Do not list specific castes you will not accept

If your family is traditional but you personally are open, have a frank conversation with them first before putting it in the biodata.
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
