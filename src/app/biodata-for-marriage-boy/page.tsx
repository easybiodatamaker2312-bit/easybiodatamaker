import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Boy's Marriage Biodata Free – Best Format & Template | EasyBiodataMaker",
  description:
    "Create a marriage biodata for a boy online — free, in 5 minutes. Classic Saffron, Royal Navy Gold, Emerald Modern templates. All communities. Photo upload, PDF download. No registration.",
  keywords: [
    'biodata for marriage boy',
    'marriage biodata format for boy',
    'ladke ka biodata kaise banaye',
    'groom biodata format india',
    'dulha ka biodata',
    'boy biodata with photo free',
    'government job biodata format boy',
    'NRI boy biodata format',
    'boy biodata free pdf download',
    'which template is best for boy biodata',
    'engineering doctor boy biodata',
    'boy biodata income kaise likhein',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/biodata-for-marriage-boy' },
  openGraph: {
    title: "Boy's Marriage Biodata — Free, Photo Upload, PDF Download",
    description: "Free marriage biodata for a boy. Classic Saffron or Royal Navy Gold template. Government job, IT, doctor, business — all occupations covered. No login.",
    url: 'https://easybiodatamaker.com/biodata-for-marriage-boy',
  },
};

const aeoFaqs = [
  {
    question: "Which template looks best for a boy's marriage biodata?",
    answer: "Classic Saffron is the most popular — it is professional, traditional, and works for every community and occupation. Royal Navy Gold has a prestigious dark look that works well for senior professionals, NRI candidates, and business families. Emerald Modern suits IT professionals and urban families. For community-specific templates, Gujarati Navratri or Marathi Wari work well for those communities.",
  },
  {
    question: "How should a boy mention his government job in a biodata?",
    answer: "Very clearly and prominently. Do not just write 'Government employee.' Write the department (UPSC, Indian Railways, State PCS, BSNL, etc.), the designation (Deputy Collector, Station Master, IPS Officer, etc.), and the current posting city. IAS, IPS, PCS are very significant in North India — if the boy holds one of these, it can go in the headline area near the name.",
  },
  {
    question: "How should income be written in a boy's biodata?",
    answer: "Use a range, not an exact figure. 12–18 LPA is better than 14,32,500. For NRI candidates, write both currencies — USD 90,000 per year (approx ₹75 lakh) — so families in India can understand the equivalent. Never leave income blank if the boy is working — it is one of the first things families check.",
  },
  {
    question: "Should a boy mention property or family wealth in biodata?",
    answer: "Some communities expect it, others find it crass to put on a biodata. If your family has agricultural land or property that is relevant to the matrimonial context — like a farming family — mention it in the custom fields. For urban professional families, focus on income and career instead. If in doubt, leave it off the biodata and discuss it during family meetings.",
  },
  {
    question: "NRI boy ka biodata kaise banaye?",
    answer: "NRI biodata mein clearly likhein: desh aur shehar (USA - New Jersey vs Texas alag context deta hai), visa/PR/citizenship status (H1B, Green Card, US Citizen), income dono currencies mein, aur kya India wapas aana chahte hain ya permanent settle hain abroad. Bahut si families specifically settled NRI matches dhundh rahi hoti hain — inhe clearly dikhna chahiye.",
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

export default function BoyBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🤵</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-5 leading-tight">
              Marriage Biodata for a Boy
              <span className="block text-xl mt-2 text-blue-700 font-normal">
                Free · Photo Upload · PDF in 5 Minutes
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Classic Saffron, Royal Navy Gold, or Emerald Modern — pick what fits your community
              and profession. Career details and income handled properly. Photo upload included.
              No login.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🤵 Create Boy&apos;s Biodata — Free
            </Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              What Goes at the Top of a Boy&apos;s Biodata
            </h2>

            <p>
              For a boy&apos;s biodata, the first thing families check after the photo is the
              <strong> occupation and education combination</strong>. If the boy is a government
              officer, that goes prominently. If he is an IIT or IIM graduate, name the institution.
              If he runs his own business, mention the type and scale.
            </p>

            <p>
              The family background section carries significant weight too — particularly the
              father&apos;s occupation. &ldquo;Retired District Judge&rdquo; tells a family something
              very different from &ldquo;Retired government employee.&rdquo; Be specific.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">Government Job — How to Mention It</h3>
              <p>
                In many North Indian families, a government job outranks a higher-paying private
                job. Do not understate it. Write the department, designation, and grade/level if
                you are comfortable. &ldquo;IPS Officer, DGP Grade, UP Cadre&rdquo; is better than
                just &ldquo;Police Officer.&rdquo;
              </p>
              <p className="mt-3">
                For state services (PCS, state PSC), mention the state and rank clearly.
                &ldquo;SDM, UP PCS Rank 12&rdquo; means something to a family from that region.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Income — Use a Range, Not the Exact Number
            </h2>

            <p>
              Writing the exact salary creates awkward negotiations early in the process. 12–18 LPA
              is honest and professional. Use ranges. For NRI candidates, always write both currencies —
              families in India have no frame of reference for USD 95,000 without knowing the INR
              equivalent.
            </p>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Photo for a Boy&apos;s Biodata
            </h2>

            <p>
              Formal shirt with trousers, or sherwani for traditional communities — both work.
              A clean, natural photo in good light. Not a selfie, not a group photo where you are
              cropped out awkwardly. If the family template supports multiple photos, include one
              formal and one more natural-looking shot.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-4">
              <h3 className="font-bold text-blue-900 mb-2">Ready to Make Yours?</h3>
              <p className="text-gray-600 text-sm mb-4">No registration. Fill the form, pick Classic Saffron or Royal Navy Gold, download PDF.</p>
              <Link href="/create" className="btn-primary text-sm">🤵 Start — It&apos;s Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Boy's Biodata — Common Questions" ctaHref="/create" ctaText="Create Boy's Biodata Free" />
      </main>

      <Footer />
    </div>
  );
}
