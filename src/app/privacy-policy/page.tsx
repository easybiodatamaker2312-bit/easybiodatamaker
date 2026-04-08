import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy – EasyBiodataMaker.com',
  description:
    'Privacy Policy of EasyBiodataMaker.com. Learn how we protect your personal information when you use our free marriage biodata maker.',
  alternates: { canonical: 'https://easybiodatamaker.com/privacy-policy' },
  robots: { index: true, follow: false },
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `EasyBiodataMaker.com is designed with privacy as the foundation. When you use our free marriage biodata maker, all form data you enter (including your name, date of birth, family details, education, and contact information) is stored exclusively in your browser's session storage.

We do NOT collect, transmit, or store any personal information on our servers. Your biodata data never leaves your device unless you choose to download the PDF.

We may collect non-personal, anonymised data such as:
• Page visit counts (via privacy-respecting analytics)
• Browser type and general geographic region (country-level only)
• Pages viewed and time spent on site

This data is used solely to improve the website experience and is never linked to any individual.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `The personal details you enter in the biodata form are used solely to generate your downloadable biodata PDF. This processing happens entirely in your browser.

Anonymised analytics data helps us:
• Understand which features are most useful
• Improve page load speed and user experience
• Identify and fix technical issues

We do not use your information for marketing, advertising, or selling to third parties.`,
  },
  {
    title: '3. Cookies',
    content: `EasyBiodataMaker.com uses minimal cookies:

• Session Storage: Temporarily stores your form data so you don't lose progress between steps. This is cleared when you close your browser tab.
• Analytics Cookies: If we use analytics tools, they use privacy-first, cookieless tracking. We do not use Google Analytics in a way that tracks individuals.

We do not use advertising cookies, tracking pixels, or third-party marketing cookies.`,
  },
  {
    title: '4. Third-Party Services',
    content: `We use the following trusted third-party services:

• Vercel: Website hosting. Vercel may log IP addresses for security and performance purposes per their privacy policy.
• Google Fonts: To load beautiful typography. Google may log font requests.
• Content Delivery Networks (CDN): For loading JavaScript libraries used in PDF generation.

We are not affiliated with any matrimonial website and do not share your data with any matchmaking or marriage services.`,
  },
  {
    title: '5. Data Security',
    content: `Your biodata data is stored only in your browser's session storage. It is:

• Never transmitted to our servers
• Never stored in databases
• Never accessible to us or any third party
• Automatically deleted when you close the browser tab

We use HTTPS encryption on all pages to protect any data transmitted between your browser and our hosting servers.`,
  },
  {
    title: '6. Children\'s Privacy',
    content: `EasyBiodataMaker.com is intended for adults (18+ years) seeking to create marriage biodata. We do not knowingly collect any information from individuals under the age of 18. If you believe a minor has used our service, please contact us and we will take appropriate steps.`,
  },
  {
    title: '7. Your Rights',
    content: `Since we do not store your personal data on our servers, there is no data to request, modify, or delete from our end. Your biodata data exists only in your browser and is fully under your control.

If you have concerns about anonymised analytics data, you can contact us and we will address them promptly.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this privacy policy from time to time. We will notify users of significant changes by updating the "Last Updated" date at the top of this page. Continued use of EasyBiodataMaker.com after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

Email: privacy@easybiodatamaker.com
Website: https://easybiodatamaker.com/contact`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-amber-100">
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-3">Privacy Policy</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>EasyBiodataMaker.com</span>
              <span>•</span>
              <span>Last Updated: January 2024</span>
            </div>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
              <strong>🔒 Privacy-First Platform:</strong> EasyBiodataMaker does not collect or store
              your personal biodata information. All data stays in your browser only.
            </div>
          </div>

          {/* Introduction */}
          <p className="text-gray-600 leading-relaxed mb-8">
            At EasyBiodataMaker.com ("we", "our", or "us"), protecting your privacy is our top
            priority. This Privacy Policy explains how we handle information when you use our free
            marriage biodata maker at{' '}
            <strong>https://easybiodatamaker.com</strong>. Please read this policy carefully.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map(({ title, content }) => (
              <div key={title} className="card p-6">
                <h2 className="font-display text-xl font-bold text-maroon-800 mb-4">{title}</h2>
                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            This privacy policy applies to easybiodatamaker.com. By using our website to create your
            marriage biodata, you agree to the terms of this policy.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
