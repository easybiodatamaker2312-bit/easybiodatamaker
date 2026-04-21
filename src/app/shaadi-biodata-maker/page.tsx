import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shaadi Biodata Maker Free Online – बायोडेटा बनाएं 5 मिनट में | EasyBiodataMaker',
  description:
    'Shaadi ka biodata online banao — bilkul free, bina registration ke. 10 templates, 7 Indian languages, photo upload, PDF download. 5 minutes. EasyBiodataMaker.com.',
  keywords: [
    'shaadi biodata maker',
    'shaadi biodata maker free',
    'shaadi ka biodata online banana',
    'shaadi biodata kaise banaye',
    'best shaadi biodata maker india',
    'shaadi biodata format free download',
    'free shaadi biodata online',
    'shaadi biodata pdf free',
    'shaadi biodata banane wala app free',
    'shaadi biodata template hindi',
    'online shaadi biodata generator india',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/shaadi-biodata-maker' },
  openGraph: {
    title: 'Shaadi Biodata Maker Free – बायोडेटा बनाएं 5 मिनट में',
    description: 'Free shaadi biodata maker. 10 templates, 7 languages, photo upload, PDF download. No login. EasyBiodataMaker.com.',
    url: 'https://easybiodatamaker.com/shaadi-biodata-maker',
  },
};

const aeoFaqs = [
  {
    question: 'Shaadi ka biodata online free mein kaise banaye?',
    answer: 'EasyBiodataMaker.com par jaiye → "Create Biodata" click kariye → apni language chuniye (Hindi, Gujarati, Marathi, Punjabi, etc.) → 4-step form bhariye (personal, family, education, contact) → photos upload kariye → 10 templates mein se apna pasandida chuniye → PDF download kariye. Koi registration nahi, koi charge nahi.',
  },
  {
    question: 'Shaadi biodata mein kya kya likhna chahiye?',
    answer: "Pura naam, janm tithi, janm samay, janm sthan, unchai, complexion, dharm, jati, gotra (Hindu families ke liye), manglik sthiti, pita-mata ka naam aur vyavsay, bhai-behen, shiksha, naukri, annual income (range mein), shehar aur rajya, phone number, aur jeevan saathi se apeksha.",
  },
  {
    question: 'Kya EasyBiodataMaker par bana biodata WhatsApp par share ho sakta hai?',
    answer: "Haan, bilkul. PDF file bahut halki hoti hai — usually 1-2 MB. WhatsApp par document ki tarah share karein. Direct phone par bhi save karke print kara sakte hain. PDF format isliye best hai kyunki har device par bilkul usi tarah dikhta hai jaise banaya gaya tha — Word format mein aisa nahi hota.",
  },
  {
    question: 'Shaadi biodata mein photo kaise daalen?',
    answer: "Preview page par jaiye, sidebar mein 'Upload Photo' section milega. Wahan se 3 tak photos upload kar sakte hain — JPG ya PNG format mein. Photos directly biodata template par show hongi. Natural, smiling photo passport photo se behtar hoti hai.",
  },
  {
    question: 'Shaadi biodata maker apps vs website — kya fark hai?',
    answer: "App download karna padta hai, storage leti hai, aur updates aate rehte hain. Website seedha browser mein kaam karta hai — koi download nahi, koi storage nahi. EasyBiodataMaker.com mobile par bhi perfectly kaam karta hai bina app download kiye. PDF bhi turant milta hai.",
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

export default function ShaadiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />

      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">🎊</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-5 leading-tight">
              Shaadi Biodata Maker Free
              <span className="block text-xl mt-2 text-saffron-600 font-normal">
                5 मिनट · No Login · 10 Templates · 7 Languages
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              शादी का बायोडेटा बनाना अब बहुत आसान है। Form भरो, template चुनो, PDF download करो।
              Gujarati, Marathi, Hindi, Punjabi — अपनी भाषा में। बिल्कुल free।
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              🎊 Biodata Banao — Free
            </Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              EasyBiodataMaker दूसरे tools से अलग क्यों है
            </h2>

            <p>
              बहुत से biodata websites registration माँगती हैं, email verification होती है,
              फिर premium template के लिए पैसे लगते हैं। यहाँ ऐसा नहीं है।
            </p>

            <p>
              EasyBiodataMaker पर आप directly form भरते हैं, template चुनते हैं, और PDF
              download होती है। कोई account नहीं, कोई email verification नहीं, कोई watermark नहीं
              जो important content पर हो, कोई charge नहीं।
            </p>

            <div className="bg-amber-50 border-l-4 border-saffron-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">आपका Data कहाँ जाता है?</h3>
              <p>
                कहीं नहीं। आपके browser के session storage में रहता है। Tab बंद हुई तो data
                गया। कोई server नहीं, कोई database नहीं। आपकी personal जानकारी — नाम, DOB,
                family details — हम तक पहुँचती ही नहीं।
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900">
              10 Templates — हर Community के लिए
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { emoji: '🕉️', name: 'Classic Saffron', desc: 'Traditional, saffron-maroon. सभी Hindu communities.' },
                { emoji: '👑', name: 'Royal Navy Gold', desc: 'Dark navy with gold. Senior professionals, NRIs.' },
                { emoji: '🌸', name: 'Rose Bloom', desc: 'Pink floral, oval photo frame. Girls ke liye popular.' },
                { emoji: '✦', name: 'Emerald Modern', desc: 'Clean white-green. IT professionals, urban families.' },
                { emoji: '🪔', name: 'Gujarati Navratri', desc: 'Red-green-gold stripes. ગુજ + English headings.' },
                { emoji: '🌼', name: 'Marathi Wari', desc: 'Orange Ganpati. मराठी + English headings.' },
                { emoji: '📜', name: 'Hindi Shaadi', desc: 'Double border, gold accents. हिंदी headings.' },
                { emoji: '🌺', name: 'Purple Temple', desc: 'Royal purple. South Indian families.' },
                { emoji: '☪️', name: 'Islamic Green', desc: 'Bismillah header, deep green. Muslim families.' },
                { emoji: '🌾', name: 'Punjabi Royal', desc: 'Royal blue. ਪੰਜਾਬੀ + English headings. Sikh families.' },
              ].map(({ emoji, name, desc }) => (
                <div key={name} className="flex gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100">
                  <span className="text-xl flex-shrink-0">{emoji}</span>
                  <div>
                    <div className="font-bold text-maroon-800 text-xs">{name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 rounded-2xl p-6 text-white text-center mt-4">
              <h2 className="font-display text-xl font-bold mb-3">अभी बनाएं — Free</h2>
              <p className="text-amber-200/80 text-sm mb-4">No login · 10 templates · 7 languages · Photo upload · Instant PDF</p>
              <Link href="/create" className="btn-primary">Biodata Banao →</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Shaadi Biodata — Sawaal Jawab" ctaHref="/create" ctaText="Biodata Banao Free" />
      </main>

      <Footer />
    </div>
  );
}
