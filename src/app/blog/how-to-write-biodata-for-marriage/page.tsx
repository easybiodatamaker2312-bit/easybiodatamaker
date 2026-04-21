import type { Metadata } from 'next';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Write Biodata for Marriage – Complete 2024 Guide | EasyBiodataMaker',
  description:
    'Learn exactly how to write a marriage biodata in India. clear, numbered guide with real examples for all sections — personal details, family, education, career, expectations. Free PDF download.',
  keywords: [
    'how to write biodata for marriage',
    'how to write marriage biodata in english',
    'biodata writing tips for marriage india',
    'how to fill marriage biodata form',
    'what to write in marriage biodata',
    'marriage biodata writing guide 2024',
    'how to write personal details in biodata',
    'how to write family details in biodata',
    'how to write education in biodata for marriage',
    'how to write career in marriage biodata',
    'how to write hobbies in biodata',
    'how to describe yourself in marriage biodata',
    'biodata writing mistakes india',
    'shaadi biodata kaise likhe',
    'vivah biodata likhne ka tarika',
    'marriage biodata with example',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/blog/how-to-write-biodata-for-marriage' },
  openGraph: {
    title: 'How to Write Biodata for Marriage – Complete Guide with Examples',
    description: 'clear, numbered guide to writing a perfect Indian marriage biodata with real examples for every section.',
    url: 'https://easybiodatamaker.com/blog/how-to-write-biodata-for-marriage',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Write Biodata for Marriage – The Complete 2024 Guide',
  description: 'clear, numbered guide to writing a perfect Indian marriage biodata with real examples for every section.',
  datePublished: '2024-12-28',
  dateModified: '2024-12-28',
  author: { '@type': 'Organization', name: 'EasyBiodataMaker' },
  publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
  mainEntityOfPage: 'https://easybiodatamaker.com/blog/how-to-write-biodata-for-marriage',
};

const sections = [
  {
    title: 'Section 1: Auspicious Heading',
    content: `Always begin your marriage biodata with an auspicious religious invocation. This sets the right respectful tone that Indian families expect.

Examples by religion:
• Hindu: ॥ श्री गणेशाय नमः ॥ or ॐ
• Muslim: بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (Bismillah)
• Sikh: ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ
• Christian: "By the Grace of God"
• Jain: ॐ नमः सिद्धाय

Then add a simple title: "Biodata for Marriage" or your community-specific term (Lagna Biodata, Vivah Biodata, Nikah Biodata).`,
  },
  {
    title: 'Section 2: Personal Details',
    content: `This is the most important section. Include:

Full Name: Write your complete legal name as it appears on official documents.
Date of Birth: Day, Month, Year format. Also write your current age. Example: 15 March 1995 (Age: 29 Years)
Time of Birth: Used for Kundali (horoscope) matching. Include even approximate time.
Place of Birth: City and state. Example: Rajkot, Gujarat
Height: In feet and inches. Example: 5'6"
Weight: Optional but commonly included. In kilograms.
Complexion: Use standard terms — Very Fair, Fair, Wheatish, Wheatish Brown, Dark
Blood Group: Important for medical compatibility awareness
Religion: Full religion name — Hindu, Muslim, Sikh, Christian, Jain, Buddhist
Caste & Sub-Caste: Be specific. "Brahmin" alone is insufficient — specify Konkanastha, Deshastha, etc.
Gotra: Critical for Hindu families — prevents same-gotra marriage
Manglik Status: Yes/No/Partial (Anshik)/Not Known — never leave this blank for Hindu biodatas
Hobbies: List 3-5 genuine interests. Example: Reading, Classical music, Cooking, Photography
Languages: All languages you speak fluently. Example: Gujarati, Hindi, English`,
  },
  {
    title: 'Section 3: Family Details',
    content: `Family background is often given more weight than personal details by traditional families.

Father's Name & Occupation: Full name with honorific if applicable. "Shri Ramesh Kumar Sharma – Retired IAS Officer"
Mother's Name & Occupation: Full name. "Smt. Sunita Sharma – Homemaker" or mention her profession
Brothers & Sisters: Number total and number married. "2 Brothers (1 Married), 1 Sister (Married)"
Family Type: Nuclear Family / Joint Family
Family Status: Middle Class / Upper Middle Class / Affluent
Native Place: Village, town, or city of ancestral origin. Very important for Gujarati, Marathi families.
Maternal Gotra: Mother's father's gotra — used to check maternal compatibility in some communities`,
  },
  {
    title: 'Section 4: Education & Career',
    content: `This section demonstrates your capability and social standing.

Highest Qualification: Be specific — not just "Graduate" but "B.Tech. (Computer Science), IIT Bombay, 2017"
Additional Qualifications: Certifications, CA, UPSC qualifications, etc.
Occupation: Your current role. Be specific: "Senior Software Engineer" not just "Software Engineer"
Employed In: Government / Private / Business / Self-Employed
Organization: Company name. Government candidates should mention department/rank
Designation: Exact job title
Annual Income: Use ranges, not exact figures. Example: ₹12–18 LPA (avoids awkward negotiation)
Work Location: Current city of work, especially if different from home city`,
  },
  {
    title: 'Section 5: Contact Details',
    content: `Make it easy for interested families to reach out.

Address: For privacy, including only city + state is perfectly acceptable
Mobile: Always include at least 2 contact numbers (yours + parent's)
Email: Optional but adds credibility for modern families
WhatsApp: Mention if same as mobile

Privacy tip: Many families omit the full postal address from the biodata and share it only after initial contact.`,
  },
  {
    title: 'Section 6: Partner Expectations',
    content: `This is the most personal section. Keep it honest, positive, and realistic.

Good example: "Looking for a well-educated, family-oriented life partner who is caring, understanding, and adaptable. Should be respectful of both families. Preference for candidates from Gujarat or Maharashtra, but open to all. Caste no bar."

Bad example (too restrictive): "Must be from specific sub-caste, height exactly 5'4", earning minimum 20 LPA"

Tips:
• Keep it 2-4 sentences
• Focus on values and nature, not physical specifics
• If open to inter-caste, say "Caste no bar" clearly
• Mention location preferences if any
• Avoid list-style requirements — it reads as too demanding`,
  },
];

const tips = [
  'Keep the biodata to one A4 page — families prefer concise profiles',
  'Use formal language — avoid casual words, SMS language or slang',
  'Be accurate — exaggeration will be discovered during meetings',
  'Update every 6 months if still searching',
  'Use a professional-looking template — first impressions matter',
  'Have a family member proofread before sharing',
  'Use a recent, smiling, well-dressed photo',
  'Save as PDF — it looks the same on all devices unlike Word',
];


const aeoFaqs = [
  { question: 'What are the 6 sections of a marriage biodata?', answer: '1) Auspicious heading (religious invocation), 2) Personal details (name, DOB, height, religion, caste, gotra), 3) Family details (parents, siblings), 4) Education & career, 5) Contact details, 6) Partner expectations.' },
  { question: 'How long should each section of a marriage biodata be?', answer: 'Personal details: 8-12 fields. Family details: 6-8 fields. Education & career: 5-7 fields. Contact: 3-4 fields. Partner expectations: 2-4 sentences. Total: 1 A4 page maximum.' },
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
export default function HowToWriteBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4 text-xs text-gray-400">
              <Link href="/blog" className="hover:text-saffron-600 transition-colors">Blog</Link>
              <span>/</span>
              <span>How to Write Biodata</span>
            </div>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">Guide</span>
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-4 leading-tight">
              How to Write Biodata for Marriage – The Complete 2024 Guide
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              A marriage biodata is your first impression with a prospective family. This guide covers
              every section — what to write, how to phrase it, and real examples for all communities.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock size={12} /> 12 min read</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> December 28, 2024</span>
              <span>By EasyBiodataMaker</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto">

            {/* Quick nav */}
            <div className="card p-4 mb-8 bg-amber-50/60">
              <h2 className="font-bold text-maroon-800 text-sm mb-3">Quick Navigation</h2>
              <ol className="space-y-1 text-xs text-saffron-600">
                {sections.map((s, i) => (
                  <li key={i}><a href={`#section-${i}`} className="hover:underline">{s.title}</a></li>
                ))}
                <li><a href="#tips" className="hover:underline">Expert Writing Tips</a></li>
              </ol>
            </div>

            {/* Sections */}
            {sections.map((s, i) => (
              <div key={i} id={`section-${i}`} className="mb-10">
                <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-saffron-400 to-maroon-700 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {s.title.replace(/^Section \d+: /, '')}
                </h2>
                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line bg-white rounded-xl p-5 border border-amber-100">
                  {s.content}
                </div>
              </div>
            ))}

            {/* Tips */}
            <div id="tips" className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
              <h2 className="font-display text-xl font-bold text-green-900 mb-4">✅ 8 Expert Tips for the Perfect Biodata</h2>
              <ul className="space-y-2">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-green-800">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related articles */}
            <div className="card p-5 mb-8">
              <h3 className="font-bold text-maroon-800 mb-4 text-sm">Related Articles</h3>
              <div className="space-y-2">
                {[
                  ['/blog/what-to-write-in-partner-expectations', 'What to Write in Partner Expectations – 20 Real Examples'],
                  ['/blog/biodata-mistakes-to-avoid', '15 Biodata Mistakes That Cost You Good Matches'],
                  ['/blog/marriage-biodata-format-india', 'Marriage Biodata Format India 2024 – Complete Guide'],
                ].map(([href, title]) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-saffron-600 hover:text-saffron-700">
                    <ArrowRight size={14} /> {title}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-8 text-white text-center">
              <h2 className="font-display text-2xl font-bold mb-3">Create Your Biodata Now</h2>
              <p className="text-amber-200/80 text-sm mb-5">Use EasyBiodataMaker — 10 free templates, 7 languages, photo upload. No login.</p>
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
