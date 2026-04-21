import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Make Biodata for Marriage – What Actually Works | EasyBiodataMaker',
  description:
    'A straight-talking guide to making a marriage biodata in India. What to write, what to skip, common mistakes families make, real examples. No fluff — just what works.',
  keywords: [
    'how to make biodata for marriage',
    'how to create marriage biodata',
    'marriage biodata banane ka tarika',
    'biodata kaise banaye shaadi ke liye',
    'what to write in marriage biodata',
    'how to write family details in biodata',
    'how to write education in biodata',
    'partner expectations mein kya likhein',
    'marriage biodata tips india 2024',
    'marriage biodata example india',
    'marriage biodata mistakes to avoid',
    'shaadi biodata mein kya likhte hain',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/how-to-make-biodata-for-marriage' },
  openGraph: {
    title: 'How to Make a Marriage Biodata – What Actually Works in India',
    description: 'Honest guide on what to write (and what to skip) in an Indian marriage biodata. Real examples, common mistakes, no generic advice.',
    url: 'https://easybiodatamaker.com/how-to-make-biodata-for-marriage',
    type: 'article',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Make Biodata for Marriage in India',
  description: 'A practical guide to creating a marriage biodata that actually gets responses from Indian families.',
  totalTime: 'PT10M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Start with a religious heading', text: 'Open with an auspicious line — ॥ श्री गणेशाय नमः ॥ for Hindu, Bismillah for Muslim, ੴ for Sikh. This is expected and its absence is noticed.' },
    { '@type': 'HowToStep', position: 2, name: 'Fill personal details accurately', text: 'Name, date of birth, time of birth (for kundali), place of birth, height, complexion, blood group, religion, caste, gotra, manglik status. Be accurate — do not add 2 inches to your height.' },
    { '@type': 'HowToStep', position: 3, name: 'Write family details with context', text: "Father's and mother's names with occupation. For occupation, be specific — 'Retired IAS Officer' is far more informative than 'Retired Government Employee'. Include number of siblings and their marital status." },
    { '@type': 'HowToStep', position: 4, name: 'State education and career clearly', text: 'Highest qualification with college name (especially if it is IIT, IIM, or a reputed institution). Current designation and company. Income as a range, not exact figure.' },
    { '@type': 'HowToStep', position: 5, name: 'Keep contact details minimal', text: 'City and state is enough for privacy — do not share your full postal address on a biodata. One mobile number, maybe an email. WhatsApp if that is preferred.' },
    { '@type': 'HowToStep', position: 6, name: 'Write honest partner expectations', text: '2 to 4 sentences maximum. Focus on values and nature, not a checklist. If open to inter-caste, say caste no bar clearly. This section makes a real difference.' },
    { '@type': 'HowToStep', position: 7, name: 'Choose a template and download PDF', text: 'Pick a template that fits your community and download as PDF. Never share as a Word document — it looks different on every computer.' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Make Biodata for Marriage – What Actually Works',
  datePublished: '2024-12-28',
  dateModified: '2024-12-28',
  author: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
  publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png' } },
  mainEntityOfPage: 'https://easybiodatamaker.com/how-to-make-biodata-for-marriage',
};

const aeoFaqs = [
  {
    question: 'What is the correct format for a marriage biodata in India?',
    answer: "Six sections in this order: (1) Religious heading, (2) Personal details — name, DOB, time of birth, height, religion, caste, gotra, (3) Family details — parents with occupations, siblings, (4) Education and career, (5) Contact details — city and state is enough, (6) Partner expectations — 2 to 4 sentences, honest.",
  },
  {
    question: 'How long should it take to create a marriage biodata?',
    answer: "If you have your information ready — date of birth, time of birth, gotra, education details, job details — the form takes about 5 to 7 minutes to fill. Add another 2 minutes to pick a template and download. Gathering the information beforehand is the only part that takes time.",
  },
  {
    question: 'What are the biggest mistakes people make in a marriage biodata?',
    answer: "In order of how often we see them: exaggerating height or age (families find out at the first meeting), writing exact income instead of a range (creates awkward negotiations), leaving gotra or manglik blank (families assume you are hiding something), using a passport-style photo with plain background (makes the biodata look like a government form), writing 10 specific requirements for a partner (reads as demanding and reduces responses).",
  },
  {
    question: 'Should I mention caste in my biodata if I am open to inter-caste?',
    answer: "Yes — write your own caste as usual, and in the partner expectations section write 'Caste no bar' clearly. This opens your profile to far more families. Do not skip your own caste — families from your community still need to see it. Just be clear that you are open to others.",
  },
  {
    question: 'What is the ideal partner expectations section?',
    answer: "Two to four sentences, honest, focused on values and nature. 'Looking for a kind, educated partner who is family-oriented and respectful of both sides. Location flexible — open to candidates from any major city. Caste no bar.' That is better than a 10-point list of specific requirements.",
  },
];

const aeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aeoFaqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function HowToMakeBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
              <Link href="/blog" className="hover:text-saffron-600">Guides</Link>
              <span>/</span><span>How to Make Biodata</span>
            </div>
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-4 leading-tight">
              How to Make a Marriage Biodata — What Actually Works
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Most guides tell you the obvious stuff. This one focuses on what families actually look
              at, what gets your biodata into the &ldquo;follow up&rdquo; pile versus the rejected pile,
              and where most people quietly go wrong without realising it.
            </p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-gray-700 text-sm leading-loose">

            <section>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
                Start With the Auspicious Heading — Do Not Skip It
              </h2>
              <p>
                It sounds small but families notice when it is missing. <em>॥ श्री गणेशाय नमः ॥</em>
                for Hindu families, <em>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</em> for Muslim families,
                <em>ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ</em> for Sikh families. It signals that this is a
                matrimonial document prepared with care, not just a form dump.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
                Personal Details — Be Accurate, Not Optimistic
              </h2>
              <p>
                The most common silent lie in Indian biodatas is height. Adding 2 inches is so common
                that families have started factoring in a standard 2-inch deduction when reading
                biodatas. Do not do it. You will meet this person&apos;s family in person eventually.
              </p>
              <p className="mt-4">
                Time of birth is worth including even if you only know it approximately — 3 AM or
                morning or afternoon is better than nothing for families where kundali matching is
                done. Exact time is ideal.
              </p>
              <div className="bg-amber-50 border-l-4 border-saffron-400 rounded-r-xl p-5 mt-4">
                <strong className="text-maroon-900">On Gotra and Manglik:</strong>
                <p className="mt-2">
                  If you do not know your gotra, find out before submitting the biodata — ask your
                  parents or a family elder. Leaving it blank is worse than writing &ldquo;Not
                  Known.&rdquo; For manglik, same principle: write your actual status or &ldquo;Not
                  Known,&rdquo; never leave it blank if it is a field your community cares about.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
                Family Details — Specifics Matter
              </h2>
              <p>
                &ldquo;Retired government employee&rdquo; tells a family very little. &ldquo;Retired
                District Collector (IAS), Lucknow&rdquo; tells them everything. Be specific about
                parents&apos; occupations — it gives the other family context about your background.
              </p>
              <p className="mt-4">
                For siblings, mention how many and how many are married. It tells families about
                the stage your family is at in the marriage process — relevant for families who want
                to know if there are multiple siblings to consider.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
                Education and Career — The Income Question
              </h2>
              <p>
                For education, if you studied at IIT, IIM, AIIMS, or any nationally recognized
                institution — name it. Otherwise mention the university, city, and degree. For
                lesser-known colleges, the city is more useful than the college name.
              </p>
              <p className="mt-4">
                Income: use a range. ₹14,32,500 exact is both too specific and unnecessary. Write
                12–18 LPA or 25–35 LPA. It is honest and avoids uncomfortable negotiations at the
                start. For NRIs writing income in foreign currency — add approximate INR equivalent
                in parentheses so both families understand.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
                Partner Expectations — The Section Most People Get Wrong
              </h2>
              <p>
                Two to four sentences. Families skim this section. A 10-bullet checklist reads as
                high-maintenance before anyone has even met you.
              </p>
              <p className="mt-4">
                What works: focus on values and nature. &ldquo;Looking for a kind, educated partner
                who values family on both sides. Open to any state in India. Caste no bar.&rdquo;
                Three sentences. Clear, warm, open.
              </p>
              <p className="mt-4">
                If you are genuinely open to inter-caste marriage — say it. &ldquo;Caste no bar&rdquo;
                at the end of your expectations section dramatically increases the pool of responses.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
                The Photo
              </h2>
              <p>
                Not a passport photo. Those stiff, plain-background shots make biodata look like a
                government application. Use a recent photo where you look like yourself — smiling,
                dressed nicely, in natural light. A decent phone photo near a window on a bright
                day beats a dark studio shot.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
                PDF, Not Word. Always.
              </h2>
              <p>
                Word documents look completely different on different computers — fonts shift, spacing
                breaks. PDF is identical everywhere, is smaller for WhatsApp, and cannot be accidentally
                edited by someone else. Download from EasyBiodataMaker as PDF and share that.
              </p>
            </section>

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-8 text-white text-center">
              <h2 className="font-display text-xl font-bold mb-3">Create Your Biodata Now</h2>
              <p className="text-amber-200/80 text-sm mb-5">
                10 templates · 7 languages · Photo upload · Custom fields · Free · No login
              </p>
              <Link href="/create" className="btn-primary">Start — It&apos;s Free</Link>
            </div>
          </div>
        </article>

        <AEOBlock faqs={aeoFaqs} title="What People Ask About Making a Biodata" ctaHref="/create" ctaText="Create Your Biodata" />
      </main>

      <Footer />
    </div>
  );
}
