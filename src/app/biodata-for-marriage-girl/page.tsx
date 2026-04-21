import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Girl's Marriage Biodata Free – Best Template & Format | EasyBiodataMaker",
  description:
    "Create a marriage biodata for a girl online — free, in 5 minutes. Rose Bloom template with oval photo frame. All communities. Upload photo, download PDF. No registration.",
  keywords: [
    'biodata for marriage girl',
    'marriage biodata format for girl',
    'girl biodata free download',
    'ladki ka biodata kaise banaye',
    'girl marriage biodata with photo',
    'bride biodata format india',
    'dulhan ka biodata',
    'girl biodata template free',
    'bahu ki biodata free',
    'biodata for girl free pdf',
    'which template is best for girl biodata',
    'rose bloom biodata template',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/biodata-for-marriage-girl' },
  openGraph: {
    title: "Girl's Marriage Biodata — Free, With Photo, Download PDF",
    description: "Free marriage biodata for a girl. Rose Bloom template with oval photo frame. All communities. 5 minutes. No login.",
    url: 'https://easybiodatamaker.com/biodata-for-marriage-girl',
  },
};

const aeoFaqs = [
  {
    question: "Which template looks best for a girl's marriage biodata?",
    answer: "Rose Bloom is the most popular — soft pink with an oval photo frame that looks elegant and feminine. Classic Saffron works well for conservative families who prefer the traditional look. Emerald Modern is preferred for working professionals in IT or finance where the profile is sent to urban families.",
  },
  {
    question: "What should a girl write in the partner expectations section of her biodata?",
    answer: "Be honest and specific about what matters to you. A good example: 'Looking for a well-educated, family-oriented partner who is respectful of both sides. Open to any state. If both of us are working, that is fine.' Keep it 2 to 4 sentences. Avoid long checklists — it makes the biodata seem demanding before anyone has even met you.",
  },
  {
    question: "Ladki ka biodata mein kya kya likhna chahiye?",
    answer: "Pura naam, DOB, height, complexion, gotra, manglik sthiti, blood group, religion, caste, pita-mata ka naam aur kaam, bhai-behan, shiksha, naukri (agar kar rahi hain), address (sirf shehar aur rajya — poora address mat dein), phone number, aur partner se apeksha. Photo bhi add karein — natural, smiling photo passport size se better hoti hai.",
  },
  {
    question: "Should a girl mention her salary in the biodata?",
    answer: "Yes, if she is working — it gives a complete picture and many families now actively want a working daughter-in-law. Use a range, not the exact figure. '6–10 LPA' or '12–18 LPA' is fine. If the family later says they prefer the girl to not work after marriage, that conversation happens separately — the biodata should present who she is now.",
  },
  {
    question: "What kind of photo should a girl use in her marriage biodata?",
    answer: "Not a passport photo — those look like government ID documents. Use a recent photo where you look like yourself: saree, salwar kameez, or a nice kurta — traditional or semi-formal. Natural light is much better than flash. Smiling naturally is better than a posed smile. Upload up to 3 photos in EasyBiodataMaker — one formal, one in traditional wear, one casual-but-nice.",
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

export default function GirlBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">👰</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-5 leading-tight">
              Marriage Biodata for a Girl
              <span className="block text-xl mt-2 text-pink-600 font-normal">
                Free · Photo Upload · PDF in 5 Minutes
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              The Rose Bloom template has a soft pink design with an oval photo frame — the most popular
              choice for girls&apos; biodatas on this site. Works for every community. Upload up to 3
              photos. No registration.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              👰 Create Girl&apos;s Biodata — Free
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              On preview page, select &ldquo;Rose Bloom&rdquo; for the pink feminine template
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              What Families Actually Look At in a Girl&apos;s Biodata
            </h2>

            <p>
              The honest answer: it depends on the family. Traditional families look at caste,
              sub-caste, gotra first — then the photo. Progressive families look at education
              and career first. Most families look at all of it, just in a slightly different
              order.
            </p>

            <p>
              What is consistent across communities: <strong>the photo matters</strong>. Not in
              a superficial way — families are trying to imagine this person at the dining table
              and at family events. A photo that shows your natural personality — warm, approachable,
              dressed respectfully — goes much further than a stiff studio shot.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">If She Is Working</h3>
              <p>
                Mention it prominently — many families specifically want a working daughter-in-law.
                Put the occupation early in the biodata, not buried at the bottom. Include the
                designation and company name. Income as a range, not exact figure.
              </p>
              <p className="mt-3">
                If she is not currently working but has qualifications — still list those. Many
                families appreciate the educational background even if the girl is not working at
                the moment.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              The Partner Expectations Section
            </h2>

            <p>
              This is where a girl&apos;s biodata can stand out. Many girls&apos; biodatas just say
              &ldquo;parents will decide&rdquo; in this section — which is fine if that is genuinely
              the case, but it also sounds passive.
            </p>
            <p>
              If you have actual preferences — preferred location, openness to NRI, important values,
              career aspirations — put them here clearly. Families appreciate knowing what the girl
              herself wants, not just what the parents want for her.
            </p>
            <p>
              Example: &ldquo;Looking for a kind, educated partner who values family and supports
              continued career growth on both sides. Open to any Indian state. Caste no bar.&rdquo;
            </p>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Photo Tips for a Girl&apos;s Biodata
            </h2>

            <p>
              EasyBiodataMaker lets you upload up to 3 photos. Use that. One formal photo in
              traditional wear (saree or salwar), one natural photo (kurta or semi-formal), and
              optionally one candid shot if it represents your personality well.
            </p>
            <p>
              Natural light beats studio flash almost every time. Take photos near a window on a
              bright day. Smile like you are happy, not like you are enduring the photo.
            </p>

            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6 mt-4">
              <h3 className="font-bold text-pink-900 mb-2">Ready to Create?</h3>
              <p className="text-gray-600 text-sm mb-4">
                No registration needed. Fill the form, choose Rose Bloom or Classic Saffron, upload
                photos, download PDF.
              </p>
              <Link href="/create" className="btn-primary text-sm">
                👰 Start — It&apos;s Free
              </Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Girl's Biodata — Common Questions" ctaHref="/create" ctaText="Create Girl's Biodata Free" />
      </main>

      <Footer />
    </div>
  );
}
