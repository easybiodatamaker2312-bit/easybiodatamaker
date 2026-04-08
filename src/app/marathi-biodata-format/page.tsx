import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'मराठी लग्न बायोडेटा | Marathi Marriage Biodata Format Free | EasyBiodataMaker',
  description:
    'Create Marathi marriage biodata (vivah biodata) online for free. Marathi + English bilingual format. Download PDF instantly. All Maharashtra communities – Brahmin, Maratha, CKP, Mali, Teli supported.',
  alternates: { canonical: 'https://easybiodatamaker.com/marathi-biodata-format' },
  keywords: [
    'marathi marriage biodata format',
    'marathi vivah biodata',
    'marathi biodata maker free',
    'marathi biodata format pdf download',
    'maratha biodata format',
    'brahmin biodata marathi format',
    'CKP biodata format marriage',
    'konkanastha brahmin biodata',
    'deshastha brahmin biodata',
    'karhade brahmin biodata',
    'marathi biodata in marathi language',
    'lagna biodata marathi free',
    'pune marriage biodata',
    'mumbai marathi biodata',
    'nashik marathi biodata format',
    'vidarbha marathi biodata',
    'maharashtrian biodata template',
  ],
  openGraph: {
    title: 'Marathi Marriage Biodata – Free Vivah Biodata PDF',
    description: 'Create Marathi marriage biodata with bilingual (मराठी + English) format. Free PDF download.',
    url: 'https://easybiodatamaker.com/marathi-biodata-format',
  },
};

const marathiCommunities = [
  'Konkanastha (Chitpavan) Brahmin', 'Deshastha Brahmin', 'Karhade Brahmin', 'Saraswat Brahmin',
  'Maratha', 'CKP (Chandraseniya Kayastha Prabhu)', 'Mali', 'Teli', 'Shimpi', 'Nhavi',
  'Sutar (Vishwakarma)', 'Lingayat', 'Mahar (Scheduled Caste)', 'Matang', 'Wanjari',
  'Bhandari', '96 Kuli Maratha', 'Kunbi', 'Dhangar', 'Agri',
];

const marathiFields = [
  { field: 'मूळ गाव / Native Village', desc: 'Ancestral village is very important in Marathi culture. Families from Pune, Nashik, Kolhapur, Satara, Solapur will often know each other\'s villages.' },
  { field: 'कुलदेवता / Kul Devata', desc: 'Family deity is important for Brahmin families especially. Common kuldevatas: Jejuri (Khandoba), Tuljapur (Tulja Bhavani), Pandharpur (Vitthal), Kolhapur (Mahalakshmi).' },
  { field: 'गोत्र / Gotra', desc: 'Essential for Brahmin communities. Maratha families may mention sub-clan (gotras like Bharadwaj, Kashyap are common).' },
  { field: 'प्रवर / Pravar', desc: 'For Brahmin families, pravar (list of ancestor sages) is used alongside gotra for kundali matching.' },
  { field: 'उपनाव / Surname & Cast Certificate', desc: 'Full surname (आडनाव) like Kulkarni, Deshpande, Joshi (Brahmin); Patil, Pawar, Jadhav (Maratha); Panse, Prabhune (CKP).' },
  { field: 'नोकरी / Job Location', desc: 'Many Marathi professionals work in Pune, Mumbai, Nagpur IT sectors. Mention if working in IT/pharma/government.' },
];

export default function MarathiBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #fff7ed, #fef9ee, #f0fdf4)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌼</div>
            <span className="section-tag">मराठी बायोडेटा</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Marathi Marriage Biodata Format
              <span className="block text-2xl mt-2 text-orange-600 font-normal">मराठी विवाह बायोडेटा</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Create a traditional Marathi marriage biodata with bilingual (मराठी + English) format.
              Includes all Maharashtra community-specific fields. Free PDF, no registration.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🌼 मराठी बायोडेटा बनवा (Create Free)
            </Link>
            <p className="text-sm text-gray-400 mt-3">Select "Marathi Tradition" template on preview page</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-8">
              Important Fields in a Marathi Marriage Biodata
            </h2>
            <div className="space-y-4">
              {marathiFields.map(({ field, desc }) => (
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

        <section className="py-14 px-4 bg-amber-50/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-6 text-center">
              Maharashtra Communities Supported
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {marathiCommunities.map(c => (
                <span key={c} className="bg-white border border-orange-200 text-orange-800 text-sm px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-5 text-gray-600 text-sm leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Marathi Vivah Biodata – A Complete Guide
            </h2>
            <p>
              In Maharashtra, the marriage biodata is called <strong>vivah biodata</strong> or{' '}
              <strong>lagna parichay patrika</strong>. Families across Pune, Mumbai, Nashik, Aurangabad,
              Nagpur, Kolhapur, and Solapur use biodatas extensively in matrimonial matchmaking.
            </p>
            <p>
              A Marathi marriage biodata differs from other regional formats in its emphasis on
              <strong> kul devata</strong> (family deity), <strong>pravar</strong> (for Brahmin families),
              native village (मूळ गाव), and caste-specific sub-community details.
            </p>
            <h3 className="font-bold text-maroon-900 text-base">Maratha Community Biodata</h3>
            <p>
              For the Maratha community (the largest in Maharashtra), the biodata should mention
              96-Kuli Maratha status if applicable, include surname clearly (Patil, Pawar, Jadhav, Desai,
              Shinde, Bhosale, etc.), and specify native district. Government service is held in high
              regard; mention IAS/IPS/Government rank if applicable.
            </p>
            <h3 className="font-bold text-maroon-900 text-base">Brahmin Community (Konkanastha/Deshastha/Karhade)</h3>
            <p>
              Brahmin families require gotra and pravar. Konkanastha Brahmin (Chitpavan) biodatas
              traditionally include Vedic branch (shakha). Surname identification is important —
              Kulkarni, Deshpande, Joshi indicate Deshastha; Gokhale, Kelkar, Divekar indicate
              Chitpavan.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-6">
              <h3 className="font-bold text-orange-900 mb-2">मराठी बायोडेटा तयार करा – Free!</h3>
              <Link href="/create" className="btn-primary text-sm">🌼 Create Marathi Biodata Now →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
