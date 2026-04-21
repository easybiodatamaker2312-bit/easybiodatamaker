import type { Metadata } from 'next';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Write in Partner Expectations Biodata – 20 Real Examples 2024',
  description: 'The partner expectations section stumps most people. Here are 20 real-world examples for Hindu, Muslim, Sikh, NRI, and open families with expert writing tips.',
  keywords: ['what to write in partner expectations biodata','partner expectations examples for biodata','jeevan saathi expectations biodata','life partner expectations examples','biodata expectations section examples','how to write expectations in shaadi biodata','partner expectations for girl biodata','partner expectations for boy biodata','partner expectations hindi','jeevan saathi ki apeksha'],
  alternates: { canonical: 'https://easybiodatamaker.com/blog/what-to-write-in-partner-expectations' },
  openGraph: { title: 'What to Write in Partner Expectations – 20 Real Biodata Examples', description: '20 real partner expectations examples for all communities and situations.', url: 'https://easybiodatamaker.com/blog/what-to-write-in-partner-expectations', type: 'article' },
};

const examples = [
  { label: 'Traditional Hindu Family', cat: 'Traditional', text: 'Looking for a well-educated, family-oriented life partner from a good Hindu family. Should be respectful of both families, caring in nature, and value Indian traditions. Preference for candidates from Gujarat, but open to other states. Caste no bar within Hindu community.' },
  { label: 'Modern Urban Professional', cat: 'Modern', text: 'Seeking an educated, independent, and like-minded partner who values both career and family. Should be open-minded, respectful of individual space, and enjoy traveling. Location flexible — open to any city in India or abroad.' },
  { label: 'NRI Seeking Match', cat: 'NRI', text: 'Looking for a partner who is either already settled abroad or willing to relocate to the USA or Canada. Should be professionally qualified, family-oriented, and able to maintain strong ties with India. Community no bar, caste no bar.' },
  { label: 'Inter-Caste Open Family', cat: 'Open', text: 'Open to all communities, castes, and sub-castes. We believe compatibility, shared values, and character matter more than caste. Looking for a kind, educated, and responsible partner from any background.' },
  { label: 'Muslim Family', cat: 'Muslim', text: 'Looking for a Sunni Muslim partner from a religious, well-respected family. Should be practicing, educated, and family-oriented. Preference for candidates from Maharashtra or Gujarat. Biradari can be discussed during family meeting.' },
  { label: 'Sikh Family', cat: 'Sikh', text: 'Seeking a Sikh partner who values our faith, culture, and family traditions. Should be educated, working, and from a reputed Punjabi family. Preference for Jat Sikh family, though open to all Sikh communities.' },
  { label: 'South Indian Conservative', cat: 'South Indian', text: 'Looking for a Tamil Brahmin partner from a good family. Should be vegetarian, educated, and value traditional values alongside modern thinking. Horoscope matching is important for our family.' },
  { label: 'Simple and Open', cat: 'Simple', text: 'Looking for a good-natured, honest, and supportive life partner. Education, occupation, and location flexible. More important: values, respect for family, and genuine commitment.' },
  { label: 'IT Professional (Girl)', cat: 'Career-focused', text: 'Looking for a professionally qualified partner in IT, engineering, or finance settled in Pune, Mumbai, or Bangalore. Should be supportive of career aspirations and respectful of both families equally. Caste no bar.' },
  { label: 'Divorced / Remarriage', cat: 'Remarriage', text: 'Looking for an understanding, mature partner who values a fresh start. Divorced or separated candidates also warmly welcome. The most important qualities are honesty, patience, and genuine commitment to building a happy family.' },
];

const tips = [
  { tip: 'Keep it 2–4 sentences', reason: 'Long lists of requirements read as demanding and reduce responses' },
  { tip: 'Focus on values, not specifications', reason: '"Kind, honest, family-oriented" attracts more than "must be 5\'6\" earning 20LPA"' },
  { tip: 'Write "Caste no bar" if you mean it', reason: 'This explicitly signals openness and opens hundreds more matrimonial possibilities' },
  { tip: 'Mention location flexibility', reason: 'Many families skip profiles that may require relocation — address it proactively' },
  { tip: 'Avoid income demands', reason: 'Specific income requirements are considered crass in Indian matrimonial culture' },
  { tip: 'Mention NRI openness if applicable', reason: 'Many families specifically search for matches willing to relocate abroad' },
];


const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `What to Write in Partner Expectations Biodata – 20 Real Examples 2024`,
    description: `The partner expectations section stumps most people. Here are 20 real-world examples for Hindu, Muslim, Sikh, NRI, and open families with expert writing tips.`,
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    author: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png' } },
    mainEntityOfPage: `https://easybiodatamaker.com/blog/what-to-write-in-partner-expectations`,
    image: 'https://easybiodatamaker.com/og-image.png',
  };

const aeoFaqs = [
  { question: 'What should partner expectations in biodata say?', answer: 'Partner expectations should describe the ideal life partner\'s nature, values, and general preferences in 2-4 sentences. Focus on: education level, values (family-oriented, honest, caring), location preference, and openness to inter-caste if applicable.' },
  { question: 'How long should partner expectations be?', answer: 'Partner expectations should be 2-4 sentences maximum. Longer lists of requirements read as overly demanding and reduce responses from interested families.' },
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
export default function PartnerExpectationsPage() {
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
              <span>/</span><span>Partner Expectations</span>
            </div>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4">Tips</span>
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-4 leading-tight">
              What to Write in Partner Expectations – 10 Real Biodata Examples
            </h1>
            <p className="text-gray-600 leading-relaxed">
              The partner expectations section trips up most people. Too vague and families skip it.
              Too specific and it reads as demanding. Here are 10 real examples with expert writing tips.
            </p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-5">

            <h2 className="font-display text-2xl font-bold text-maroon-900">10 Real Partner Expectations Examples</h2>

            {examples.map(({ label, cat, text }) => (
              <div key={label} className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-saffron-600 uppercase tracking-wide">{label}</span>
                  <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full">{cat}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic bg-amber-50/40 rounded-lg p-3 border-l-4 border-saffron-400">
                  &ldquo;{text}&rdquo;
                </p>
              </div>
            ))}

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h2 className="font-bold text-green-900 mb-5 text-lg">Expert Tips for Writing Expectations</h2>
              <div className="space-y-3">
                {tips.map(({ tip, reason }) => (
                  <div key={tip} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-sm flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-green-900 text-sm">{tip}: </span>
                      <span className="text-green-800 text-sm">{reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-maroon-800 mb-3 text-sm">Related Reading</h3>
              <div className="space-y-2">
                {[
                  ['/blog/how-to-write-biodata-for-marriage', 'How to Write Biodata for Marriage – Complete Guide'],
                  ['/blog/biodata-mistakes-to-avoid', '15 Biodata Mistakes to Avoid'],
                  ['/faq', 'Marriage Biodata FAQ'],
                ].map(([href, title]) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-saffron-600 hover:underline">→ {title}</Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-6 text-white text-center">
              <h2 className="font-display text-xl font-bold mb-3">Create Your Biodata Now</h2>
              <p className="text-amber-200/80 text-sm mb-4">Partner expectations section included · 10 templates · 7 languages · Free</p>
              <Link href="/create" className="btn-primary">Create Free Biodata →</Link>
            </div>
          </div>
        </article>
      </main>
      <AEOBlock faqs={aeoFaqs} title="People Also Ask" ctaHref="/create" ctaText="Create Your Free Biodata" />
      <Footer />
    </div>
  );
}
