import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ગુજરાતી લગ્ન બાયોડેટા | Gujarati Marriage Biodata Format Free | EasyBiodataMaker',
  description:
    'Create Gujarati marriage biodata (lagna biodata) online for free. Gujarati + English format with gotra, caste, native village details. Download PDF instantly. Best Gujarati biodata maker.',
  alternates: { canonical: 'https://easybiodatamaker.com/gujarati-biodata-format' },
  keywords: [
    'gujarati marriage biodata format',
    'gujarati lagna biodata',
    'gujarati biodata maker free',
    'gujarati biodata format pdf download',
    'patel biodata format gujarati',
    'anavil brahmin biodata gujarati',
    'leva patel biodata format',
    'kadva patel biodata format',
    'gujarati jain biodata format',
    'gujarati biodata in gujarati language',
    'gujarati vivah biodata',
    'gujarat marriage biodata free download',
    'surat biodata format',
    'ahmedabad marriage biodata',
    'gujarati biodata banavo free',
    'vaniya biodata format gujarati',
    'brahmin biodata gujarati format',
  ],
  openGraph: {
    title: 'Gujarati Marriage Biodata – Free Lagna Biodata PDF',
    description: 'Create beautiful Gujarati marriage biodata with bilingual (Gujarati + English) format. Free download.',
    url: 'https://easybiodatamaker.com/gujarati-biodata-format',
  },
};

const gujaratiCommunities = [
  'Leva Patel', 'Kadva Patel', 'Anavil Brahmin', 'Nagar Brahmin', 'Audichya Brahmin',
  'Vaniya / Bania', 'Jain (Shvetambar)', 'Jain (Digambar)', 'Rajput', 'Koli Patel',
  'Darbar', 'Mochi', 'Soni', 'Suthar', 'Kshatriya Rajput', 'Prajapati',
  'Lohana', 'Bhatia', 'Sindhi Gujarati', 'Akhil Gujarati',
];

const gujaratiFields = [
  { field: 'ગ્રામ / Native Village (Gam)', desc: 'The ancestral village is extremely important in Gujarati matrimonial culture. Families often know each other through common villages and use this for compatibility.' },
  { field: 'ગોત્ર / Gotra', desc: 'Patrilineal clan name. Essential for all Hindu Gujarati communities — Patel, Brahmin, Vaniya alike.' },
  { field: 'કુળ / Kul Devta', desc: 'Family deity (Kuldevi/Kuldev). Rajkot families worship Bahuchar Mata; Kutchi communities may worship Ashapura Mata, etc.' },
  { field: 'પેટા-જ્ઞાતિ / Sub-Community', desc: 'e.g., Leva Patel vs Kadva Patel, Shvetambar vs Digambar Jain — critical distinction in Gujarati marriages.' },
  { field: 'ધંધો / Business / Vyavsay', desc: 'Gujaratis respect entrepreneurship. Mention business type, scale, and location. Employees should mention company and designation.' },
  { field: 'NRI Status', desc: 'Mention if settled in USA, UK, Canada, Australia, or other countries. Many Gujarati families specifically seek NRI matches.' },
];

const faqs = [
  {
    q: 'ગુજરાતીમાં બાયોડેટા કેવી રીતે બનાવવો? (How to make biodata in Gujarati?)',
    a: 'EasyBiodataMaker.com ની મુલાકાત લો, ફોર્મ ભરો અને ગુજરાતી ફેસ્ટિવ ટેમ્પ્લેટ પસંદ કરો. ફોર્મ ભરો, PDF ડાઉનલોડ કરો — 5 મિનિટ! / Visit EasyBiodataMaker.com, fill the form, choose the Gujarati Festive template, and download your PDF.',
  },
  {
    q: 'Does EasyBiodataMaker support Gujarati script?',
    a: 'Our Gujarati template includes section headings in Gujarati script (ગુજરાતી) with English content for each field, making it readable by both traditional and modern families.',
  },
  {
    q: 'Which Gujarati communities does this biodata support?',
    a: 'We support all Gujarati communities including Leva Patel, Kadva Patel, Anavil Brahmin, Nagar Brahmin, Vaniya, Jain, Lohana, Bhatia, Koli, Darbar, Suthar, and all others.',
  },
];

