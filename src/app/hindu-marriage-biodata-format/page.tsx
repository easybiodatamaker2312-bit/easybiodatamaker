import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hindu Marriage Biodata Format – Free PDF Download | EasyBiodataMaker',
  description:
    'Create a perfect Hindu marriage biodata format online. Includes gotra, manglik status, kundali details, caste & family info. Download free PDF instantly. All Hindu communities supported.',
  alternates: { canonical: 'https://easybiodatamaker.com/hindu-marriage-biodata-format' },
  keywords: [
    'hindu marriage biodata format',
    'hindu biodata for marriage',
    'brahmin biodata format for marriage',
    'rajput biodata format marriage',
    'patel biodata for marriage',
    'agarwal biodata format marriage',
    'kshatriya biodata format',
    'marwari biodata format for marriage',
    'jat biodata format marriage',
    'gotra in marriage biodata',
    'manglik biodata format',
    'kundali biodata format',
    'hindu shaadi biodata format pdf',
    'pandit biodata format marriage',
  ],
  openGraph: {
    title: 'Hindu Marriage Biodata Format – Free Download',
    description: 'Create a perfect Hindu marriage biodata with gotra, manglik status, and kundali details.',
    url: 'https://easybiodatamaker.com/hindu-marriage-biodata-format',
  },
};

const hinduSpecificFields = [
  { field: 'Gotra', desc: 'Patrilineal clan name (e.g., Kashyap, Bharadwaj, Vasishtha). Essential for kundali matching and avoiding gotra-based marriage restrictions.' },
  { field: 'Manglik Status', desc: 'Whether the person is Manglik, Partial Manglik (Anshik), Non-Manglik, or Not Known. Critical for many Hindu families.' },
  { field: 'Time of Birth', desc: 'Required for generating Janam Kundali. Even approximate time is useful. Format: HH:MM (24-hour).' },
  { field: 'Place of Birth', desc: 'City and state of birth for accurate kundali chart preparation by Jyotishi.' },
  { field: 'Caste & Sub-Caste', desc: 'e.g., Brahmin (Iyer/Iyengar), Kayastha, Rajput (Chauhan/Rathore), Bania (Aggarwal/Gupta), Patel (Leva/Kadva).' },
  { field: 'Maternal Gotra', desc: 'Mother\'s (maternal grandfather\'s) gotra, to verify the bride and groom are not related through the maternal line.' },
  { field: 'Native Place', desc: 'Village or ancestral town, important in many Hindu communities for identifying regional and clan identity.' },
  { field: 'Religious Auspicious Header', desc: '॥ श्री गणेशाय नमः ॥ or ॐ at the top of the biodata is traditional in Hindu marriage biodatas.' },
];

const communities = [
  'Brahmin (All gotras)', 'Rajput / Kshatriya', 'Kayastha', 'Vaishya / Bania',
  'Patel / Patil', 'Aggarwal / Gupta', 'Marwari', 'Jat / Jaat', 'Yadav', 'Kurmi',
  'Lingayat', 'Nair', 'Reddy', 'Naidu', 'Iyer / Iyengar', 'Chettiar', 'Pillai',
];

export default function HinduBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-3xl mb-3">🕉️</div>
            <span className="section-tag">Hindu Biodata Format</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Hindu Marriage Biodata Format
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Create a complete, traditional Hindu marriage biodata online — with gotra, manglik
              status, kundali details, caste, and all essential fields. Free PDF download.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              Create Hindu Biodata Free <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Hindu-specific fields */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-3">
              Important Fields in a Hindu Marriage Biodata
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              A Hindu marriage biodata has several community-specific fields beyond the basic format.
              Here's what each means and why it matters:
            </p>
            <div className="space-y-4">
              {hinduSpecificFields.map(({ field, desc }) => (
                <div key={field} className="card p-5 flex items-start gap-4">
                  <CheckCircle size={20} className="text-saffron-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-maroon-800 mb-1">{field}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Communities */}
        <section className="py-14 px-4 bg-amber-50/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-3 text-center">
              Hindu Communities We Support
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8">
              EasyBiodataMaker works for all Hindu communities across India
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {communities.map((c) => (
                <span key={c} className="bg-white border border-amber-200 text-maroon-700 text-sm px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
              <span className="bg-saffron-100 border border-saffron-200 text-saffron-700 text-sm px-3 py-1.5 rounded-full font-medium">
                + All others
              </span>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
                What Makes a Hindu Marriage Biodata Different?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                A Hindu marriage biodata follows the same basic structure as other biodatas but
                includes several community-specific details that are important for Hindu families
                during the matchmaking process.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The most important additions are <strong>gotra</strong> (clan lineage),{' '}
                <strong>manglik status</strong> (astrological condition), and{' '}
                <strong>time of birth</strong> (for kundali generation). These fields are scrutinised
                by pandit ji or jyotishi before a match is finalised in many traditional families.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-maroon-900 mb-3">
                Gotra Rules in Hindu Marriage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In Hindu tradition, people from the same gotra are considered siblings (bhai-behen)
                and cannot marry. The bride and groom must have different gotras. Additionally, in
                many North Indian communities, there is a custom of avoiding marriage within 7
                generations on the paternal side and 5 generations on the maternal side. Including
                your gotra in the biodata helps families quickly determine this compatibility.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-maroon-900 mb-3">
                Manglik Dosha — What to Write in Biodata
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Many Hindu families ask about Manglik status. If you're not sure, it's better to
                write "Not Known" than to leave it blank or guess. A Jyotishi can determine this
                from your birth details. Note that "Partial Manglik" (Anshik Manglik) is also
                acceptable in many families and is different from full Manglik.
              </p>
            </div>

            <div className="bg-saffron-50 border border-saffron-200 rounded-2xl p-6">
              <h3 className="font-bold text-maroon-800 mb-2">
                Create Your Hindu Marriage Biodata Free
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                EasyBiodataMaker includes all Hindu-specific fields. Fill our 4-step form and
                download a beautiful PDF in minutes.
              </p>
              <Link href="/create" className="btn-primary text-sm">
                Start Creating →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
