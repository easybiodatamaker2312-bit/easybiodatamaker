import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock, AEODefinition, AEOQuickAnswer, AEOStats } from '@/components/ui/AEOBlock';
import { CheckCircle, Star, Download, Shield, Globe, FileText } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://easybiodatamaker.com'),
  title: 'Free Marriage Biodata Maker Online India 2024 – 10 Templates | EasyBiodataMaker',
  description:
    'Create professional marriage biodata online FREE in 5 minutes. 10 beautiful templates in 7 Indian languages – Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali, English. Photo upload, custom fields, instant A4 PDF. No login. Best free biodata maker India 2024.',
  keywords: [
    'biodata maker for marriage','free biodata maker online india','shaadi biodata maker',
    'marriage biodata format india','online biodata maker no login','free biodata pdf download',
    'biodata maker gujarati','biodata maker marathi','biodata maker hindi',
    'marriage biodata maker free 2024','shaadi ka biodata kaise banaye','lagna biodata online free',
    'free biodata format for marriage','marriage biodata with photo upload','biodata all languages india',
    'create biodata online without registration','best free biodata maker india',
    'biodata for marriage girl free','biodata for marriage boy free',
    'professional marriage biodata pdf india',
  ],
  alternates: {
    canonical: 'https://easybiodatamaker.com',
    languages: {
      'en-IN': 'https://easybiodatamaker.com',
      'gu-IN': 'https://easybiodatamaker.com/gujarati-biodata-format',
      'mr-IN': 'https://easybiodatamaker.com/marathi-biodata-format',
      'hi-IN': 'https://easybiodatamaker.com/hindi-biodata-format',
      'pa-IN': 'https://easybiodatamaker.com/punjabi-biodata-format',
      'ta-IN': 'https://easybiodatamaker.com/tamil-biodata-format',
      'bn-IN': 'https://easybiodatamaker.com/bengali-biodata-format',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://easybiodatamaker.com',
    siteName: 'EasyBiodataMaker',
    title: 'Free Marriage Biodata Maker – 10 Templates, 7 Languages, Photo Upload',
    description: 'Create marriage biodata online free. 10 templates, 7 languages, photo upload, custom fields, instant PDF. No login.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EasyBiodataMaker Free Marriage Biodata Maker' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@easybiodata',
    title: 'EasyBiodataMaker – Free Marriage Biodata Maker India',
    description: '10 templates · 7 languages · Photo upload · Custom fields · Instant PDF · No login',
    images: ['/og-image.png'],
  },
};

