import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gujarati Marriage Biodata Free – ગુજરાતી લગ્ન બાયોડેટા | EasyBiodataMaker',
  description:
    'Make your Gujarati marriage biodata online for free. Our Navratri template uses Gujarati headings. Covers gam, gotra, kuldevi, NRI details — all the fields Gujarati families actually ask for. No login.',
  keywords: [
    'gujarati marriage biodata format',
    'gujarati lagna biodata',
    'gujarati biodata maker free',
    'lagna biodata gujarati free download',
    'patel biodata format gujarati',
    'anavil brahmin biodata gujarati',
    'leva patel biodata format',
    'kadva patel biodata format',
    'gujarati jain biodata',
    'gujarati biodata with gam and gotra',
    'surat ahmedabad marriage biodata gujarati',
    'gujarati biodata banavo free',
    'NRI gujarati biodata format',
    'vaniya biodata gujarati',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/gujarati-biodata-format' },
  openGraph: {
    title: 'Gujarati Marriage Biodata Free – ગુજ + English Format',
    description: 'Free Gujarati lagna biodata with native script headings. Covers gam, gotra, kuldevi, NRI status. Download PDF in 5 minutes.',
    url: 'https://easybiodatamaker.com/gujarati-biodata-format',
  },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Gujarati Marriage Biodata Free – EasyBiodataMaker',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.human-answer'] },
  url: 'https://easybiodatamaker.com/gujarati-biodata-format',
};

