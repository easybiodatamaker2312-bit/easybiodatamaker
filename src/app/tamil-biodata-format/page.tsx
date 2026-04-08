import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tamil Marriage Biodata Format | South Indian Biodata Free | EasyBiodataMaker',
  description:
    'Create Tamil marriage biodata online for free. South Indian format with star/nakshatra, rashi, kula deivam details. Brahmin, Mudaliar, Nadar, Chettiar communities. Download PDF.',
  alternates: { canonical: 'https://easybiodatamaker.com/tamil-biodata-format' },
  keywords: [
    'tamil marriage biodata format',
    'south indian biodata format',
    'tamil biodata maker free',
    'tamil brahmin biodata format',
    'iyer biodata format',
    'iyengar biodata format',
    'mudaliar biodata format',
    'nadar biodata format',
    'chettiar biodata format marriage',
    'tamil biodata with nakshatra',
    'tamil jathagam biodata',
    'kula deivam biodata tamil',
    'tamil biodata pdf download',
    'chennai marriage biodata',
    'coimbatore marriage biodata',
    'south indian biodata free download',
  ],
  openGraph: {
    title: 'Tamil / South Indian Marriage Biodata – Free PDF',
    url: 'https://easybiodatamaker.com/tamil-biodata-format',
  },
};

export default function TamilBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #faf5ff, #ede9fe)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌺</div>
            <span className="section-tag">Tamil Biodata</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Tamil / South Indian Marriage Biodata
              <span className="block text-2xl mt-2 text-purple-700 font-normal">திருமண பரிச்சயம் | Marriage Profile</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Create a Tamil marriage biodata with all South Indian fields — nakshatra, rashi, kula
              deivam, sub-caste. For Brahmin (Iyer/Iyengar), Mudaliar, Nadar, Chettiar & all communities.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🌺 Create Tamil Biodata Free
            </Link>
            <p className="text-sm text-gray-400 mt-3">Select "South Indian" template on preview page</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-5 text-sm text-gray-600 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Tamil Marriage Biodata – Essential Fields
            </h2>
            {[
              { h: 'நட்சத்திரம் (Nakshatra / Star)', p: 'The birth star is the most important field in a Tamil marriage biodata. It determines astrological compatibility (10 porutham matching). Include Rasi (moon sign) alongside Nakshatra.' },
              { h: 'கோத்திரம் (Gothram)', p: 'For Brahmin communities, gothram is mandatory. Tamil Brahmin gotras: Bharadwaj, Kashyap, Vatsa, Kaundinya, Atreya, Harita, Agnivesya are common.' },
              { h: 'குல தெய்வம் (Kula Deivam)', p: 'Family deity is very significant in Tamil tradition. Common kula deivams: Murugan, Mariamman, Kali, Angalamman, Ayyanar. Families may check if kula deivams are compatible.' },
              { h: 'ஜாதி (Caste / Subcaste)', p: 'Specify: Iyer (specify shakha), Iyengar (Vadakalai/Thenkalai), Mudaliar (Saiva/Vellala), Pillai, Chettiar (Nattukotai/Nagapattinam), Nadar, Gounder, Thevar, Vanniyar.' },
              { h: 'Lagnam (Ascendant)', p: 'Some Tamil families ask for Lagnam (ascendant sign) in addition to Rasi and Nakshatra for horoscope matching.' },
              { h: 'NRI Tamil Biodata', p: 'A large Tamil diaspora exists in Singapore, Malaysia, USA, Canada, UK, Australia, and Middle East. Clearly mention country, PR/Citizenship, and job sector.' },
            ].map(({ h, p }) => (
              <div key={h} className="card p-5">
                <h3 className="font-bold text-purple-900 mb-2">{h}</h3>
                <p>{p}</p>
              </div>
            ))}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="font-bold text-purple-900 mb-2">Create Tamil Biodata – Free!</h3>
              <Link href="/create" className="btn-primary text-sm">🌺 Create South Indian Biodata →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