export default function GujaratiBiodataPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 px-4 border-b border-amber-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #fef3c7, #f0fdf4)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🪔</div>
            <span className="section-tag">ગુજરાતી બાયોડેટા</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Gujarati Marriage Biodata Format
              <span className="block text-2xl mt-2 text-orange-600 font-normal">ગુજરાતી લગ્ન બાયોડેટા</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Create a beautiful Gujarati marriage biodata with bilingual format (ગુજરાતી + English).
              Includes all community-specific fields. Free PDF download, no login.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/create" className="btn-primary text-lg px-8 py-4">
                🪔 ગુજરાતી બાયોડેટા બનાવો (Create Free)
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">Choose "Gujarati Festive" template on the preview page</p>
          </div>
        </section>

        {/* Community-specific fields */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-8">
              Important Fields in a Gujarati Marriage Biodata
            </h2>
            <div className="space-y-4">
              {gujaratiFields.map(({ field, desc }) => (
                <div key={field} className="card p-5 flex gap-4">
                  <CheckCircle size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
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
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-8 text-center">
              Gujarati Communities We Support
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {gujaratiCommunities.map(c => (
                <span key={c} className="bg-white border border-orange-200 text-orange-800 text-sm px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Gujarati Marriage Biodata – Everything You Need to Know
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                In Gujarati culture, the marriage biodata (called <strong>lagna biodata</strong> or{' '}
                <strong>vivah parichay patrika</strong>) plays a crucial role in the matchmaking process.
                Families from Ahmedabad, Surat, Vadodara, Rajkot, and across Gujarat exchange biodatas
                through matrimonial platforms, community networks, and family referrals.
              </p>
              <p>
                A <strong>Gujarati marriage biodata</strong> follows the same basic structure as other
                Indian biodatas but has community-specific requirements: native village (gam), sub-community
                (e.g., Leva vs Kadva Patel), business details, and NRI status (for families with
                global connections).
              </p>
              <p>
                Our <strong>Gujarati Festive template</strong> uses the vibrant colors of Navratri — red,
                green, and gold — with Gujarati script section headings and English content fields.
                It is designed to be readable by both elderly parents and modern young professionals.
              </p>
              <h3 className="font-bold text-maroon-900 text-base mt-4">
                Gujarati Biodata for Patel Community
              </h3>
              <p>
                The Patel community is one of the largest in Gujarat. Key considerations for Patel
                biodatas: specify Leva Patel or Kadva Patel clearly, mention native village (gam),
                include gotra, and state NRI status prominently if applicable. Many Patel families
                have members settled in the USA, UK, and East Africa.
              </p>
              <h3 className="font-bold text-maroon-900 text-base">
                Gujarati Jain Biodata Format
              </h3>
              <p>
                For Jain families, specify Shvetambar or Digambar sect, include Jain gotra (shakha),
                and mention vegetarian/vegan lifestyle. Paryushan practices and religious observances
                may also be noted. EasyBiodataMaker's Gujarati template accommodates all these requirements.
              </p>
            </div>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-maroon-900 mt-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="card p-5">
                  <h3 className="font-semibold text-maroon-800 mb-2 text-sm">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-6">
              <h3 className="font-bold text-orange-900 mb-2">ગુજરાતી બાયોડેટા બનાવો – Free!</h3>
              <p className="text-gray-600 text-sm mb-4">No registration needed. Fill form, choose Gujarati template, download PDF.</p>
              <Link href="/create" className="btn-primary text-sm">
                🪔 Create Gujarati Biodata Now →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