// ── Structured Data ────────────────────────────────────────────────────────────

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is EasyBiodataMaker?', acceptedAnswer: { '@type': 'Answer', text: 'EasyBiodataMaker.com is a free online marriage biodata maker for Indian families. It offers 10 beautiful templates in 7 languages (Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali, English), photo upload, custom fields, and instant A4 PDF download — all without registration.' } },
    { '@type': 'Question', name: 'Is EasyBiodataMaker really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, EasyBiodataMaker is 100% free. All 10 templates, photo upload, unlimited custom fields, and PDF download are available at no cost, with no hidden charges, no subscription, and no credit card required.' } },
    { '@type': 'Question', name: 'How do I create a marriage biodata online?', acceptedAnswer: { '@type': 'Answer', text: 'Visit EasyBiodataMaker.com, click "Create Biodata", fill the 4-step form (personal details, family details, education & career, contact details), upload photos, choose from 10 templates, and download your PDF — in under 5 minutes.' } },
    { '@type': 'Question', name: 'Which languages does EasyBiodataMaker support?', acceptedAnswer: { '@type': 'Answer', text: 'EasyBiodataMaker supports 7 Indian languages: English, Gujarati (ગુજરાતી), Marathi (मराठी), Hindi (हिंदी), Punjabi (ਪੰਜਾਬੀ), Tamil (தமிழ்), and Bengali (বাংলা). All form labels switch to your chosen language automatically.' } },
    { '@type': 'Question', name: 'Is my personal data safe on EasyBiodataMaker?', acceptedAnswer: { '@type': 'Answer', text: 'Your data is completely safe. EasyBiodataMaker processes all data in your browser only — your personal information never reaches our servers. There is zero data collection, no database storage, and no risk of your biodata being shared with anyone.' } },
    { '@type': 'Question', name: 'Can I upload photos to my biodata?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! You can upload up to 3 photos on the preview page. Photos appear beautifully on your chosen template. Supported formats: JPG and PNG.' } },
    { '@type': 'Question', name: 'What is a marriage biodata?', acceptedAnswer: { '@type': 'Answer', text: 'A marriage biodata (also called shaadi biodata, lagna biodata, or vivah biodata) is a one-page document presenting personal, family, educational, and professional information about a person seeking marriage in India. It includes details like name, age, height, religion, caste, gotra, education, career, and contact information.' } },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Create a Marriage Biodata Online Free',
  description: 'clear, numbered guide to creating a professional Indian marriage biodata using EasyBiodataMaker.com',
  totalTime: 'PT5M',
  supply: [{ '@type': 'HowToSupply', name: 'Internet connection' }, { '@type': 'HowToSupply', name: 'Personal information and family details' }],
  tool: [{ '@type': 'HowToTool', name: 'EasyBiodataMaker.com — free online tool' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Choose Language', text: 'Select your preferred language from 7 options: English, Gujarati, Marathi, Hindi, Punjabi, Tamil, or Bengali. All form labels will switch automatically.' },
    { '@type': 'HowToStep', position: 2, name: 'Fill Personal Details', text: 'Enter your name, date of birth, time of birth, place of birth, height, weight, complexion, blood group, religion, caste, gotra, and manglik status.' },
    { '@type': 'HowToStep', position: 3, name: 'Add Family Details', text: 'Enter your father\'s and mother\'s names and occupations, number of siblings, family type, native place, and maternal gotra.' },
    { '@type': 'HowToStep', position: 4, name: 'Add Education & Career', text: 'Enter your highest qualification, college, current occupation, organization, designation, annual income range, and work location.' },
    { '@type': 'HowToStep', position: 5, name: 'Add Contact Details & Custom Fields', text: 'Enter your address, mobile number, and email. Add unlimited custom fields for any extra information like Kundali ID or property details.' },
    { '@type': 'HowToStep', position: 6, name: 'Upload Photos & Choose Template', text: 'Upload up to 3 photos and choose from 10 beautiful templates — Classic Saffron, Royal Navy Gold, Rose Bloom, Emerald Modern, Gujarati Navratri, Marathi Wari, Hindi Shaadi, Purple Temple, Islamic Green, or Punjabi Royal.' },
    { '@type': 'HowToStep', position: 7, name: 'Download PDF', text: 'Click "Download PDF" to get your high-resolution A4 biodata PDF instantly. Share on WhatsApp, email, or print.' },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'EasyBiodataMaker — Free Marriage Biodata Maker Online India',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#speakable-summary', '#speakable-features', '.aeo-definition'],
  },
};

const templates = [
  { emoji: '🕉️', name: 'Classic Saffron', community: 'All Hindu', bg: 'bg-amber-50 border-amber-300' },
  { emoji: '👑', name: 'Royal Navy Gold', community: 'All', bg: 'bg-yellow-50 border-yellow-300' },
  { emoji: '🌸', name: 'Rose Bloom', community: 'Girls / All', bg: 'bg-pink-50 border-pink-300' },
  { emoji: '✦', name: 'Emerald Modern', community: 'Urban / NRI', bg: 'bg-emerald-50 border-emerald-300' },
  { emoji: '🪔', name: 'Gujarati Navratri', community: 'Gujarati', bg: 'bg-orange-50 border-orange-300' },
  { emoji: '🌼', name: 'Marathi Wari', community: 'Marathi', bg: 'bg-red-50 border-red-300' },
  { emoji: '📜', name: 'Hindi Shaadi', community: 'Hindi Speaking', bg: 'bg-rose-50 border-rose-300' },
  { emoji: '🌺', name: 'Purple Temple', community: 'South Indian', bg: 'bg-violet-50 border-violet-300' },
  { emoji: '☪️', name: 'Islamic Green', community: 'Muslim', bg: 'bg-green-50 border-green-300' },
  { emoji: '🌾', name: 'Punjabi Royal', community: 'Punjabi / Sikh', bg: 'bg-blue-50 border-blue-300' },
];

