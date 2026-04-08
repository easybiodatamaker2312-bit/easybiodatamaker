import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Punjabi Marriage Biodata | Sikh Anand Karaj Biodata Free | EasyBiodataMaker',
  description:
    'Create Punjabi / Sikh marriage biodata for Anand Karaj online free. Punjabi + English bilingual format. Jat Sikh, Arora, Khatri, Ramgarhia communities. Download PDF instantly.',
  alternates: { canonical: 'https://easybiodatamaker.com/punjabi-biodata-format' },
  keywords: [
    'punjabi marriage biodata format',
    'sikh marriage biodata',
    'anand karaj biodata',
    'punjabi biodata maker free',
    'jat sikh biodata format',
    'arora khatri biodata format',
    'ramgarhia sikh biodata',
    'punjabi biodata pdf download',
    'sikh biodata in punjabi',
    'punjabi vivah biodata',
    'punjab marriage biodata format',
    'NRI sikh biodata format',
    'amritdhari sikh biodata',
    'ludhiana marriage biodata',
    'chandigarh biodata format',
  ],
  openGraph: {
    title: 'Punjabi / Sikh Marriage Biodata – Free PDF Download',
    url: 'https://easybiodatamaker.com/punjabi-biodata-format',
  },
};

export default function PunjabiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-14 px-4 border-b" style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌾</div>
            <span className="section-tag">ਪੰਜਾਬੀ ਬਾਇਓਡੇਟਾ</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5 leading-tight">
              Punjabi / Sikh Marriage Biodata
              <span className="block text-2xl mt-2 text-blue-700 font-normal">ਵਿਆਹ ਬਾਇਓਡੇਟਾ | Anand Karaj Biodata</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Create a Punjabi / Sikh marriage biodata with bilingual Punjabi + English format.
              Includes Gurmukhi headings, gotra, and all Sikh community fields. Free PDF download.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🌾 ਬਾਇਓਡੇਟਾ ਬਣਾਓ (Create Free)
            </Link>
            <p className="text-sm text-gray-400 mt-3">Select "Punjabi / Sikh" template on preview page</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-5 text-sm text-gray-600 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-maroon-900">
              Sikh Marriage Biodata – What to Include
            </h2>
            {[
              { h: 'Gurmukhi / Punjabi Opening', p: 'Begin with ੴ (Ik Onkar) — the most sacred symbol in Sikhism. Our Punjabi template opens with "ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ".' },
              { h: 'Gotra / Got', p: 'Gotra (called "Got" in Punjabi) is essential for Jat Sikh and other communities. Popular gots: Gill, Dhillon, Sandhu, Grewal, Sidhu, Virk, Cheema, Chahal.' },
              { h: 'Sikh Identity', p: 'Mention if Amritdhari (initiated) Sikh — this is important for religious compatibility. Also mention if Keshdhari or Mona (clean-shaven). Specify Gurdwara affiliation if relevant.' },
              { h: 'NRI / Foreign Settlement', p: 'A large percentage of Punjabi Sikhs are settled abroad. Clearly mention country (Canada, UK, USA, Australia, UAE), PR/Citizenship status, and current occupation.' },
              { h: 'Profession in Punjab Context', p: 'Government jobs (Punjab Police IPS, Army officer ranks), farming landholding, business type. Agricultural land holdings are mentioned in many Jat Sikh biodatas.' },
              { h: 'Sub-Community', p: 'Jat Sikh, Arora, Khatri, Ramgarhia, Ramdasia, Saini, Labana, Lohar, Nai Sikh — specify clearly as some communities prefer intra-community matches.' },
            ].map(({ h, p }) => (
              <div key={h} className="card p-5">
                <h3 className="font-bold text-blue-900 mb-2">{h}</h3>
                <p>{p}</p>
              </div>
            ))}

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">ਪੰਜਾਬੀ ਬਾਇਓਡੇਟਾ ਬਣਾਓ – Free!</h3>
              <Link href="/create" className="btn-primary text-sm">🌾 Create Punjabi Biodata →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
