import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'हिंदी में शादी का बायोडेटा | Hindi Marriage Biodata Format Free | EasyBiodataMaker',
  description:
    'Create Hindi marriage biodata (shaadi ka biodata) online for free. Hindi + English bilingual format with Devanagari headings. UP, Bihar, MP, Rajasthan all communities. Free PDF download.',
  alternates: { canonical: 'https://easybiodatamaker.com/hindi-biodata-format' },
  keywords: [
    'hindi marriage biodata format',
    'shaadi ka biodata hindi mein',
    'hindi biodata maker free',
    'vivah biodata hindi format',
    'biodata in hindi language',
    'UP biodata format marriage',
    'Bihar biodata format marriage',
    'Rajasthan marriage biodata format',
    'hindi biodata banane ka tarika',
    'hindi mein biodata kaise banaye',
    'brahmin biodata hindi format',
    'yadav biodata format hindi',
    'kayastha biodata hindi format',
    'rajput biodata hindi format',
    'hindi shaadi biodata pdf download',
    'UP Bihar marriage biodata',
    'devanagari biodata format',
  ],
  openGraph: {
    title: 'Hindi Marriage Biodata – हिंदी विवाह बायोडेटा – Free PDF',
    description: 'Create Hindi marriage biodata with Devanagari headings and English fields. Free PDF download.',
    url: 'https://easybiodatamaker.com/hindi-biodata-format',
  },
};

const hindiCommunities = [
  'Brahmin (Saryu Parin, Kanyakubja, Maithil, Sanadhya)', 'Kayastha', 'Rajput (Chauhan, Rathore, Sisodia)',
  'Bania / Agarwal', 'Yadav', 'Kurmi', 'Lodhi Rajput', 'Jat', 'Gupta',
  'Vaishya', 'Khatri', 'Tyagi / Bhumihar', 'Shivhare', 'Nai Brahmin',
  'Kahar', 'Pasi (SC)', 'Chamar (SC)', 'OBC Communities',
];

const statesServed = ['Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Rajasthan', 'Jharkhand', 'Chhattisgarh', 'Uttarakhand', 'Delhi NCR', 'Haryana'];

export default function HindiBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #fdf6e3, #fef3c7)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">📜</div>
            <span className="section-tag">हिंदी बायोडेटा</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Hindi Marriage Biodata Format
              <span className="block text-2xl mt-2 text-red-700 font-normal">हिंदी विवाह बायोडेटा / जीवन परिचय</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Create a Hindi marriage biodata (शादी का बायोडेटा) with beautiful Devanagari headings
              and bilingual format. For UP, Bihar, MP, Rajasthan, Delhi — all Hindi-speaking states.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              📜 हिंदी बायोडेटा बनाएं (Free)
            </Link>
            <p className="text-sm text-gray-400 mt-3">Choose "Hindi / Devanagari" template on preview page</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6">
              Hindi Marriage Biodata – What to Include (क्या लिखें)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { h: 'व्यक्तिगत विवरण (Personal)', p: 'पूरा नाम, जन्म तिथि, जन्म समय, जन्म स्थान, कद, रंग, गोत्र, मंगलिक स्थिति। सभी हिंदी पंचांग संबंधी जानकारी जरूरी है।' },
                { h: 'गोत्र और मांगलिक (Gotra & Manglik)', p: 'Gotra is especially critical in UP and Bihar. Manglik status must be clearly mentioned. Pandit consultation often required before match finalization.' },
                { h: 'परिवार का विवरण (Family Details)', p: 'पिता का नाम एवं व्यवसाय, माता का नाम, भाई-बहन की जानकारी, पारिवारिक स्थिति। In Hindi-belt states, the family\'s social standing is very important.' },
                { h: 'शिक्षा और नौकरी (Education & Job)', p: 'Government jobs (IAS/PCS/Railway/Bank) are highly valued in UP and Bihar. Always mention exact government post and department if applicable.' },
                { h: 'जाति प्रमाण-पत्र (Caste Certificate)', p: 'For SC/ST/OBC candidates, caste certificate details may be relevant. Ensure caste name matches official records.' },
                { h: 'संपत्ति (Property)', p: 'In some families, agricultural land or property details are mentioned. Include only if your family expects or provides this information.' },
              ].map(({ h, p }) => (
                <div key={h} className="card p-5">
                  <h3 className="font-bold text-maroon-800 mb-2 text-sm">{h}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-amber-50/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6 text-center">
              Hindi-Speaking States & Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-maroon-800 mb-3 text-sm uppercase tracking-wide">States</h3>
                <div className="flex flex-wrap gap-2">
                  {statesServed.map(s => <span key={s} className="bg-red-50 border border-red-200 text-red-800 text-xs px-3 py-1 rounded-full">{s}</span>)}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-maroon-800 mb-3 text-sm uppercase tracking-wide">Communities</h3>
                <div className="flex flex-wrap gap-2">
                  {hindiCommunities.slice(0, 10).map(c => <span key={c} className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1 rounded-full">{c}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-600 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-maroon-900">
              हिंदी में बायोडेटा कैसे बनाएं – Complete Guide
            </h2>
            <p>
              <strong>बायोडेटा बनाना</strong> अब बहुत आसान हो गया है। EasyBiodataMaker.com पर आएं,
              4-step फॉर्म भरें, और <strong>Hindi / Devanagari template</strong> चुनें। आपका बायोडेटा
              PDF format में तैयार होगा — बिल्कुल मुफ्त!
            </p>
            <p>
              हमारा <strong>हिंदी विवाह बायोडेटा टेम्पलेट</strong> traditional Indian style में है,
              जिसमें Sanskrit invocation (ॐ श्री गणेशाय नमः), Devanagari headings, और सुंदर design है।
              UP, Bihar, Rajasthan, MP के सभी समुदायों के लिए उपयुक्त।
            </p>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-bold text-red-900 mb-2">हिंदी बायोडेटा बनाएं – Free!</h3>
              <Link href="/create" className="btn-primary text-sm">📜 अभी बनाएं (Create Now) →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
