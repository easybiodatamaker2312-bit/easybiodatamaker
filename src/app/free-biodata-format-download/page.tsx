import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Biodata Format Download – Marriage Biodata PDF | EasyBiodataMaker',
  description: 'Download a free marriage biodata in PDF format. 10 templates to choose from. Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali, English. No registration. Instant download.',
  keywords: ['free biodata format download','marriage biodata pdf free download','biodata format free download india','download biodata format for marriage','free biodata template download','marriage biodata word format download','biodata pdf download hindi gujarati marathi'],
  alternates: { canonical: 'https://easybiodatamaker.com/free-biodata-format-download' },
  openGraph: { title: 'Free Biodata Format Download – PDF in 5 Minutes', description: '10 free biodata formats to download. PDF or Word. 7 Indian languages. No registration.', url: 'https://easybiodatamaker.com/free-biodata-format-download' },
};

const aeoFaqs = [
  { question: 'How do I download a free marriage biodata format?', answer: "Go to EasyBiodataMaker.com, click 'Create Biodata', fill the 4-step form with your details, choose from 10 templates, and click 'Download PDF'. The file downloads instantly — no email required, no registration, no payment. The whole process takes about 5 to 7 minutes if you have your information ready." },
  { question: 'Should I download a Word template or use an online biodata maker?', answer: "Online maker wins every time for one simple reason: formatting. A Word template you fill looks different on every computer — the fonts shift, borders break, layout collapses. A PDF from an online maker is pixel-perfect on every device. Plus an online maker is mobile-friendly, requires no software installation, and has better-looking templates than most Word formats you find online." },
  { question: 'Is the downloaded biodata PDF free of watermarks?', answer: "The biodata content itself has no watermark — all your personal and family information is presented cleanly. The only addition is a small 'EasyBiodataMaker.com' credit at the very bottom of the page, below the biodata content. Similar to how most free services add a small credit. It does not interfere with any of the biodata information." },
  { question: 'Can I download the biodata in different languages?', answer: "Yes. Select your language (Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali, or English) before filling the form, and all form labels switch to that language. The PDF downloads with your chosen language. You can also choose language-specific templates — Gujarati Navratri has Gujarati headings, Marathi Wari has Marathi headings, and so on." },
  { question: 'What format is the downloaded biodata — PDF or Word?', answer: "PDF only — and that is intentional. PDF is smaller for WhatsApp sharing, looks identical on all devices, cannot be accidentally edited, and looks far more professional than a Word document. If you need a Word version for some reason (your matrimonial site requires it), you can convert the PDF to Word using free tools like SmallPDF or ILovePDF after downloading." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">📥</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Free Biodata Format Download
              <span className="block text-xl mt-2 text-saffron-600 font-normal">PDF · 10 Templates · 7 Languages · No Registration</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Forget blank Word templates. Fill your actual information, choose a template that fits your community, and download a finished biodata PDF in 5 minutes. That is what you actually need.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">📥 Create &amp; Download Free</Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Why Download a Blank Template When You Can Get a Finished One?</h2>
            <p>Most "free biodata format download" searches lead to a blank Word file. You download it, open it, try to fill it in, realise the formatting breaks when you type, spend an hour fixing it, and still end up with something that looks like a government form.</p>
            <p>EasyBiodataMaker does it differently. You fill your details in a guided form. We apply a professionally designed template. You download a finished PDF that looks the same on every device. Total time: 5 to 10 minutes.</p>

            <div className="bg-amber-50 border-l-4 border-saffron-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">What &ldquo;Free&rdquo; Actually Means Here</h3>
              <p>All 10 templates are free. Photo upload is free. Custom fields are free. PDF download is free. No trial period, no credit card, no premium tier you get pushed toward. The only thing you see is a small EasyBiodataMaker.com text at the bottom of the PDF — below your biodata content, not on top of it.</p>
            </div>

            <h2 className="font-display text-2xl font-bold text-maroon-900">10 Formats to Download</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { emoji:'🕉️', name:'Classic Saffron', who:'All Hindu communities' },
                { emoji:'👑', name:'Royal Navy Gold', who:'NRI & senior professionals' },
                { emoji:'🌸', name:'Rose Bloom', who:"Girls' biodata, all communities" },
                { emoji:'✦', name:'Emerald Modern', who:'Urban, IT professionals' },
                { emoji:'🪔', name:'Gujarati Navratri', who:'All Gujarati families' },
                { emoji:'🌼', name:'Marathi Wari', who:'Maharashtra families' },
                { emoji:'📜', name:'Hindi Shaadi', who:'North Indian families' },
                { emoji:'🌺', name:'Purple Temple', who:'South Indian families' },
                { emoji:'☪️', name:'Islamic Green', who:'Muslim families' },
                { emoji:'🌾', name:'Punjabi Royal', who:'Punjabi & Sikh families' },
              ].map(({ emoji, name, who }) => (
                <div key={name} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100">
                  <span className="text-xl">{emoji}</span>
                  <div>
                    <div className="font-bold text-maroon-800 text-xs">{name}</div>
                    <div className="text-gray-500 text-xs">{who}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center mt-4">
              <h3 className="font-bold text-maroon-900 mb-2">Ready to Download?</h3>
              <p className="text-gray-600 text-sm mb-4">Fill the form, pick your template, get your PDF. No registration.</p>
              <Link href="/create" className="btn-primary text-sm">📥 Create &amp; Download Free →</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Biodata Download — Common Questions" ctaHref="/create" ctaText="Download Free Biodata" />
      </main>
      <Footer />
    </div>
  );
}