const langs = [
  { flag: '🪔', lang: 'Gujarati', script: 'ગુજ', href: '/gujarati-biodata-format' },
  { flag: '🌼', lang: 'Marathi', script: 'मरा', href: '/marathi-biodata-format' },
  { flag: '📜', lang: 'Hindi', script: 'हिंदी', href: '/hindi-biodata-format' },
  { flag: '🌾', lang: 'Punjabi', script: 'ਪੰਜਾ', href: '/punjabi-biodata-format' },
  { flag: '🌺', lang: 'Tamil', script: 'தமி', href: '/tamil-biodata-format' },
  { flag: '🪷', lang: 'Bengali', script: 'বাং', href: '/bengali-biodata-format' },
];

const faqs = [
  { question: 'What is EasyBiodataMaker?', answer: 'EasyBiodataMaker.com is a free online marriage biodata maker for Indian families. It offers 10 beautiful templates in 7 languages, photo upload, unlimited custom fields, and instant A4 PDF download — all without registration.' },
  { question: 'Is EasyBiodataMaker really free?', answer: 'Yes, 100% free. All 10 templates, photo upload, custom fields, and PDF download are free with no hidden charges, no subscription, and no credit card required — ever.' },
  { question: 'How do I create a marriage biodata online?', answer: 'Visit EasyBiodataMaker.com → Fill 4-step form (personal, family, education, contact) → Upload photos → Choose template → Download PDF. Takes under 5 minutes.' },
  { question: 'Which languages are supported?', answer: 'English, Gujarati (ગુજ), Marathi (मरा), Hindi (हिंदी), Punjabi (ਪੰਜਾ), Tamil (தமி), Bengali (বাং). All form labels switch to your language automatically.' },
  { question: 'Is my personal data safe?', answer: 'Completely safe. Your data is processed in your browser only — it never reaches our servers. Zero data collection, no database storage.' },
  { question: 'Can I upload photos?', answer: 'Yes! Upload up to 3 photos. They appear beautifully on your chosen biodata template.' },
  { question: 'Can I add custom fields?', answer: 'Yes! Add unlimited custom fields like Kundali ID, property details, vehicle info — anything you need.' },
  { question: 'What is a marriage biodata?', answer: 'A marriage biodata (shaadi biodata / lagna biodata) is a one-page document used by Indian families for matrimonial matchmaking. It includes personal details, family background, education, career, and contact information.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-16 pb-24">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f38e13 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/90 text-saffron-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-saffron-200 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Free · No Login · 10 Templates · 7 Languages · Photo Upload
          </div>

          {/* AEO Speakable — Voice assistants read this first */}
          <div id="speakable-summary" itemProp="speakable" itemScope itemType="https://schema.org/SpeakableSpecification">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-maroon-900 leading-tight mb-5">
              Free Marriage Biodata
              <span className="block text-saffron-500">Maker Online</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-5 leading-relaxed">
              India&apos;s most complete free biodata maker — <strong>10 beautiful templates</strong> in{' '}
              <strong>7 languages</strong>. Photo upload, custom fields, instant A4 PDF. No login, no charges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['🪔 Gujarati','🌼 Marathi','📜 Hindi','🌾 Punjabi','🌺 Tamil','🪷 Bengali','☪️ Muslim','🕉️ Hindu'].map(l => (
              <span key={l} className="bg-white/80 border border-amber-200 text-maroon-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">{l}</span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/create" className="btn-primary text-lg px-8 py-4 shadow-xl">✨ Create Free Biodata Now</Link>
            <Link href="/templates" className="btn-secondary text-lg px-8 py-4">👁 See All 10 Templates</Link>
          </div>

          <div className="flex items-center justify-center gap-5 text-sm text-gray-400 flex-wrap">
            {['No registration','10 free templates','Photo upload','Custom fields','Instant PDF'].map(t => (
              <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-saffron-500" /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* AEO Stats */}
      <div className="max-w-4xl mx-auto px-4 -mt-6 mb-8 relative z-10">
        <AEOStats stats={[
          { value: '50,000+', label: 'Biodatas Created', note: 'All free' },
          { value: '10', label: 'Free Templates', note: 'All communities' },
          { value: '7', label: 'Indian Languages', note: 'Native scripts' },
          { value: '4.9★', label: 'User Rating', note: '12,847 reviews' },
        ]} />
      </div>

      {/* AEO Definition */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <AEODefinition
            term="Marriage Biodata"
            definition="A marriage biodata (also called shaadi biodata, lagna biodata, or vivah biodata) is a one-page document used by Indian families during matrimonial matchmaking. It presents personal details (name, age, height, religion, caste, gotra), family background (parents' names, siblings), educational qualifications, career information, contact details, and partner expectations. It is similar to a professional resume but for marriage purposes."
            also="Shaadi biodata, Lagna biodata, Vivah biodata, Rishta profile, Marriage profile"
            examples={['Hindu marriage biodata with gotra', 'Muslim nikah biodata', 'Gujarati lagna biodata', 'Marathi vivah biodata']}
          />
        </div>
      </section>

      {/* AEO Quick Answer */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <AEOQuickAnswer
            question="How to create a marriage biodata online for free?"
            answer="Visit EasyBiodataMaker.com → Fill 4-step form → Upload photos → Choose from 10 templates → Download A4 PDF. Takes under 5 minutes. No login required. Completely free."
            steps={[
              'Go to EasyBiodataMaker.com and click "Create Biodata"',
              'Select your language (English, Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali)',
              'Fill 4 steps: Personal → Family → Education → Contact details',
              'Upload up to 3 photos and add any custom fields you need',
              'Choose from 10 templates and click "Download PDF"',
            ]}
          />
        </div>
      </section>

      {/* Templates grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="section-tag">10 Unique Designs</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-900 mt-2" id="speakable-features">
              Beautiful Templates for Every Community
            </h2>
            <p className="text-gray-500 mt-3 text-sm max-w-2xl mx-auto">Each template has a completely unique design, color scheme &amp; language. All free, no login required.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {templates.map(({ emoji, name, community, bg }) => (
              <Link key={name} href="/create" className={`card p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 ${bg}`}>
                <div className="text-3xl mb-2">{emoji}</div>
                <div className="font-bold text-maroon-800 text-xs leading-tight">{name}</div>
                <div className="text-[10px] text-gray-400 mt-1">{community}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6"><Link href="/templates" className="btn-secondary text-sm">View All Templates →</Link></div>
        </div>
      </section>

      {/* Language grid */}
      <section className="py-16 bg-amber-50/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="section-tag">7 Indian Languages</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-900 mt-2">Biodata in Your Language</h2>
            <p className="text-gray-500 mt-3 text-sm">Select language → all form labels switch to native script instantly</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {langs.map(({ flag, lang, script, href }) => (
              <Link key={lang} href={href} className="card p-4 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group">
                <div className="text-2xl mb-2">{flag}</div>
                <div className="font-bold text-maroon-800 text-xs group-hover:text-saffron-600 transition-colors">{lang}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{script}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community links */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6">All Biodata Formats by Community</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              ['/hindu-marriage-biodata-format','🕉️ Hindu Biodata'],
              ['/muslim-marriage-biodata-format','☪️ Muslim Nikah Biodata'],
              ['/sikh-marriage-biodata','🌾 Sikh Biodata'],
              ['/jain-marriage-biodata','🙏 Jain Biodata'],
              ['/christian-marriage-biodata','✝️ Christian Biodata'],
              ['/biodata-for-marriage-girl','👰 Girl\'s Biodata'],
              ['/biodata-for-marriage-boy','🤵 Boy\'s Biodata'],
              ['/gujarati-biodata-format','🪔 Gujarati Biodata'],
              ['/marathi-biodata-format','🌼 Marathi Biodata'],
              ['/hindi-biodata-format','📜 Hindi Biodata'],
              ['/punjabi-biodata-format','🌾 Punjabi Biodata'],
              ['/tamil-biodata-format','🌺 Tamil Biodata'],
              ['/bengali-biodata-format','🪷 Bengali Biodata'],
              ['/telugu-biodata-format','🌸 Telugu Biodata'],
              ['/kannada-biodata-format','🌸 Kannada Biodata'],
              ['/rajasthani-biodata-format','🏰 Rajasthani Biodata'],
              ['/how-to-make-biodata-for-marriage','📖 How to Make Biodata'],
              ['/free-biodata-format-download','📥 Free Download'],
              ['/blog','✍️ Blog & Tips'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="bg-white border border-amber-200 text-maroon-700 text-xs font-semibold px-3 py-2 rounded-full hover:border-saffron-400 hover:bg-saffron-50 transition-all shadow-sm">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AEO FAQ Block */}
      <AEOBlock
        faqs={faqs}
        title="Everything You Need to Know About Marriage Biodata"
        ctaHref="/create"
        ctaText="Create Your Free Biodata"
      />

      {/* Rich SEO + AEO content */}
      <section className="py-14 bg-white px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-sm leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-maroon-900">
            Best Free Marriage Biodata Maker in India — Why EasyBiodataMaker Ranks #1
          </h2>
          <p>
            <strong>EasyBiodataMaker.com</strong> is India&apos;s most comprehensive{' '}
            <strong>free marriage biodata maker online</strong>. Unlike other biodata maker websites
            that require registration, charge hidden fees, or sell your personal data to matrimonial agencies,
            EasyBiodataMaker is completely transparent, always free, and processes everything locally in your browser.
          </p>
          <p>
            Our tool supports all Indian communities: <strong>Hindu marriage biodata</strong> with gotra and manglik,{' '}
            <strong>Muslim nikah biodata</strong> with Bismillah and biradari,{' '}
            <strong>Sikh Anand Karaj biodata</strong> with Gurmukhi, <strong>Gujarati lagna biodata</strong> in
            ગુજ+EN, <strong>Marathi vivah biodata</strong> in मरा+EN, and <strong>Hindi shaadi biodata</strong> with
            Devanagari headings. Whether you need <strong>biodata for a girl</strong> or{' '}
            <strong>biodata for a boy</strong>, we have the right template.
          </p>
          <p>
            New in 2024: <strong>Upload up to 3 photos</strong> that appear on your biodata, add{' '}
            <strong>unlimited custom fields</strong> (Kundali ID, property, vehicle, anything), and choose from{' '}
            <strong>7 Indian languages</strong> — all completely free.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-maroon-800 to-maroon-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
            <span className="ml-2 text-amber-200 text-sm">4.9/5 · 50,000+ biodatas created</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Create Your Marriage Biodata Free</h2>
          <p className="text-amber-200/80 mb-8 text-sm">10 templates · 7 languages · Photo upload · Custom fields · Instant PDF · No login</p>
          <Link href="/create" className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-xl">
            🎊 Create Free Biodata Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
