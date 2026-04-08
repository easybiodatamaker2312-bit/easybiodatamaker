import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { FileText, Download, Shield, Zap, Star, CheckCircle, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EasyBiodataMaker – Free Marriage Biodata Maker | 10 Templates | All Languages',
  description:
    'Create marriage biodata online for free. 10 beautiful templates — Classic, Royal, Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali. No login. Instant PDF download. India\'s best free biodata maker.',
  keywords: [
    'biodata maker for marriage', 'marriage biodata format India', 'free biodata maker online',
    'gujarati biodata maker', 'marathi biodata maker', 'hindi biodata maker',
    'punjabi biodata maker', 'tamil biodata maker', 'bengali biodata maker',
    'marriage biodata all languages', 'free biodata template all communities',
    'shaadi biodata maker free', 'biodata PDF download free', 'online biodata maker india',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com' },
};

const features = [
  { icon: FileText, title: '10 Free Templates', desc: 'Classic, Royal, Rose, Gujarati, Marathi, Hindi, Punjabi, Tamil, Islamic & Modern' },
  { icon: Download, title: 'Instant PDF', desc: 'Download A4 PDF in seconds, ready to share on WhatsApp or email' },
  { icon: Shield, title: 'No Login', desc: '100% private — your data stays in your browser, never on servers' },
  { icon: Globe, title: 'All Languages', desc: 'Bilingual templates: Gujarati, Marathi, Hindi, Punjabi, Tamil + English' },
  { icon: Zap, title: 'Photo Upload', desc: 'Upload up to 3 photos that appear on your biodata template' },
  { icon: Star, title: 'All Communities', desc: 'Hindu, Muslim, Sikh, Christian, Jain — all castes and sub-communities' },
];

const templates = [
  { emoji: '🕉️', name: 'Classic Indian', lang: 'English', color: 'bg-amber-100 border-amber-300' },
  { emoji: '👑', name: 'Royal Gold', lang: 'English', color: 'bg-yellow-100 border-yellow-300' },
  { emoji: '🌸', name: 'Rose Garden', lang: 'English', color: 'bg-pink-100 border-pink-300' },
  { emoji: '✦', name: 'Modern Minimal', lang: 'English', color: 'bg-slate-100 border-slate-300' },
  { emoji: '🪔', name: 'Gujarati Festive', lang: 'ગુજરાતી + English', color: 'bg-orange-100 border-orange-300' },
  { emoji: '🌼', name: 'Marathi Tradition', lang: 'मराठी + English', color: 'bg-red-100 border-red-300' },
  { emoji: '📜', name: 'Hindi/Devanagari', lang: 'हिंदी + English', color: 'bg-rose-100 border-rose-300' },
  { emoji: '🌺', name: 'South Indian', lang: 'Tamil/Telugu', color: 'bg-purple-100 border-purple-300' },
  { emoji: '☪️', name: 'Islamic Nikah', lang: 'Arabic + English', color: 'bg-green-100 border-green-300' },
  { emoji: '🌾', name: 'Punjabi/Sikh', lang: 'ਪੰਜਾਬੀ + English', color: 'bg-blue-100 border-blue-300' },
];

const languages = [
  { flag: '🪔', lang: 'Gujarati', script: 'ગુજરાતી', href: '/gujarati-biodata-format', kw: 'Lagna Biodata' },
  { flag: '🌼', lang: 'Marathi', script: 'मराठी', href: '/marathi-biodata-format', kw: 'Vivah Biodata' },
  { flag: '📜', lang: 'Hindi', script: 'हिंदी', href: '/hindi-biodata-format', kw: 'Shaadi Biodata' },
  { flag: '🌾', lang: 'Punjabi', script: 'ਪੰਜਾਬੀ', href: '/punjabi-biodata-format', kw: 'Vivah Biodata' },
  { flag: '🌺', lang: 'Tamil', script: 'தமிழ்', href: '/tamil-biodata-format', kw: 'Thirumanam' },
  { flag: '🪷', lang: 'Bengali', script: 'বাংলা', href: '/bengali-biodata-format', kw: 'Bibaho Biodata' },
];

const testimonials = [
  { name: 'Priya P.', city: 'Ahmedabad', text: 'The Gujarati template was perfect! Loved the bilingual format. Downloaded in 3 minutes.', rating: 5 },
  { name: 'Rahul S.', city: 'Pune', text: 'Used the Marathi template — exactly what we needed. No registration, no fuss. Excellent!', rating: 5 },
  { name: 'Anjali K.', city: 'Delhi', text: 'Hindi template with Devanagari headings — looked very traditional. Parents loved it!', rating: 5 },
  { name: 'Harpreet S.', city: 'Ludhiana', text: 'Punjabi/Sikh template with Gurmukhi was beautiful. Sharing on WhatsApp worked great.', rating: 5 },
  { name: 'Kavya R.', city: 'Chennai', text: 'South Indian template with purple design was elegant. Perfect for our family.', rating: 5 },
  { name: 'Imran K.', city: 'Hyderabad', text: 'Islamic Nikah template with Bismillah header was exactly what I was looking for!', rating: 5 },
];

const steps = [
  { n: '01', title: 'Fill 4-Step Form', desc: 'Enter personal, family, education & contact details in our simple guided form' },
  { n: '02', title: 'Upload Photos', desc: 'Add up to 3 photos. They appear directly on your biodata template' },
  { n: '03', title: 'Choose Template', desc: 'Pick from 10 templates — classic, community-specific, or language-based' },
  { n: '04', title: 'Download PDF', desc: 'Get your professional A4 biodata PDF instantly. Share on WhatsApp or print' },
];

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'EasyBiodataMaker',
    url: 'https://easybiodatamaker.com',
    applicationCategory: 'LifestyleApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    description: 'Free online marriage biodata maker with 10 templates in multiple Indian languages',
    featureList: ['10 free templates', 'Photo upload', 'PDF download', 'Gujarati template', 'Marathi template', 'Hindi template', 'Punjabi template', 'Tamil template'],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-16 pb-24">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f38e13 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-saffron-100 text-saffron-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-saffron-200">
            🎊 10 Templates · All Languages · 100% Free · No Login
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-maroon-900 leading-tight mb-6">
            Create Marriage Biodata
            <span className="block text-saffron-500">Online Free</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            India's #1 free marriage biodata maker with <strong>10 beautiful templates</strong> in
            Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali & English. Photo upload included.
          </p>
          {/* Language chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['🪔 ગુજરાતી', '🌼 मराठी', '📜 हिंदी', '🌾 ਪੰਜਾਬੀ', '🌺 தமிழ்', '🪷 বাংলা', '☪️ Nikah', '✦ Modern'].map(l => (
              <span key={l} className="bg-white/80 border border-amber-200 text-maroon-700 text-xs font-semibold px-3 py-1.5 rounded-full">{l}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="btn-primary text-lg px-8 py-4">✨ Create Your Biodata Free</Link>
            <Link href="/templates" className="btn-secondary text-lg px-8 py-4">👁 See All 10 Templates</Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400 flex-wrap">
            {['No registration', '10 free templates', 'Photo upload', 'Instant PDF'].map(t => (
              <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-saffron-500" /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-tag">10 Free Templates</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-900">
              Beautiful Biodata Templates for Every Community
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">All templates are free. Choose based on your community, language preference, or aesthetic taste.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {templates.map(({ emoji, name, lang, color }) => (
              <Link key={name} href="/create" className={`card p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all border-2 ${color}`}>
                <div className="text-3xl mb-2">{emoji}</div>
                <div className="font-bold text-maroon-800 text-sm leading-tight">{name}</div>
                <div className="text-xs text-gray-400 mt-1">{lang}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/templates" className="btn-secondary">View All Templates →</Link>
          </div>
        </div>
      </section>

      {/* LANGUAGE PAGES */}
      <section className="py-20 bg-amber-50/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-tag">All Languages</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-900">
              Biodata in Your Language
            </h2>
            <p className="text-gray-500 mt-3">Bilingual templates with your regional language headings + English content</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {languages.map(({ flag, lang, script, href, kw }) => (
              <Link key={lang} href={href} className="card p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all group">
                <div className="text-2xl mb-2">{flag}</div>
                <div className="font-bold text-maroon-800 group-hover:text-saffron-600 transition-colors">{lang}</div>
                <div className="text-sm text-gray-500">{script}</div>
                <div className="text-xs text-saffron-500 mt-2 font-medium">{kw} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-tag">4 Simple Steps</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-900">Ready in Under 5 Minutes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-400 to-maroon-700 text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg">{n}</div>
                <h3 className="font-display font-bold text-lg text-maroon-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/create" className="btn-primary text-lg px-10 py-4">Start Creating Now →</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-amber-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-900">Everything You Need</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-saffron-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-saffron-600" size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-maroon-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-maroon-900">Loved by Families Across India</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map(({ name, city, text, rating }) => (
              <div key={name} className="card p-5">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(rating)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">"{text}"</p>
                <div className="font-semibold text-maroon-800 text-sm">{name}</div>
                <div className="text-xs text-gray-400">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-16 bg-amber-50/40 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
            India's Best Free Marriage Biodata Maker – All Communities, All Languages
          </h2>
          <div className="prose prose-gray text-gray-600 text-sm leading-relaxed space-y-3 max-w-none">
            <p>EasyBiodataMaker.com offers <strong>10 completely free marriage biodata templates</strong> — more than any other biodata maker in India. Whether you need a traditional <strong>Hindu marriage biodata format</strong>, a <strong>Gujarati lagna biodata</strong> (ગુજરાતી લગ્ન બાયોડેટા), a <strong>Marathi vivah biodata</strong> (मराठी विवाह बायोडेटा), a <strong>Hindi shaadi biodata</strong> (हिंदी शादी बायोडेटा), or a <strong>Punjabi vivah biodata</strong> (ਵਿਆਹ ਬਾਇਓਡੇਟਾ), we have the perfect template for you.</p>
            <p>Our <strong>South Indian / Tamil biodata format</strong> includes nakshatra, rashi, and kula deivam fields. Our <strong>Islamic Nikah biodata</strong> opens with Bismillah. Our <strong>Bengali bibaho biodata</strong> supports kulin status and gotra. All templates are bilingual — regional language headings with English fields.</p>
            <p>Unlike other <strong>free biodata makers</strong>, EasyBiodataMaker includes <strong>photo upload</strong> (up to 3 photos), multi-template selection, and generates a high-resolution A4 PDF instantly. No registration, no watermark on any field, no hidden charges. Just create, preview, and download your <strong>marriage biodata as PDF</strong> — completely free.</p>
          </div>

          {/* Language quick links for SEO */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { text: 'Gujarati Biodata', href: '/gujarati-biodata-format' },
              { text: 'Marathi Biodata', href: '/marathi-biodata-format' },
              { text: 'Hindi Biodata', href: '/hindi-biodata-format' },
              { text: 'Punjabi Biodata', href: '/punjabi-biodata-format' },
              { text: 'Tamil Biodata', href: '/tamil-biodata-format' },
              { text: 'Bengali Biodata', href: '/bengali-biodata-format' },
              { text: 'Hindu Biodata', href: '/hindu-marriage-biodata-format' },
              { text: 'Muslim Nikah Biodata', href: '/muslim-marriage-biodata-format' },
              { text: 'How to Make Biodata', href: '/how-to-make-biodata-for-marriage' },
              { text: 'Free Biodata Download', href: '/free-biodata-format-download' },
            ].map(({ text, href }) => (
              <Link key={href} href={href} className="text-xs bg-white border border-amber-200 text-saffron-700 px-3 py-1.5 rounded-full hover:border-saffron-400 transition-colors font-medium">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-maroon-800 to-maroon-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Create Your Marriage Biodata Today</h2>
          <p className="text-amber-200/80 mb-8">10 templates · Photo upload · All languages · 100% free · Instant PDF</p>
          <Link href="/create" className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-xl">
            🎊 Create Free Biodata Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
