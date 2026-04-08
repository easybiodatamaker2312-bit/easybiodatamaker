import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ – Marriage Biodata Maker Questions Answered | EasyBiodataMaker',
  description:
    'Frequently asked questions about creating marriage biodata online. How to make biodata for marriage, what to include, PDF download help, and more.',
  alternates: { canonical: 'https://easybiodatamaker.com/faq' },
  keywords: [
    'how to make biodata for marriage',
    'what to write in marriage biodata',
    'marriage biodata format questions',
    'biodata PDF download free',
    'how to create biodata online',
    'shaadi biodata kaise banaye',
    'marriage biodata in english format',
    'what is biodata for marriage',
    'biodata vs resume difference',
    'marriage biodata format India',
  ],
};

const faqCategories = [
  {
    category: 'Getting Started',
    faqs: [
      {
        q: 'What is a marriage biodata and why do I need one?',
        a: `A marriage biodata (also called a "shaadi biodata" or "marriage profile") is a one-page document that presents key personal, family, educational, and professional information about a person seeking marriage. It is the Indian equivalent of a marriage resume.

In India, families exchange biodatas before meeting to determine compatibility. A well-formatted biodata creates a strong first impression and covers all the information families need — name, date of birth, horoscope details, family background, education, career, and contact details.`,
      },
      {
        q: 'How is a marriage biodata different from a resume/CV?',
        a: `While both are documents that present information about a person, a marriage biodata focuses on personal and family details rather than professional achievements:

• Resume/CV: Work history, skills, professional accomplishments — for job applications
• Marriage Biodata: Personal details (height, complexion, horoscope), family background, values, partner expectations — for matrimonial purposes

A marriage biodata also typically includes information like religion, caste, gotra, manglik status, and family details that would never appear on a professional resume.`,
      },
      {
        q: 'Is EasyBiodataMaker really free? Are there hidden charges?',
        a: `Yes, creating and downloading your marriage biodata on EasyBiodataMaker.com is completely free. There are absolutely no hidden charges, subscription fees, or payment requirements.

We may introduce optional premium features in the future (such as premium templates or watermark-free downloads), but the core biodata creation and download will always remain free.`,
      },
      {
        q: 'Do I need to create an account or register?',
        a: `No registration, no email, no account — nothing. Just visit EasyBiodataMaker.com, fill the form, and download your biodata. We believe your personal information should stay private, so we don't even ask for your email.`,
      },
    ],
  },
  {
    category: 'Creating Your Biodata',
    faqs: [
      {
        q: 'What information should I include in a marriage biodata?',
        a: `A complete Indian marriage biodata should include:

Personal Details: Full name, date of birth, time of birth (for kundali), place of birth, height, weight, complexion, blood group, religion, caste, sub-caste, gotra, manglik status, hobbies, languages known

Family Details: Father's name & occupation, mother's name & occupation, number of brothers/sisters (married/unmarried), family type (nuclear/joint), family status, native place

Education & Career: Highest qualification, field of study, college/university, current occupation, employer, designation, annual income, work location

Contact Details: Full address, mobile number, email (optional), partner expectations

EasyBiodataMaker covers all of these sections in our easy 4-step form.`,
      },
      {
        q: 'How do I write partner expectations in a biodata?',
        a: `The "Partner Expectations" section should describe the qualities you're looking for in a life partner. Keep it honest, respectful, and positive. Good examples:

"Looking for a well-educated, family-oriented partner who is understanding, caring, and respectful of both families. Should be working professionally or open to it. Caste no bar."

"Seeking a kind-hearted, educated partner from a good family background. Should be adaptable and share similar values. Preference for candidates settled in Pune or Mumbai."

Avoid being too restrictive or listing overly specific physical requirements.`,
      },
      {
        q: 'Can I create a biodata for my son/daughter?',
        a: `Absolutely! EasyBiodataMaker is perfect for parents creating biodata on behalf of their son or daughter. Simply enter their details in the form. The biodata will be generated in the standard format that other families and matrimonial sites expect.`,
      },
      {
        q: 'What is manglik and should I include it?',
        a: `Manglik (or Mangal Dosh) refers to an astrological condition in Hindu astrology where Mars (Mangal) is positioned in certain houses of a person's birth chart. It is considered significant in Hindu marriage traditions.

Options are: Yes, No, Partial (Anshik Manglik), or Not Known. If you're unsure, you can select "Not Known" or check with a Jyotishi (astrologer). You may also leave this blank if it's not relevant to your community.`,
      },
      {
        q: 'How do I mention gotra in my biodata?',
        a: `Gotra is a clan or lineage identifier used in Hindu communities. It is typically the name of the founding sage (rishi) of your patrilineal lineage — for example, Kashyap, Bharadwaj, Vasishtha, Atri, Vishwamitra, etc.

Your gotra is usually the same as your father's gotra. If you don't know yours, ask your parents or pandit. In Hindu tradition, the boy's gotra and girl's gotra should be different for the marriage to be permitted.

Include both Paternal Gotra (your gotra) and Maternal Gotra (your mother's/maternal grandfather's gotra) if you know them.`,
      },
    ],
  },
  {
    category: 'PDF Download & Technical',
    faqs: [
      {
        q: 'How do I download my biodata as a PDF?',
        a: `It's very simple:
1. Fill the 4-step form at EasyBiodataMaker.com/create
2. Click "Preview Biodata" on Step 4
3. Review your biodata on the preview page
4. Click the orange "Download PDF" button
5. Your biodata PDF will download automatically

The PDF is in A4 format, print-ready, and professionally formatted.`,
      },
      {
        q: 'My PDF download is not working. What should I do?',
        a: `If the PDF download isn't working, try these steps:
• Ensure you're using a modern browser (Chrome, Firefox, Edge — latest version)
• Disable browser extensions that may block downloads, especially ad blockers
• Try on a different browser
• Ensure JavaScript is enabled in your browser
• On mobile: try downloading on a desktop/laptop for best results

If the issue persists, please contact us at support@easybiodatamaker.com`,
      },
      {
        q: 'Is my biodata data saved if I close the browser?',
        a: `Your form data is stored in your browser's session storage, which is cleared when you close the browser tab. To avoid losing your data:
• Complete all 4 steps and download your PDF in one session
• If you need to take a break, keep the browser tab open
• To edit, click "Edit" on the preview page and update your information

We are working on an optional save feature for future updates.`,
      },
      {
        q: 'Can I edit my biodata after downloading?',
        a: `Yes! If you want to make changes, click the "Edit" button on the preview page (/preview) to go back to the form. Your data will be pre-filled (as long as you haven't closed the browser tab). Make your changes and click "Preview Biodata" again to generate an updated PDF.`,
      },
      {
        q: 'What size is the biodata PDF? Will it print correctly?',
        a: `The biodata PDF is generated in standard A4 size (210mm × 297mm), which is the most common paper size in India. It is optimized for:
• Digital sharing via WhatsApp, email, or matrimonial sites
• Printing on A4 paper on any printer
• Viewing on mobile screens

The PDF is high-resolution (2x scale) for crisp, professional quality.`,
      },
    ],
  },
  {
    category: 'Privacy & Safety',
    faqs: [
      {
        q: 'Is my personal information safe on EasyBiodataMaker?',
        a: `Yes, 100%. Your personal information (name, DOB, family details, contact info) is stored only in your browser's session storage. It is never sent to our servers, never stored in any database, and never shared with any third party.

We cannot see, access, or use your personal information. Think of our website as a local tool that runs in your browser.`,
      },
      {
        q: 'Will EasyBiodataMaker share my biodata with matrimonial sites?',
        a: `Absolutely not. EasyBiodataMaker is a tool only — we are not a matrimonial service. We don't collect your data, so there is nothing to share. We have no relationship with Shaadi.com, Jeevansathi, BharatMatrimony, or any other matrimonial platform.`,
      },
      {
        q: 'Can I trust the website with sensitive family information?',
        a: `Yes. Since all processing happens in your browser (client-side only), sensitive information like your address, phone number, and family details never leave your device. Even if our servers were compromised, your personal data would be safe because we simply don't have it.`,
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap(({ faqs }) => faqs);

  // JSON-LD FAQ Schema for Google rich results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-tag">Help Center</span>
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600">
              Everything you need to know about creating a marriage biodata online
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map(({ category, faqs }) => (
              <div key={category}>
                <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-saffron-500 rounded-full inline-block" />
                  {category}
                </h2>
                <div className="space-y-4">
                  {faqs.map(({ q, a }) => (
                    <details
                      key={q}
                      className="card group"
                      open={false}
                    >
                      <summary className="p-5 cursor-pointer font-semibold text-maroon-800 hover:text-saffron-700 transition-colors flex items-center justify-between gap-3 list-none">
                        <span>{q}</span>
                        <span className="text-saffron-500 flex-shrink-0 text-xl leading-none">+</span>
                      </summary>
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed whitespace-pre-line border-t border-amber-50 pt-4">
                        {a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-12 px-4 bg-amber-50/40">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-maroon-900 mb-3">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              We're here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/create" className="btn-secondary">
                Create Biodata Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
