import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sikh Marriage Biodata Free – Anand Karaj Vivah Biodata | EasyBiodataMaker',
  description: 'Create a Sikh Anand Karaj marriage biodata free. Gurmukhi header, got (gotra), Amritdhari status, NRI settlement details. Jat, Arora, Khatri, Ramgarhia all supported. PDF instantly.',
  keywords: ['sikh marriage biodata','anand karaj biodata','sikh vivah biodata free','punjabi sikh biodata','jat sikh biodata','arora khatri biodata','ramgarhia biodata','amritdhari biodata','sikh got biotra','nri sikh biodata canada uk','sikh biodata pdf free'],
  alternates: { canonical: 'https://easybiodatamaker.com/sikh-marriage-biodata' },
  openGraph: { title: 'Sikh Marriage Biodata Free – Anand Karaj · Gurmukhi Header', description: 'Free Sikh Anand Karaj biodata with ੴ Gurmukhi header. Got, Amritdhari status, NRI details. All Sikh communities.', url: 'https://easybiodatamaker.com/sikh-marriage-biodata' },
};

const aeoFaqs = [
  { question: 'Sikh marriage biodata mein kya hona chahiye jo Hindu biodata mein nahi hota?', answer: "Sikh biodata ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ se shuru hota hai. Hindu gotra ki jagah 'got' (ਗੋਤ) hota hai — Gill, Dhillon, Sandhu, Grewal, Sidhu wagereh. Iske alawa: kya candidate Amritdhari hai (panj kakkar wearing), Keshdhari hai, ya Sahajdhari (clean-shaven). Manglik Sikh tradition mein relevant nahi hota — that field can be left blank. Gurdwara affiliation is noted by some families." },
  { question: 'What is got in Sikh biodata and why does it matter?', answer: "Got is the Punjabi equivalent of gotra — the patrilineal clan identifier. For Jat Sikh families especially, same-got marriage is avoided. Common Jat Sikh gots: Gill, Dhillon, Sandhu, Grewal, Sidhu, Virk, Cheema, Chahal, Bajwa, Randhawa, Brar. For Arora and Khatri families, the got system is different and less strictly observed. Always include your got on a Sikh biodata — families will ask for it anyway." },
  { question: 'Does Amritdhari status really affect Sikh matrimonial matching?', answer: "Yes, for many families. An Amritdhari Sikh who has taken Amrit (the initiation ceremony) and keeps all five Ks generally prefers an Amritdhari partner. This is not universal — plenty of Amritdhari families are open to Keshdhari partners. But a family that is Amritdhari and strongly practising may find a clean-shaven partner from a non-religious background a poor cultural fit. It is better to be honest about this upfront than create expectations that cannot be met." },
  { question: 'NRI Sikh biodata mein extra kya likhein?', answer: "Canada, UK, USA, Australia, New Zealand mein bahut bade Punjabi Sikh communities hain. NRI Sikh biodata mein: desh aur province/city clearly likhein (British Columbia vs Ontario is important for Canada-based families), PR/citizenship/visa status, income in local currency with INR equivalent, aur kya India wapas aana chahte hain ya permanently abroad settle hain. Bahut si Sikh families India mein specifically settled NRI groom ya bride dhundh rahi hoti hain." },
  { question: 'Jat Sikh aur Arora Sikh biodata mein kya fark hota hai?', answer: "Jat Sikhs are traditionally a farming community and the largest Sikh group. Aroras and Khatris are traditionally business and trading communities. The got system is more strictly observed among Jat Sikhs. For Arora and Khatri Sikh families, the same-got rule is less rigid and sometimes family-specific. Both communities are Sikh and follow Anand Karaj, but their matrimonial cultures differ. Specify your community (Jat Sikh, Arora, Khatri, Ramgarhia, etc.) clearly in the caste/sub-caste field." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function SikhBiodataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🌾</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Sikh Marriage Biodata
              <span className="block text-xl mt-2 text-blue-700 font-normal">ਵਿਆਹ ਬਾਇਓਡੇਟਾ · Anand Karaj · Free</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our Punjabi Royal Blue template opens with ੴ ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ and uses Gurmukhi headers. Covers got, Amritdhari status, and NRI details. Jat, Arora, Khatri, Ramgarhia — all communities.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">🌾 Create Sikh Biodata — Free</Link>
            <p className="text-sm text-gray-400 mt-3">On preview page, pick &ldquo;Punjabi Royal&rdquo; template</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Sikh Biodata Mein Jo Fields Sabse Pehle Check Hote Hain</h2>
            <p><strong>Got</strong> — Jat Sikh families ke liye yeh first check hai. Same got mein shadi nahi hoti. Common gots: Gill, Dhillon, Sandhu, Grewal, Sidhu, Virk, Cheema, Bajwa, Randhawa. Apna got clearly mention karein.</p>
            <p><strong>Amritdhari status</strong> — Kya candidate ne Amrit chhakaya hai? Kya panj kakkar pehnte hain? Religious families ke liye yeh important hai. Honest answer dein — expectations pehle clear hona better hai.</p>
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">NRI Sikh Biodata — Canada, UK, USA Ke Liye</h3>
              <p>Bahut badi Punjabi community Canada (BC, Ontario), UK (Birmingham, Southall), USA (California, New York), aur Australia mein hai. NRI biodata mein: province/city clearly likhein, PR ya citizenship status likhein, income dono currencies mein, aur India wapas aane ka koi plan hai ya nahi. Bahut si families India mein settled NRI matches dhundh rahi hoti hain.</p>
            </div>
            <h2 className="font-display text-2xl font-bold text-maroon-900">Communities This Works For</h2>
            <div className="flex flex-wrap gap-2">
              {['Jat Sikh','Arora','Khatri','Ramgarhia','Ramdasia','Saini','Bhatia','Labana','Gujjar Sikh','Rai Sikh'].map(c => (
                <span key={c} className="bg-blue-50 border border-blue-200 text-blue-800 text-xs px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <Link href="/create" className="btn-primary text-sm">🌾 Sikh Biodata Banao — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Sikh Biodata — Sawaal Te Jawab" ctaHref="/create" ctaText="Create Sikh Biodata Free" />
      </main>
      <Footer />
    </div>
  );
}
