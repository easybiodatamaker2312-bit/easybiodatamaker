import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Make Biodata for Marriage – Step by Step Guide 2024 | EasyBiodataMaker',
  description:
    'Complete guide on how to make biodata for marriage in India. Learn what to include, the correct format, tips for Hindu & all community biodatas. Create yours free in 5 minutes.',
  alternates: { canonical: 'https://easybiodatamaker.com/how-to-make-biodata-for-marriage' },
  keywords: [
    'how to make biodata for marriage',
    'how to create marriage biodata',
    'biodata kaise banaye shaadi ke liye',
    'marriage biodata format step by step',
    'what to write in marriage biodata',
    'how to write biodata for marriage in english',
    'marriage biodata tips india',
    'shaadi ke liye biodata kaise likhe',
    'biodata for marriage format pdf',
    'complete guide marriage biodata',
    'marriage biodata for girl format',
    'marriage biodata for boy format',
    'best marriage biodata tips',
  ],
  openGraph: {
    title: 'How to Make Biodata for Marriage – Complete Guide',
    description: 'Step-by-step guide to creating the perfect Indian marriage biodata. Free tool included.',
    url: 'https://easybiodatamaker.com/how-to-make-biodata-for-marriage',
  },
};

const steps = [
  {
    num: '01',
    title: 'Start with a Sacred Heading',
    desc: 'Begin your biodata with a religious invocation like "॥ श्री गणेशाय नमः ॥" (for Hindus) or "Bismillah ir-Rahman ir-Rahim" (for Muslims). This sets a respectful, traditional tone.',
  },
  {
    num: '02',
    title: 'Add Personal Details',
    desc: 'Include full name, date of birth, time of birth (for kundali), place of birth, height, weight, complexion, blood group, religion, caste, gotra, and manglik status. These are the most-checked fields by families.',
  },
  {
    num: '03',
    title: 'Include Family Background',
    desc: 'Add father's and mother's names with occupations, number of brothers and sisters, family type (nuclear/joint), family status, and native place. Families look for cultural compatibility here.',
  },
  {
    num: '04',
    title: 'Highlight Education & Career',
    desc: 'Mention your highest qualification, college, current job title, company name, and annual income range. These show your social and economic standing to prospective families.',
  },
  {
    num: '05',
    title: 'Provide Contact Information',
    desc: 'Include a verified mobile number, city, state, and optionally an email. Make it easy for interested families to reach out. Always include at least one contact number.',
  },
  {
    num: '06',
    title: 'Write Partner Expectations',
    desc: 'Describe the qualities you seek in a life partner — education level, location preference, nature, and values. Keep it positive, realistic, and open-minded.',
  },
];

const tips = [
  'Keep your biodata to one A4 page — families prefer concise information',
  'Use a recent, formal photograph if the template supports it',
  'Be honest — exaggerating height, income or qualifications causes problems later',
  'Include both maternal and paternal gotra to avoid rashi/gotra conflicts',
  'Mention if you are open to inter-caste marriage if applicable',
  'Write in formal English or Hindi — avoid slang or casual language',
  'Have a family elder review the biodata before sharing',
  'Keep the PDF file size under 2MB for easy sharing on WhatsApp',
  'Include your city and state clearly — many families prefer local matches',
  'Update your biodata every 6 months if still searching',
];

const mistakes = [
  'Leaving the manglik status blank without explanation',
  'Writing salary/income in exact figures — use ranges (e.g., ₹10–15 LPA)',
  'Using passport-size photos with official backgrounds — use a natural smile photo',
  'Overly restrictive partner expectations that limit responses',
  'Not mentioning caste or gotra when it is relevant to your community',
  'Providing only one phone number — always add an alternate',
  'Including your full home address — city and state is sufficient for privacy',
  'Poor grammar or spelling errors that create a bad impression',
];

export default function HowToMakeBiodataPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Make Biodata for Marriage',
    description: 'A complete step-by-step guide to creating a perfect Indian marriage biodata',
    totalTime: 'PT10M',
    step: steps.map(({ title, desc }) => ({
      '@type': 'HowToStep',
      name: title,
      text: desc,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto">
            <span className="section-tag">Complete Guide</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              How to Make Biodata for Marriage
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A complete, step-by-step guide to creating the perfect Indian marriage biodata — what
              to include, how to format it, common mistakes to avoid, and how to download a free PDF.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/create" className="btn-primary">
                Create Free Biodata Now <ArrowRight size={16} />
              </Link>
              <span className="flex items-center gap-2 text-sm text-gray-400 bg-white px-4 py-2 rounded-xl border border-amber-100">
                📖 10 min read
              </span>
            </div>
          </div>
        </section>

        <article className="py-14 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div className="prose-custom mb-12">
              <p className="text-gray-600 leading-relaxed text-base mb-4">
                In India, the <strong>marriage biodata</strong> (sometimes called "marriage profile"
                or "shaadi biodata") is the first impression you make on a prospective family. A
                well-crafted biodata can open doors to the right match, while a poorly formatted one
                gets overlooked.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Whether you're creating a{' '}
                <strong>marriage biodata for a girl or a boy</strong>, for a Hindu family, Muslim
                family, or any other community, this guide covers everything you need to know.
              </p>
            </div>

            {/* Step by Step */}
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-8">
              6 Steps to Create the Perfect Marriage Biodata
            </h2>
            <div className="space-y-6 mb-14">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5 card p-6">
                  <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-saffron-400 to-maroon-700 text-white font-display font-bold text-xl flex items-center justify-center shadow-md">
                    {num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-maroon-800 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-12">
              <h2 className="font-display text-2xl font-bold text-green-900 mb-5">
                ✅ 10 Pro Tips for an Outstanding Marriage Biodata
              </h2>
              <ul className="space-y-2">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-green-800">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mistakes */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12">
              <h2 className="font-display text-2xl font-bold text-red-900 mb-5">
                ❌ Common Mistakes to Avoid
              </h2>
              <ul className="space-y-2">
                {mistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-red-800">
                    <span className="text-red-400 flex-shrink-0 font-bold">✗</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>

            {/* Format explained */}
            <h2 className="font-display text-2xl font-bold text-maroon-900 mb-5">
              What is the Standard Marriage Biodata Format in India?
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-3 mb-10">
              <p>
                The standard <strong>marriage biodata format in India</strong> follows a clear
                structure: a religious or auspicious opening, followed by personal details, family
                information, educational/career information, contact details, and partner expectations.
              </p>
              <p>
                The biodata is typically 1 page in A4 size. In some communities (particularly in
                South India), a more detailed 2-page format is common, but a single page is preferred
                in most North Indian and urban communities.
              </p>
              <p>
                The <strong>marriage biodata format for girls</strong> and for boys follows the same
                structure, though girls' biodatas may sometimes include additional details about
                cooking skills and family values in traditional communities.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-8 text-white text-center">
              <h2 className="font-display text-2xl font-bold mb-3">
                Ready to Create Your Biodata?
              </h2>
              <p className="text-amber-200/80 text-sm mb-6">
                Use EasyBiodataMaker — India's simplest free marriage biodata generator.
                No login, instant PDF download.
              </p>
              <Link href="/create" className="btn-primary">
                Create Free Biodata Now →
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
