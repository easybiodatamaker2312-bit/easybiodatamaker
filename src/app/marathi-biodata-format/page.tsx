import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marathi Marriage Biodata Free – मराठी विवाह बायोडेटा | EasyBiodataMaker',
  description:
    'Make your Marathi vivah biodata online for free. Marathi + English format with mool gaon, kuldaivat, gotra, pravar. Brahmin, Maratha, CKP all communities. Download PDF in 5 minutes.',
  keywords: [
    'marathi marriage biodata format',
    'marathi vivah biodata',
    'marathi lagna biodata free',
    'marathi biodata maker online free',
    'maratha biodata format',
    'konkanastha brahmin biodata marathi',
    'deshastha brahmin biodata',
    'CKP biodata format',
    'marathi biodata with mool gaon',
    'marathi biodata with kuldaivat',
    'pune nashik marriage biodata marathi',
    'maharashtrian biodata pdf free',
    'vidarbha marathi biodata',
    'lagna biodata marathi free download',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/marathi-biodata-format' },
  openGraph: {
    title: 'Marathi Marriage Biodata Free – Vivah Biodata with Ganpati Header',
    description: 'Free Marathi vivah biodata with orange Ganpati header. मराठी + English. Covers mool gaon, kuldaivat, gotra, pravar. All Maharashtra communities.',
    url: 'https://easybiodatamaker.com/marathi-biodata-format',
  },
};

const aeoFaqs = [
  {
    question: 'मराठी बायोडेटा ऑनलाईन फ्री मध्ये कसा बनवायचा?',
    answer: 'EasyBiodataMaker.com वर जा, Marathi भाषा निवडा, 4-step form भरा, Marathi Wari template निवडा, आणि PDF download करा — 5 मिनिटांत! Registration नाही, charge नाही.',
  },
  {
    question: 'What fields do Maharashtrian families specifically check on a biodata?',
    answer: "Marathi families look at: mool gaon (native village), kuldaivat (family deity), gotra and pravar (especially for Brahmin families), whether the family is nuclear or joint, the boy or girl's occupation and designation, and the overall neatness of the biodata presentation.",
  },
  {
    question: 'Is kuldaivat important in Marathi biodata?',
    answer: "Yes, especially in traditional families. Kuldaivat is the clan deity — for Marathas it might be Tulja Bhavani or Jotiba, for Konkanasthas it could be various forms of Devi. Some families prefer matches with compatible kuldaivats, though this is less strict than gotra rules.",
  },
  {
    question: 'What is pravar and when should I mention it in a Marathi biodata?',
    answer: "Pravar is a list of ancestral sages used by Brahmin families alongside gotra. It is essential for Konkanastha (Chitpavan), Deshastha, and Karhade Brahmin communities. If you are from a Brahmin family, ask your parents for your gotra and pravar together — both are needed for proper matching.",
  },
  {
    question: 'Which Marathi communities does this support?',
    answer: 'Konkanastha (Chitpavan) Brahmin, Deshastha Brahmin (both Rigvedi and Yajurvedi), Karhade Brahmin, Saraswat Brahmin, CKP (Chandraseniya Kayastha Prabhu), 96 Kuli Maratha, Kunbi, Mali, Teli, Shimpi, Wanjari, Bhandari, Agri, Dhangar — all Maharashtra communities.',
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

export default function MarathiBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #fff7ed, #fef9ee, #f0fdf4)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌼</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Marathi Marriage Biodata
              <span className="block text-2xl mt-2 text-orange-600 font-normal">
                मराठी + English · Free · No Login
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our Marathi Wari template opens with &ldquo;गणपती बाप्पा मोरया&rdquo; and uses orange
              Ganpati-inspired borders. Section headings are in Marathi — field values in English.
              Works for every Maharashtra community, from Pune to Nagpur.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🌼 मराठी बायोडेटा बनवा — Free
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              Preview page वर &ldquo;Marathi Wari&rdquo; template निवडा
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              What Maharashtra Families Actually Want in a Biodata
            </h2>

            <p>
              Marathi biodata culture is a little different from Gujarat or UP. There is less emphasis
              on the visual template and more on the actual substance. Pune families especially are
              practical — they want clear information, not flowery language.
            </p>

            <p>
              <strong>Mool gaon</strong> matters to most Marathi families, particularly in traditional
              households. Even for someone born in Mumbai, the ancestral village (often a small town
              in Konkan, Marathwada, or Vidarbha) tells the family about your roots and community
              connections. Mention it — even if you have never visited the place yourself.
            </p>

            <div className="bg-amber-50 border-l-4 border-orange-400 rounded-r-xl p-5 human-answer">
              <h3 className="font-bold text-maroon-900 mb-2">For Brahmin Families — Gotra and Pravar</h3>
              <p>
                If you are from a Brahmin family (Konkanastha, Deshastha, Karhade), you need both
                gotra <em>and</em> pravar. Gotra alone is not enough for proper matching. Pravar is
                the list of ancestral sages — your family will know it. Ask your parents or the
                family pandit. Both should appear on the biodata.
              </p>
              <p className="mt-3">
                Also specify which Brahmin you are — &ldquo;Brahmin&rdquo; alone is too vague.
                Konkanastha (Chitpavan) and Deshastha Rigvedi are very different communities with
                different expectations.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              The Kuldaivat Question
            </h2>

            <p>
              Kuldaivat is the family or clan deity. In Maharashtra this matters — not as a hard
              matching rule in most cases, but it tells the other family a lot about your roots.
              Common kuldaivats: <strong>Tulja Bhavani</strong> (Tuljapur) for many Marathas,
              <strong>Mahalakshmi</strong> (Kolhapur) for western Maharashtra families,
              <strong>Khandoba</strong> (Jejuri), <strong>Vitthal</strong> (Pandharpur).
              You can add this in the custom fields section of EasyBiodataMaker.
            </p>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Maratha Community Biodata — What to Include
            </h2>

            <p>
              For 96 Kuli Maratha families, the full surname matters — Patil, Pawar, Jadhav, Desai,
              Shinde, Bhosale, Nimbalkar. Mention it clearly. If your family has a specific sub-clan
              identity, you can add it in the sub-caste field. Government service (especially IAS,
              IPS, Army) is highly valued — mention exact rank and department if applicable.
            </p>

            <p>
              For the biodata photo, Marathi families tend to prefer traditional attire — a saree
              for women, formal shirt and trousers or sherwani for men. Keep it respectful rather
              than glamorous.
            </p>

            <h2 className="font-display text-2xl font-bold text-maroon-900">Communities This Works For</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Konkanastha (Chitpavan) Brahmin', 'Deshastha Brahmin (Rigvedi)', 'Deshastha (Yajurvedi)',
                'Karhade Brahmin', 'Saraswat Brahmin', 'CKP', '96 Kuli Maratha', 'Kunbi',
                'Mali', 'Teli', 'Wanjari', 'Bhandari', 'Shimpi', 'Agri', 'Dhangar',
              ].map(c => (
                <span key={c} className="bg-orange-50 border border-orange-200 text-orange-800 text-xs px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="font-bold text-orange-900 mb-2">बायोडेटा तयार करायचा आहे?</h3>
              <p className="text-gray-600 text-sm mb-4">
                No registration. Fill the form, pick Marathi Wari, download your PDF.
              </p>
              <Link href="/create" className="btn-primary text-sm">
                🌼 Start — It&apos;s Free
              </Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Questions Marathi Families Ask" ctaHref="/create" ctaText="Create Marathi Biodata Free" />
      </main>

      <Footer />
    </div>
  );
}
