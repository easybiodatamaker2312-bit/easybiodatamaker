import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service – EasyBiodataMaker.com',
  description:
    'Terms of Service for EasyBiodataMaker.com. Read the terms and conditions for using our free online marriage biodata maker.',
  alternates: { canonical: 'https://easybiodatamaker.com/terms-of-service' },
  robots: { index: true, follow: false },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using EasyBiodataMaker.com ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.

These terms apply to all visitors, users, and others who access or use the Service.`,
  },
  {
    title: '2. Description of Service',
    content: `EasyBiodataMaker.com provides a free online tool that allows users to:
• Create marriage biodata documents by filling a multi-step form
• Preview the biodata in a professional Indian format
• Download the biodata as a PDF document

The Service is provided free of charge and does not require user registration or account creation.`,
  },
  {
    title: '3. Acceptable Use',
    content: `You agree to use EasyBiodataMaker.com only for lawful purposes. You must NOT use the Service to:

• Create biodata with false, misleading, or fraudulent information
• Impersonate another person or entity
• Create biodata on behalf of others without their knowledge and consent
• Use the Service for commercial purposes without our permission
• Attempt to hack, scrape, or disrupt the Service
• Violate any applicable Indian or international laws
• Harass, stalk, or threaten individuals using biodata created on our platform

Violation of these terms may result in IP blocking and legal action.`,
  },
  {
    title: '4. User Content',
    content: `You retain full ownership of the personal information you enter and the biodata PDF you generate. By using the Service, you grant EasyBiodataMaker.com a limited license to process your entered data solely within your browser session to generate your biodata.

You are solely responsible for ensuring that:
• All information in your biodata is accurate and truthful
• You have the right to share the information you enter
• Your use of the generated biodata complies with all applicable laws`,
  },
  {
    title: '5. Free Service & Future Changes',
    content: `EasyBiodataMaker.com is currently provided free of charge. We reserve the right to:
• Introduce premium paid features in the future (while keeping basic features free)
• Modify, update, or discontinue any features
• Add watermarks or limitations to free downloads
• Change the terms of the free service with reasonable notice

We will endeavour to notify users of major changes via the website.`,
  },
  {
    title: '6. Intellectual Property',
    content: `All website content, design, templates, code, and branding are the property of EasyBiodataMaker.com and are protected by intellectual property laws.

You may not copy, reproduce, modify, distribute, or create derivative works from our website without explicit written permission.

The biodata PDF you generate is your personal document and you may use it freely for personal matrimonial purposes.`,
  },
  {
    title: '7. Disclaimer of Warranties',
    content: `THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES. USE THE SERVICE AT YOUR OWN RISK.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, EASYBIODATAMAKER.COM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE.`,
  },
  {
    title: '9. Governing Law & Jurisdiction',
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.`,
  },
  {
    title: '10. Changes to Terms',
    content: `We may revise these Terms at any time. By continuing to use the Service after changes, you agree to the revised Terms. It is your responsibility to review these Terms periodically.`,
  },
  {
    title: '11. Contact',
    content: `For questions about these Terms, contact us at: legal@easybiodatamaker.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 pb-6 border-b border-amber-100">
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-3">
              Terms of Service
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>EasyBiodataMaker.com</span>
              <span>•</span>
              <span>Effective: January 1, 2024</span>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map(({ title, content }) => (
              <div key={title} className="card p-6">
                <h2 className="font-display text-xl font-bold text-maroon-800 mb-4">{title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