const aeoFaqs = [
  {
    question: 'ગુજરાતી બાયોડેટા ઓનલાઈન ફ્રી મા કઈ રીતે બનાવવો?',
    answer: 'EasyBiodataMaker.com ખોલો, Gujarati ભાષા select કરો, form ભરો, Gujarati Navratri template choose કરો, ને PDF download કરો — 5 મિનિટ! No registration, no charge.',
  },
  {
    question: 'What fields does a Gujarati family actually check first on a biodata?',
    answer: "Gujarati families typically look at gam (native village), gotra, sub-community (Leva vs Kadva Patel, for example), NRI status if any, father's occupation, and the boy or girl's own income or career. The template and overall presentation matters too — a messy Word doc gets less attention than a clean PDF.",
  },
  {
    question: 'Is the gam field really necessary in a Gujarati biodata?',
    answer: "Yes, especially for Patel, Brahmin, and Lohana communities. Families often know each other by village. Two families from the same gam might be distant relatives, which affects the match decision. Even if you grew up in a city, mention your ancestral gam.",
  },
  {
    question: 'How do Gujarati NRI biodatas differ from regular ones?',
    answer: "For NRI candidates, you need to mention the country (USA, UK, Canada, Australia, etc.), visa or PR/citizenship status, income in USD/GBP with approximate INR equivalent, and whether you want a partner who will relocate or if you plan to return to India. Many Gujarati families specifically search for settled NRI matches.",
  },
  {
    question: 'Which Gujarati communities work with this template?',
    answer: 'Leva Patel, Kadva Patel, Anavil Brahmin, Nagar Brahmin, Audichya Brahmin, Vaniya/Bania, Jain (both Shvetambar and Digambar), Kshatriya Rajput, Koli Patel, Darbar, Lohana, Bhatia, Prajapati, Suthar — and really any Gujarat community.',
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

export default function GujaratiBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <main className="flex-1">

        {/* Hero */}
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #fff7ed, #fef3c7, #f0fdf4)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🪔</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Gujarati Marriage Biodata
              <span className="block text-2xl mt-2 text-orange-600 font-normal">
                ગુજ + English · Free · No Login
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our Gujarati Navratri template has section headings in Gujarati script — so elderly
              family members can read it easily, and the younger crowd gets the English fields they
              need. Takes 5 minutes. No registration.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🪔 ગુજ બાયોડેટા બનાવો — Free
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              On the preview page, pick &ldquo;Gujarati Navratri&rdquo; from the template menu
            </p>
          </div>
        </section>

        {/* Human-written content — not generic */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              What Gujarati Families Actually Look For
            </h2>

            <p>
              If you have spent any time in a Gujarati household during marriage season, you know the
              biodata goes around the dining table and every person has an opinion. The first thing
              Patel families look at is the <strong>gam</strong> — your ancestral village. Even if
              you were born in Ahmedabad or grew up in New Jersey, families want to know where your
              roots are. It tells them a lot about your community ties.
            </p>

            <p>
              After that comes <strong>gotra</strong>. Same gotra is a dealbreaker in most Hindu
              Gujarati families — the boy and girl are considered siblings within that lineage.
              Mention it clearly. If you don&apos;t know yours, ask your parents or the family pandit
              before filling the form.
            </p>

            <p>
              For <strong>Patel families</strong>, Leva or Kadva matters more than people admit
              publicly. Same for Jain families — Shvetambar or Digambar needs to be specified.
              Add this in the sub-caste field. Don&apos;t leave it blank and hope for the best.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 human-answer">
              <h3 className="font-bold text-maroon-900 mb-3">For Gujarati Business Families</h3>
              <p>
                Gujaratis take business seriously in matrimonial conversations too. If the boy or
                girl is running their own business, mention what type, what scale, and where it
                operates. &ldquo;Business in textiles, Surat, annual turnover 2 crore&rdquo; is
                infinitely more useful than just &ldquo;Self-employed.&rdquo; Similarly, if someone
                is a professional — CA, engineer, doctor — name the firm or hospital.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              NRI Gujarati Biodata — What to Add
            </h2>

            <p>
              A large chunk of Gujarati diaspora is in the US, UK, Canada, East Africa, and
              Australia. If you are creating a biodata for someone settled abroad, here is what
              families on both sides want to see:
            </p>

            <ul className="space-y-2 pl-4 border-l-2 border-saffron-300">
              <li><strong>Country and city</strong> — USA (New Jersey) is different from USA (Mississippi) in terms of Gujarati community presence</li>
              <li><strong>Visa/PR/Citizenship</strong> — H1B, Green Card, US Citizen — parents in India need to understand this</li>
              <li><strong>Income both ways</strong> — USD 90,000 and also write ₹75 lakh approx so both sides understand</li>
              <li><strong>Return plan</strong> — Settle abroad permanently, or planning to return? Be honest</li>
              <li><strong>India visit frequency</strong> — Once a year, twice? Families care about how connected you stay</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              About the Gujarati Navratri Template
            </h2>

            <p>
              The Gujarati Navratri template uses a red, green, and gold stripe pattern — the
              colours of Navratri. Section headings are in Gujarati script: <em>વ્યક્તિગત માહિતી,
              કૌટુંબિક વિગત, શિક્ષણ અને વ્યવસાય</em>, etc. The actual field values are in English,
              which keeps it readable for everyone. It looks festive without being over-the-top.
            </p>

            <p>
              The template also supports up to 3 photos. A good photo placement matters — Gujarati
              families do look at photos as part of the first impression, so upload something
              natural and well-lit rather than a passport photo.
            </p>

            {/* Community grid */}
            <h2 className="font-display text-2xl font-bold text-maroon-900">Communities This Works For</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Leva Patel', 'Kadva Patel', 'Anavil Brahmin', 'Nagar Brahmin', 'Audichya Brahmin',
                'Jain Shvetambar', 'Jain Digambar', 'Vaniya / Bania', 'Lohana', 'Bhatia',
                'Kshatriya Rajput', 'Koli Patel', 'Darbar', 'Prajapati', 'Suthar', 'Soni',
              ].map(c => (
                <span key={c} className="bg-orange-50 border border-orange-200 text-orange-800 text-xs px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-4">
              <h3 className="font-bold text-orange-900 mb-2">Ready to make yours?</h3>
              <p className="text-gray-600 text-sm mb-4">
                No registration needed. Fill the form, pick the Gujarati Navratri template, download.
              </p>
              <Link href="/create" className="btn-primary text-sm">
                🪔 Start — It&apos;s Free
              </Link>
            </div>
          </div>
        </section>

        <AEOBlock
          faqs={aeoFaqs}
          title="Questions Gujarati Families Ask"
          ctaHref="/create"
          ctaText="Create Gujarati Biodata Free"
        />
      </main>

      <Footer />
    </div>
  );
}
