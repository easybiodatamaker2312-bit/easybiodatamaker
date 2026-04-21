import type { Metadata } from 'next';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Second Marriage / Remarriage Biodata Guide India 2024 | EasyBiodataMaker',
  description: 'Creating a biodata for second marriage or remarriage requires sensitivity. How to mention divorce, widowhood, children honestly yet compellingly. Complete guide for India.',
  keywords: ['second marriage biodata', 'remarriage biodata india', 'divorce biodata format', 'widow widower biodata', 'biodata for second marriage india', 'how to write divorce in biodata', 'second shaadi biodata', 'how to mention children in biodata', 'remarriage biodata tips'],
  alternates: { canonical: 'https://easybiodatamaker.com/second-marriage-biodata-guide' },
  openGraph: { title: 'Second Marriage / Remarriage Biodata Guide India 2024 | EasyBiodataMaker', description: 'Creating a biodata for second marriage or remarriage requires sensitivity. How to mention divorce, widowhood, children honestly yet compellingly. Complete guide for India.', url: 'https://easybiodatamaker.com/second-marriage-biodata-guide', type: 'article' },
};


const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Second Marriage / Remarriage Biodata Guide India 2024 | EasyBiodataMaker`,
    description: `Creating a biodata for second marriage or remarriage requires sensitivity. How to mention divorce, widowhood, children honestly yet compellingly. Complete guide for India.`,
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    author: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png' } },
    mainEntityOfPage: `https://easybiodatamaker.com/blog/second-marriage-biodata-guide`,
    image: 'https://easybiodatamaker.com/og-image.png',
  };

const aeoFaqs = [
  { question: 'How to mention divorce in marriage biodata?', answer: 'Write \"Divorced\" clearly in the personal details section. Many modern families are completely open to divorced candidates. Hiding it is far worse than disclosing — it will be discovered and destroys trust.' },
  { question: 'Should children be mentioned in second marriage biodata?', answer: 'Yes, always. Mention the number of children and their ages. Example: \"1 daughter (age 7, living with maternal parents).\" Hiding children is never advisable and will cause serious problems when discovered.' },
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
              <span>/</span><span>Second Marriage Biodata Guide</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-maroon-900 mb-4 leading-tight">
              💍 Second Marriage Biodata Guide
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm">Honest, Sensitive, and Compelling</p>
          </div>
        </section>
        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="card p-6 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              A biodata for a second marriage requires extra honesty and sensitivity. Here is how to handle each situation:

If Divorced:
Write "Divorced" clearly in the personal details section — do not try to hide it. Families will discover it anyway. Many families are now completely open to divorced candidates.

If Widowed:
Write "Widowed" with the year if appropriate. This is viewed very sympathetically by most families.

If You Have Children:
Mention the number of children clearly. Example: "1 child (son, 8 years, living with maternal grandparents)". Hiding this is never advisable.

Partner Expectations for Remarriage:
"Looking for an understanding, mature partner open to a second chance at happiness. Divorced/widowed/single candidates all welcome. The most important quality is genuine kindness and emotional maturity."

Templates to Use:
The Classic Saffron or Emerald Modern templates work best — they look professional and dignified without being overly traditional or festive.
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
