import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hindu Marriage Biodata Format – Gotra, Manglik, Kundali Explained | EasyBiodataMaker',
  description:
    'Create a Hindu marriage biodata with all the fields that matter — gotra, manglik, time of birth, kul devata, caste and sub-caste. Free PDF download. All Hindu communities supported.',
  keywords: [
    'hindu marriage biodata format',
    'hindu biodata with gotra and manglik',
    'brahmin biodata format',
    'rajput biodata format',
    'patel biodata format',
    'what is gotra in biodata',
    'manglik biodata mein kaise likhein',
    'kundali matching biodata fields',
    'hindu marriage biodata all communities',
    'hindu biodata free download 2024',
    'kul devata biodata',
    'auspicious heading biodata hindu',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/hindu-marriage-biodata-format' },
  openGraph: {
    title: 'Hindu Marriage Biodata – Gotra, Manglik, All Fields Explained',
    description: 'Free Hindu marriage biodata with gotra, manglik, kul devata fields. All communities — Brahmin, Rajput, Patel, Yadav, and more.',
    url: 'https://easybiodatamaker.com/hindu-marriage-biodata-format',
  },
};

const aeoFaqs = [
  {
    question: 'What is gotra in a marriage biodata and why does it matter?',
    answer: "Gotra is the patrilineal clan lineage traced to an ancient rishi (sage). It works as a family tree identifier. The rule in Hindu tradition is that two people from the same gotra are considered siblings within that lineage and cannot marry. So families check gotras before proceeding — Kashyap, Bharadwaj, Vasishtha, Atreya, Sandilya are common examples. If you do not know yours, ask your parents or family pandit.",
  },
  {
    question: 'What is manglik and should I mention it in my biodata?',
    answer: "Manglik refers to Mars (Mangal) being positioned in certain houses of your birth chart — specifically the 1st, 4th, 7th, 8th, or 12th house. In Hindu astrology, this position is believed to affect marriage compatibility. Many Hindu families check this before agreeing to match. If you are Manglik: write Yes. Non-Manglik: write No. Partially Manglik: write Partial or Anshik. If you genuinely do not know: write Not Known and get it checked. Never leave it blank in a community that cares about it.",
  },
  {
    question: 'Why is time of birth important in a Hindu marriage biodata?',
    answer: "Time of birth is needed to prepare the Janam Kundali (birth chart) accurately. Even a rough time — morning, around 3 AM, late evening — helps the astrologer narrow it down. An exact time gives the most accurate kundali. Families where kundali matching is done (the ten porutham or the 36 gunas system) need this to check compatibility.",
  },
  {
    question: 'What does kul devata mean in a Hindu biodata?',
    answer: "Kul devata (or Kuldevi/Kuldev) is the family or clan deity worshipped by your family across generations. For example, many Rajasthani Brahmins worship Karni Mata, many Gujarat Patels worship Bahuchar Mata, many Maharashtrian families worship Tulja Bhavani or Khandoba. It tells the other family something about your roots and traditions. You can add this in the custom fields section of EasyBiodataMaker.",
  },
  {
    question: 'How should I mention sub-caste in a Hindu biodata?',
    answer: "Be specific. 'Brahmin' alone is not enough — are you Konkanastha (Chitpavan), Deshastha, Iyer, Iyengar, Nagar, Saryu Parin? 'Patel' alone is not enough — Leva or Kadva? 'Rajput' alone is not enough — Chauhan, Rathore, Sisodia? Use the sub-caste field clearly. Leaving it vague causes confusion and families will ask anyway.",
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

const communities = [
  'Brahmin (Konkanastha)', 'Brahmin (Deshastha)', 'Brahmin (Iyer)', 'Brahmin (Iyengar)',
  'Brahmin (Nagar)', 'Brahmin (Saryu Parin)', 'Brahmin (Kanyakubja)', 'Brahmin (Maithil)',
  'Rajput (Chauhan)', 'Rajput (Rathore)', 'Rajput (Sisodia)', 'Rajput (Tomar)',
  'Leva Patel', 'Kadva Patel', 'Yadav', 'Kayastha',
  'Agarwal', 'Khatri', 'Jat', 'Kurmi', 'Vaniya',
  'Reddy', 'Kamma', 'Naidu', 'Nair', 'Lingayat',
];

export default function HinduBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🕉️</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-5 leading-tight">
              Hindu Marriage Biodata Format
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our Classic Saffron template opens with <em>॥ श्री गणेशाय नमः ॥</em> and includes all
              the fields Hindu families actually care about — gotra, manglik, time of birth, kul devata.
              Free PDF in 5 minutes. No login.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🕉️ Create Hindu Biodata — Free
            </Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              The Fields That Actually Matter for Hindu Families
            </h2>

            <p>
              A Hindu marriage biodata has a few fields that non-Hindu formats simply do not have.
              These are the ones families specifically look for — and the ones most people fill
              incorrectly or skip.
            </p>

            <div className="space-y-5">
              <div className="border-l-4 border-saffron-400 pl-5">
                <h3 className="font-bold text-maroon-900 mb-2">Gotra</h3>
                <p>
                  This is the most misunderstood field. Gotra is not your caste — it is your
                  patrilineal clan traced to an ancient rishi. Think of it as a genetic surname
                  from thousands of years ago. Kashyap, Bharadwaj, Vasishtha, Atreya, Gautam,
                  Sandilya, Shandilya — these are common gotras.
                </p>
                <p className="mt-3">
                  The rule: same gotra cannot marry. So families check this early. If you write
                  it wrong or leave it blank, you create problems later. Ask your parents, ask
                  your grandfather, ask the family pandit — do not guess.
                </p>
              </div>

              <div className="border-l-4 border-saffron-400 pl-5">
                <h3 className="font-bold text-maroon-900 mb-2">Manglik</h3>
                <p>
                  Manglik refers to Mars being in specific positions in your birth chart. In Hindu
                  astrology, this is believed to affect marriage life — particularly the first
                  marriage. The concern is often that a Manglik marrying a non-Manglik creates
                  imbalance.
                </p>
                <p className="mt-3">
                  In practice: many educated, urban Hindu families are moving away from strict
                  Manglik matching. But many are not. The safe approach is to get your kundali
                  checked once and write your accurate status — Yes, No, Partial (Anshik), or
                  Not Known. Never leave it blank if your community cares about it.
                </p>
              </div>

              <div className="border-l-4 border-saffron-400 pl-5">
                <h3 className="font-bold text-maroon-900 mb-2">Time of Birth</h3>
                <p>
                  Needed for kundali preparation. If you know the exact time — great. If you
                  only know it approximately (early morning, 3 AM, around noon) — write that.
                  It still helps the astrologer narrow it down. Without any birth time, kundali
                  matching becomes difficult for families who rely on it.
                </p>
              </div>

              <div className="border-l-4 border-saffron-400 pl-5">
                <h3 className="font-bold text-maroon-900 mb-2">Kul Devata</h3>
                <p>
                  The family or clan deity. Not every community requires this but many do —
                  especially Rajput, Maratha, and some Brahmin communities. You can add this
                  in EasyBiodataMaker&apos;s custom fields section. Examples: Bahuchar Mata
                  (many Gujarat families), Tulja Bhavani (many Maratha families), Vaishno Devi
                  (many North Indian families), Khandoba (Maharashtra families).
                </p>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900 mt-4">
              Hindu Communities We Support
            </h2>
            <div className="flex flex-wrap gap-2">
              {communities.map(c => (
                <span key={c} className="bg-amber-50 border border-amber-200 text-amber-900 text-xs px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
              <span className="bg-saffron-100 border border-saffron-200 text-saffron-800 text-xs px-3 py-1.5 rounded-full font-medium">+ All others</span>
            </div>

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-6 text-white text-center mt-6">
              <h2 className="font-display text-xl font-bold mb-3">Create Your Hindu Biodata</h2>
              <p className="text-amber-200/80 text-sm mb-4">Free · Gotra and Manglik fields included · 10 templates · Instant PDF</p>
              <Link href="/create" className="btn-primary text-sm">Start Now — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Hindu Biodata — Common Questions" ctaHref="/create" ctaText="Create Hindu Biodata Free" />
      </main>

      <Footer />
    </div>
  );
}
