import { buildMetadata, getSitePage } from '@/lib/seo';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const page = getSitePage('/privacy-policy');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });

const sections = [
  {
    title: '1. Information We Collect',
    content: `EasyBiodataMaker.com is designed with privacy as the foundation. When you use our free marriage biodata maker, all form data you enter (including your name, date of birth, family details, education, and contact information) is stored exclusively in your browser's session storage.

Your biodata details, including names, date of birth, family details, education, contact information and uploaded photos, are processed in your browser and are not sent to the analytics database.

For aggregate site statistics, we store: successful download counts by file format; page-view counts by day; and a daily unique-visitor estimate. A random ID is stored in your browser's local storage. The analytics endpoint converts it into a one-way daily hash before storing it, so the raw browser ID is not stored in our database. We do not store individual page paths, full URLs or query strings, and do not store names, email addresses, phone numbers or biodata content in these analytics tables.

Cloudflare processes network information, including IP addresses, to deliver and secure the website. Our application analytics tables do not store IP addresses.`,
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
    content: `EasyBiodataMaker uses browser storage for essential product functionality and anonymous aggregate analytics:

• Session Storage: Temporarily stores builder form data so you do not lose progress between steps.
• Local Storage: Stores a randomly generated analytics browser ID used to estimate unique visitors per day. You can remove it by clearing this site's local storage in your browser.
• Google Analytics: The site also loads Google Analytics (GA4) for website measurement. Google may process information according to its own privacy terms and settings.

We do not use advertising cookies or third-party marketing pixels as part of the Cloudflare D1 counter.`,
  },
  {
    title: '4. Third-Party Services',
    content: `We use the following trusted third-party services:

• Cloudflare Workers and D1: Website hosting and storage of aggregate download and visitor statistics. Cloudflare may process network information for security and delivery.
• Google Fonts: To load beautiful typography. Google may log font requests.
• Content Delivery Networks (CDN): For loading JavaScript libraries used in PDF generation.

We are not affiliated with any matrimonial website and do not share your data with any matchmaking or marriage services.`,
  },
  {
    title: '5. Data Security',
    content: `Your biodata data is stored only in your browser's session storage. It is:

• Never transmitted to our servers
• Never included in the Cloudflare analytics database
• Not included in the aggregate visitor or download counters
• Automatically deleted when you close the browser tab

We use HTTPS encryption on all pages to protect any data transmitted between your browser and our hosting servers.`,
  },
  {
    title: '6. Children\'s Privacy',
    content: `EasyBiodataMaker.com is intended for adults (18+ years) seeking to create marriage biodata. We do not knowingly collect any information from individuals under the age of 18. If you believe a minor has used our service, please contact us and we will take appropriate steps.`,
  },
  {
    title: '7. Your Rights',
    content: `We do not store your biodata details in the analytics database. Aggregate statistics and daily one-way visitor hashes are stored in Cloudflare D1. You can clear the random browser ID by clearing this site's local storage in your browser.

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


const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy – EasyBiodataMaker',
  url: 'https://easybiodatamaker.com/privacy-policy',
  isPartOf: { '@type': 'WebSite', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
};
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-amber-100">
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-3">Privacy Policy</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>EasyBiodataMaker.com</span>
              <span>•</span>
              <span>Last Updated: See current policy version</span>
            </div>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
              <strong> Privacy-First Platform:</strong> EasyBiodataMaker does not collect or store
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
