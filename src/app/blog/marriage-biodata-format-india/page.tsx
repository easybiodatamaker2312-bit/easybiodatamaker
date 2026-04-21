import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marriage Biodata Format in India – What Each Section Actually Needs | EasyBiodataMaker',
  description: 'The actual Indian marriage biodata format explained honestly. What belongs in each section, what to skip, how long it should be, with real examples. Not a generic guide.',
  keywords: ['marriage biodata format india','standard biodata format india','biodata sections india','what goes in each biodata section','personal details biodata format','family details biodata format','partner expectations biodata format','biodata format examples india 2024'],
  alternates: { canonical: 'https://easybiodatamaker.com/blog/marriage-biodata-format-india' },
  openGraph: { title: 'Marriage Biodata Format India – Honest Section-by-Section Guide', description: 'What each section of an Indian marriage biodata actually needs. Real examples, no fluff.', url: 'https://easybiodatamaker.com/blog/marriage-biodata-format-india', type: 'article' },
};

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Marriage Biodata Format India – What Each Section Actually Needs', datePublished: '2024-12-28', dateModified: '2024-12-28', author: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' }, publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/logo.png' } }, mainEntityOfPage: 'https://easybiodatamaker.com/blog/marriage-biodata-format-india' };

const aeoFaqs = [
  { question: 'How many sections does a standard Indian marriage biodata have?', answer: "Six: (1) Auspicious heading — ॐ or Bismillah or ੴ depending on religion. (2) Personal details — name, DOB, time of birth, height, religion, caste, gotra. (3) Family details — parents with occupations, siblings. (4) Education and career — highest qualification, company, designation, income range. (5) Contact — city and state minimum, phone. (6) Partner expectations — 2 to 4 sentences." },
  { question: 'What is the biggest mistake people make in the personal details section?', answer: "Adding 2 inches to their height. It is so common that families have started assuming a standard deduction when reading biodatas. The other common mistake: leaving gotra blank because they do not know it. Ask a family elder — do not leave it blank, and definitely do not make one up." },
  { question: 'How specific should family details be in a biodata?', answer: "'Retired government employee' is useless. 'Retired Deputy Commissioner, UP IAS cadre' tells the other family everything they need to know. Be specific about parents' occupations — the more specific, the more the family can place you in a social context they understand. Also mention the number of married vs unmarried siblings — not just the total count." },
  { question: 'What should the partner expectations section say?', answer: "Two to four sentences. Focus on values and nature, not a checklist. 'Looking for a kind, educated partner who values family on both sides. Open to any state. Caste no bar.' is better than 10 bullet points specifying exact height, income, and location requirements. The more specific and demanding the expectations, the fewer responses you receive." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

const sections = [
  {
    num: '01', title: 'The Auspicious Heading',
    content: `Every marriage biodata in India — regardless of community — starts with a religious invocation. This is not optional. Its absence is noticed and sends the wrong signal about the family's values.

For Hindu families: ॥ श्री गणेशाय नमः ॥ is the most universal. Alternatively: ॐ, or a community-specific deity invocation.
For Muslim families: بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (Bismillah ir-Rahman ir-Rahim)
For Sikh families: ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ
For Christian families: "By the Grace of God" or a Bible verse

After the invocation, add a simple header: "Biodata for Marriage" or the community-specific term (Lagna Biodata, Vivah Biodata, Nikah Biodata).`,
  },
  {
    num: '02', title: 'Personal Details',
    content: `This section has the most fields and the most room for honest error. What goes here:

Name: Your full legal name, as it appears on official documents.

Date of Birth: Day, month, year — and write your current age too. "15 March 1995 (Age: 29)" saves families the calculation.

Time of Birth: Needed for kundali matching in Hindu communities. Include even an approximate time — "around 3 AM" is better than nothing. If you truly do not know, leave it blank — do not guess.

Place of Birth: City and state. "Rajkot, Gujarat" not just "Gujarat."

Height: Accurate height. The 2-inch lie gets discovered at the first meeting. It is not worth it.

Complexion: "Wheatish" and "Wheatish Brown" are the most commonly used terms. Very Fair, Fair, and Dark are also used plainly. Keep it accurate.

Blood Group: Useful practically, and some families check it.

Religion and Caste: Full religion name and specific caste. "Brahmin" alone is not enough — specify Konkanastha, Deshastha, Iyer, Iyengar, Nagar, etc.

Gotra: The most important field many people fill incorrectly. Ask a family elder if you do not know. Do not guess.

Manglik: For Hindu families where this is checked. Write the actual status or "Not Known." Never leave it blank.

Hobbies: Three to five genuine interests. "Reading and cooking" is too generic — be specific if possible.`,
  },
  {
    num: '03', title: 'Family Details',
    content: `Families checking a biodata are essentially checking the family behind the candidate. This section carries enormous weight.

Father's name and occupation: Be specific. "Shri Ramesh Kumar Sharma, Retired IAS Officer (District Collector)" tells a family far more than "Retired government employee."

Mother's name and occupation: "Smt. Sunita Sharma, Homemaker" or her actual profession if she works.

Siblings: "2 Brothers (1 Married), 1 Sister (Married)" — not just the number. Married vs unmarried tells families where your family is in the marriage process.

Family type: Nuclear or Joint family — a simple but significant piece of information.

Family status: Middle Class, Upper Middle Class, Affluent — honest self-assessment.

Native place: Your ancestral home city or village. For Gujarati families, this is the gam. For Marathi families, the mool gaon. For North Indian families, the native district or village. Even if you were born and raised in a metro, families from traditional backgrounds want to know your roots.`,
  },
  {
    num: '04', title: 'Education and Career',
    content: `For this section, be specific and accurate.

Highest qualification: Not just "Graduate" — "B.Tech. (Computer Science), IIT Bombay, 2017" is far more informative. If from a lesser-known college, mention the university affiliation.

Occupation: Your current role. "Senior Software Engineer" not just "Software Engineer." The seniority matters.

Employed in: Government / Private / Business / Self-Employed.

Organization: Company name. For government candidates: department and rank. For business owners: type of business.

Designation: Exact job title.

Annual income: Use a range. ₹12–18 LPA is better than ₹14,32,500. Exact income figures create awkward negotiations from the start. For NRI candidates: write in both currencies — USD 90,000 per year (approx ₹75 lakh).

Work location: City where you currently work, especially if different from your home city.`,
  },
  {
    num: '05', title: 'Contact Details',
    content: `Less is more here, for privacy reasons.

Address: City and state is enough — you do not need to share your full postal address on a document that circulates through multiple families. "Ahmedabad, Gujarat" is sufficient. Share the full address only after initial contact has been made and both sides are interested.

Mobile: Your number. And a parent's or sibling's number as a second contact — it signals the family is involved and approachable.

Email: Optional but adds credibility for urban, educated families.`,
  },
  {
    num: '06', title: 'Partner Expectations',
    content: `The most personal section, and the one most people get wrong in two different directions.

Too vague: "Parents will decide." This is fine if it is genuinely the case, but it reads as passive and tells the other family nothing about what you or your family actually value.

Too specific: A bulleted list with 10 specific requirements — exact height range, minimum income, city preferences, specific sub-caste, must be vegetarian, must be from a joint family. This reads as demanding before anyone has even met.

What works: Two to four honest sentences focused on values and nature. 

"Looking for a well-educated, family-oriented partner who values both sides of the family equally. Should be adaptable and open-minded. Caste no bar. Open to candidates from any part of India."

That is clear, warm, and open. It gets responses.

One important note: if you are genuinely open to inter-caste marriage, write "Caste no bar" clearly in this section. It opens your pool of responses dramatically. Do not write it if you are not — it wastes everyone's time.`,
  },
];

export default function BiodataFormatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
              <Link href="/blog" className="hover:text-saffron-600">Blog</Link>
              <span>/</span><span>Biodata Format India</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-maroon-900 mb-4 leading-tight">
              Marriage Biodata Format in India — What Each Section Actually Needs
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm">
              Not a generic overview. This covers exactly what goes in each section of an Indian
              marriage biodata, what the common mistakes are, and what experienced families notice
              when a biodata is well done versus hastily put together.
            </p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map(({ num, title, content }) => (
              <section key={num}>
                <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4 flex items-center gap-3">
                  <span className="w-9 h-9 bg-gradient-to-br from-saffron-400 to-maroon-700 text-white text-sm font-bold rounded-xl flex items-center justify-center flex-shrink-0">{num}</span>
                  {title}
                </h2>
                <div className="text-gray-700 text-sm leading-loose bg-white rounded-xl p-5 border border-amber-100 whitespace-pre-line">
                  {content}
                </div>
              </section>
            ))}

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-8 text-white text-center">
              <h2 className="font-display text-xl font-bold mb-3">Create Your Biodata Now</h2>
              <p className="text-amber-200/80 text-sm mb-5">All 6 sections included · 10 templates · 7 languages · Free · No login</p>
              <Link href="/create" className="btn-primary">Start — It&apos;s Free</Link>
            </div>
          </div>
        </article>

        <AEOBlock faqs={aeoFaqs} title="Biodata Format — Questions Answered" ctaHref="/create" ctaText="Create Your Biodata" />
      </main>
      <Footer />
    </div>
  );
}
