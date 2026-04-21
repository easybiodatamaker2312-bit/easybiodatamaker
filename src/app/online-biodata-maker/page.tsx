import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Online Biodata Maker Free – Best for Marriage India 2024 | EasyBiodataMaker',
  description: 'Best free online biodata maker for Indian marriage. No login, no app, no registration. 10 templates, 7 languages, photo upload, PDF download. Works on mobile too.',
  keywords: ['online biodata maker','online biodata maker free','best online biodata maker india','create biodata online free','online biodata generator','free online biodata creator','online marriage biodata without registration','biodata maker on mobile','online biodata maker no watermark'],
  alternates: { canonical: 'https://easybiodatamaker.com/online-biodata-maker' },
  openGraph: { title: 'Online Biodata Maker Free – Best for Indian Marriage', description: 'Free online biodata maker. No login, no app. 10 templates, 7 languages, PDF. Works on mobile.', url: 'https://easybiodatamaker.com/online-biodata-maker' },
};

const aeoFaqs = [
  { question: 'Why is an online biodata maker better than a Word template?', answer: "Three reasons people have figured out the hard way: One — a Word document looks completely different on different computers. The beautiful layout you made on your laptop becomes a formatting disaster when opened on someone else's phone. A PDF from an online maker looks identical everywhere. Two — Word needs Microsoft Office, which not everyone has. Online works in any browser. Three — online makers give you professional templates that actually look good. DIY Word biodatas almost always look amateur next to them." },
  { question: 'Can I make a biodata on my phone using EasyBiodataMaker?', answer: "Yes — EasyBiodataMaker.com is fully mobile-optimized. The form works on any smartphone browser, you can upload photos from your phone gallery, and the PDF downloads directly to your phone. No app to install, no account to create. Many people create their entire biodata on a phone in about 10 minutes." },
  { question: 'Is there a watermark on biodatas made on EasyBiodataMaker?', answer: "The only text is a small 'EasyBiodataMaker.com' credit at the very bottom of the PDF — similar to how free tools typically add a small credit. It does not appear on any content area of the biodata and most families will not notice it. All 10 templates are free without paying anything." },
  { question: 'Does an online biodata maker store my personal data?', answer: "EasyBiodataMaker does not. Your data lives in your browser's session storage only. When you close the tab, it is gone. The tool literally cannot access your information because it never leaves your device. This is unlike many matrimonial sites that collect and store everything you enter." },
  { question: 'Online biodata maker vs matrimonial site profile — what is the difference?', answer: "A matrimonial site profile (Shaadi.com, Jeevansathi, BharatMatrimony) is stored on their platform and searched by other members. An online biodata maker creates a standalone PDF document you can share wherever you want — WhatsApp, email, in person. Many families prefer receiving a formatted PDF biodata over a link to a matrimonial site profile. You can do both — upload your PDF to the matrimonial site and also share it directly." },
];

const aeoSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: aeoFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function OnlineBiodataMakerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <main className="flex-1">
        <section className="py-14 px-4 border-b bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-3">💻</div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-4 leading-tight">
              Free Online Biodata Maker
              <span className="block text-xl mt-2 text-saffron-600 font-normal">Works on Mobile · No Login · No App · PDF in 5 Minutes</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              No app to install. No account to create. Open the site on your phone or laptop, fill the form, pick a template, and download your biodata as a PDF. That is the whole process.
            </p>
            <Link href="/create" className="btn-primary text-lg px-8 py-4">💻 Create Biodata Online — Free</Link>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-7 text-gray-700 text-sm leading-loose">
            <h2 className="font-display text-2xl font-bold text-maroon-900">Why Families Keep Going Back to Online Makers Over Word Templates</h2>
            <p>Word templates looked like a good idea. Download, fill it in, done. But then the font changes on someone else's computer. The borders shift. The whole layout breaks. You send it as a .docx and it opens as a mess on their phone. Then you try to fix it and make it worse.</p>
            <p>An online maker generates a PDF — which looks identical everywhere. On a Nokia, on a MacBook, on a WhatsApp forward, it looks exactly as designed. That reliability is why families switched.</p>
            <div className="bg-amber-50 border-l-4 border-saffron-400 rounded-r-xl p-5">
              <h3 className="font-bold text-maroon-900 mb-2">Works Completely on Mobile</h3>
              <p>Most people fill their biodata on a phone, not a computer. EasyBiodataMaker.com is designed to work on any smartphone browser — no pinching and zooming, no broken layouts. Upload photos from your gallery, fill the form, download the PDF. Your parents can do this too without needing to install anything.</p>
            </div>
            <h2 className="font-display text-2xl font-bold text-maroon-900">What This Tool Actually Does</h2>
            <div className="space-y-3">
              {[
                { emoji: '📝', point: '4-step form collects your information clearly — no confusing fields' },
                { emoji: '🌐', point: '7 Indian languages — form labels switch to Gujarati, Marathi, Hindi, Punjabi, Tamil, Bengali' },
                { emoji: '📸', point: 'Upload up to 3 photos — they appear on your biodata' },
                { emoji: '➕', point: 'Add unlimited custom fields — Kundali ID, property, anything you need' },
                { emoji: '🎨', point: '10 different templates — each genuinely different in design and colour' },
                { emoji: '📄', point: 'Download as A4 PDF instantly — WhatsApp-ready, print-ready' },
              ].map(({ emoji, point }) => (
                <div key={point} className="flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0">{emoji}</span>
                  <p className="text-sm">{point}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mt-4">
              <Link href="/create" className="btn-primary text-sm">💻 Create Online Biodata — Free</Link>
            </div>
          </div>
        </section>

        <AEOBlock faqs={aeoFaqs} title="Online Biodata Maker — Common Questions" ctaHref="/create" ctaText="Create Biodata Online Free" />
      </main>
      <Footer />
    </div>
  );
}
