import type { Metadata } from 'next';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '15 Marriage Biodata Mistakes to Avoid in 2024 | EasyBiodataMaker Blog',
  description: 'These 15 common marriage biodata mistakes silently kill your matrimonial prospects. From exaggerating qualifications to leaving manglik blank — learn what not to do and how to fix it.',
  keywords: ['marriage biodata mistakes to avoid','common biodata mistakes india','what not to write in biodata','biodata errors india','biodata tips dos and donts','manglik biodata mistake','biodata photo mistake','biodata income mistake','shaadi biodata galtiyan','vivah biodata mistakes'],
  alternates: { canonical: 'https://easybiodatamaker.com/blog/biodata-mistakes-to-avoid' },
  openGraph: { title: '15 Marriage Biodata Mistakes That Cost You Good Matches', description: 'Common biodata mistakes that hurt your matrimonial prospects and how to fix them.', url: 'https://easybiodatamaker.com/blog/biodata-mistakes-to-avoid', type: 'article' },
};

const mistakes = [
  { n: 1, bad: 'Exaggerating Height or Age', good: 'Always be accurate — 1-2 inch lies are discovered at the first meeting and destroy trust instantly.' },
  { n: 2, bad: 'Writing Exact Income Instead of a Range', good: 'Use ranges like "₹12–18 LPA" instead of exact figures. More professional, less awkward.' },
  { n: 3, bad: 'Leaving Manglik Status Blank', good: 'Write the accurate status or "Not Known" — never leave it blank, as it creates suspicion.' },
  { n: 4, bad: 'Using a Stiff Passport Photo', good: 'Use a natural, smiling, well-dressed photo with good lighting — not an official background photo.' },
  { n: 5, bad: 'Writing Only "Brahmin" Without Sub-Caste', good: 'Specify the exact community: Konkanastha, Iyer, Iyengar, Nagar Brahmin, etc.' },
  { n: 6, bad: 'Partner Expectations That Are Too Long', good: 'Keep expectations to 2-4 sentences. Focus on values, not a checklist of specifications.' },
  { n: 7, bad: 'Grammar & Spelling Errors', good: 'Have a family member proofread. Run through Google Docs spell-check at minimum.' },
  { n: 8, bad: 'Outdated Information', good: 'Update your biodata every 6 months — job changes, city changes, income changes matter.' },
  { n: 9, bad: 'Only One Phone Number', good: 'Include your number AND a parent or sibling\'s number as alternate contact.' },
  { n: 10, bad: 'Not Mentioning NRI Status', good: 'If settled abroad, mention it prominently — many families specifically seek NRI matches.' },
  { n: 11, bad: 'Sharing as Word Document', good: 'Always share as PDF — Word formatting breaks on different computers and looks unprofessional.' },
  { n: 12, bad: 'Leaving Gotra Blank', good: 'For Hindu families, gotra is critical. Ask your parents if you don\'t know — don\'t leave it blank.' },
  { n: 13, bad: 'Not Saying "Caste No Bar"', good: 'If genuinely open to all castes, write it clearly — otherwise you only receive same-caste proposals.' },
  { n: 14, bad: 'Generic Hobbies (Just "Reading, Cooking")', good: 'Be specific: "Carnatic classical music, Sahyadri hiking, South Indian cooking" — makes you memorable.' },
  { n: 15, bad: 'No Time of Birth for Kundali', good: 'For communities where kundali matching matters, time of birth is essential. Include even an approximate time.' },
];


const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `15 Marriage Biodata Mistakes to Avoid in 2024 | EasyBiodataMaker Blog`,
    description: `These 15 common marriage biodata mistakes silently kill your matrimonial prospects. From exaggerating qualifications to leaving manglik blank — learn what not to do and how to fix it.`,
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    author: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png' } },
    mainEntityOfPage: `https://easybiodatamaker.com/blog/biodata-mistakes-to-avoid`,
    image: 'https://easybiodatamaker.com/og-image.png',
  };

const aeoFaqs = [
  { question: 'What are the biggest mistakes in marriage biodata?', answer: 'The biggest biodata mistakes: 1) Exaggerating height or age, 2) Writing exact income instead of range, 3) Leaving manglik blank, 4) Using stiff passport photo, 5) Not specifying sub-caste, 6) Overly long partner expectations.' },
  { question: 'Should I mention income in marriage biodata?', answer: 'Yes, but use ranges not exact figures. Example: \"₹10-15 LPA\" instead of \"₹13,42,500\". Exact income figures seem transactional and create awkward negotiations. Ranges are professional and still informative.' },
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
export default function MistakesPage() {
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
              <span>/</span><span>Biodata Mistakes</span>
            </div>
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-4">Mistakes</span>
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-4 leading-tight">
              15 Marriage Biodata Mistakes That Cost You Good Matches
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Your biodata is your first impression with hundreds of families. These 15 common mistakes
              are silently hurting your matrimonial prospects — and most people have no idea they are making them.
            </p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {mistakes.map(({ n, bad, good }) => (
              <div key={n} className="card p-5">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {n.toString().padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-maroon-800 text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-500">✗</span> {bad}
                    </div>
                    <div className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                      <span><strong>Fix:</strong> {good}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-6 text-white text-center mt-8">
              <h2 className="font-display text-xl font-bold mb-3">Create a Perfect Biodata — Avoid All 15 Mistakes</h2>
              <p className="text-amber-200/80 text-sm mb-4">EasyBiodataMaker guides you through every field. 10 templates · 7 languages · Free</p>
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
