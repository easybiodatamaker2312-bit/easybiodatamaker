import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer – EasyBiodataMaker.com',
  description:
    'Disclaimer for EasyBiodataMaker.com – Free online marriage biodata maker. Read our terms of use, limitations of liability, and important notices.',
  alternates: { canonical: 'https://easybiodatamaker.com/disclaimer' },
  robots: { index: true, follow: false },
  openGraph: {
    title: 'Disclaimer – EasyBiodataMaker.com',
    description: 'Read the disclaimer for EasyBiodataMaker.com free marriage biodata maker.',
    url: 'https://easybiodatamaker.com/disclaimer',
  },
  keywords: ['easybiodatamaker disclaimer','marriage biodata maker disclaimer'],
};

const sections = [
  {
    title: 'General Disclaimer',
    content: `The information and tools provided on EasyBiodataMaker.com are for general informational and personal use only. EasyBiodataMaker.com is a free online tool that helps users create marriage biodata documents.

While we strive to provide a high-quality, accurate, and useful service, we make no warranties or representations about the accuracy, completeness, or suitability of the service for any particular purpose.`,
  },
  {
    title: 'No Matrimonial Guarantee',
    content: `EasyBiodataMaker.com is a biodata creation tool only. We are NOT a matrimonial service, matchmaking agency, or marriage bureau.

We do not:
• Verify any information entered by users in their biodata
• Guarantee any matrimonial matches or introductions
• Take responsibility for the accuracy of user-submitted information
• Endorse any individual whose biodata is created using our tool
• Facilitate contact between individuals or families

Use of our tool to create a biodata does not imply any relationship, endorsement, or verification by EasyBiodataMaker.com.`,
  },
  {
    title: 'User Responsibility',
    content: `Users are solely responsible for:

• The accuracy and truthfulness of information they enter in their biodata
• How they use and share the generated biodata PDF
• Verifying information in any biodata received from other parties
• Compliance with all applicable laws when sharing personal information

By using EasyBiodataMaker.com, you confirm that all information you provide is truthful and accurate to the best of your knowledge. Providing false or misleading information is entirely the responsibility of the user.`,
  },
  {
    title: 'Limitation of Liability',
    content: `EasyBiodataMaker.com and its owners, operators, and contributors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:

• Use or inability to use the service
• Any errors or omissions in the biodata generated
• Any decisions made based on biodata created using our tool
• Loss of data or technical issues during biodata creation
• Any matrimonial disputes or issues arising from biodata use

The service is provided "as is" and "as available" without any warranties of any kind.`,
  },
  {
    title: 'Third-Party Links',
    content: `Our website may contain links to third-party websites for reference or informational purposes. These links do not constitute endorsement of those sites. EasyBiodataMaker.com has no control over the content, privacy practices, or policies of third-party websites and accepts no responsibility for them.`,
  },
  {
    title: 'Intellectual Property',
    content: `The biodata templates, design, code, and content of EasyBiodataMaker.com are the intellectual property of EasyBiodataMaker.com. The biodata PDF you generate using your personal information belongs to you.

You may not:
• Copy, reproduce, or redistribute our website code or design
• Create competing biodata maker services using our codebase
• Claim ownership of our templates or design elements

You MAY:
• Share your generated biodata PDF freely with families and matrimonial sites
• Print your biodata PDF for personal use`,
  },
  {
    title: 'Changes to Service',
    content: `EasyBiodataMaker.com reserves the right to modify, suspend, or discontinue any part of the service at any time without notice. We may update features, templates, or the biodata format to improve quality. We are not liable for any service interruptions.`,
  },
  {
    title: 'Governing Law',
    content: `This disclaimer is governed by the laws of India. Any disputes relating to this disclaimer or the use of EasyBiodataMaker.com shall be subject to the exclusive jurisdiction of the courts of India.`,
  },
];


const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Disclaimer – EasyBiodataMaker',
  url: 'https://easybiodatamaker.com/disclaimer',
  isPartOf: { '@type': 'WebSite', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
};
export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 pb-6 border-b border-amber-100">
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-3">Disclaimer</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>EasyBiodataMaker.com</span>
              <span>•</span>
              <span>Last Updated: January 2024</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            Please read this disclaimer carefully before using EasyBiodataMaker.com. By accessing
            and using our free marriage biodata maker, you accept and agree to be bound by this
            disclaimer.
          </p>

          <div className="space-y-6">
            {sections.map(({ title, content }) => (
              <div key={title} className="card p-6">
                <h2 className="font-display text-xl font-bold text-maroon-800 mb-4">{title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-saffron-50 border border-saffron-200 rounded-xl text-sm text-saffron-800">
            <strong>Questions?</strong> If you have any questions about this disclaimer, please{' '}
            <a href="/contact" className="underline font-semibold">
              contact us
            </a>
            .
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
