import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Mail, MessageSquare, Clock, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us – EasyBiodataMaker.com | Free Marriage Biodata Maker',
  description:
    'Contact EasyBiodataMaker.com for support, feedback, or queries about our free marriage biodata maker. We\'re here to help!',
  alternates: { canonical: 'https://easybiodatamaker.com/contact' },
};

const faqs = [
  {
    q: 'Is EasyBiodataMaker really free?',
    a: 'Yes! Creating and downloading your marriage biodata is 100% free. No hidden charges, no subscription required.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No registration or login required. Just fill the form and download your biodata instantly.',
  },
  {
    q: 'Is my personal data safe?',
    a: 'Absolutely. Your data is stored only in your browser session and never sent to our servers.',
  },
  {
    q: 'Can I edit my biodata after downloading?',
    a: 'Yes! Go back to /create, your form data will be available. Edit and re-download anytime.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl font-bold text-maroon-900 mb-4">Contact Us</h1>
            <p className="text-gray-600">
              Have a question, suggestion, or issue? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-saffron-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-saffron-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-maroon-800 mb-1">Email Support</div>
                    <a
                      href="mailto:support@easybiodatamaker.com"
                      className="text-saffron-600 hover:text-saffron-700 text-sm"
                    >
                      support@easybiodatamaker.com
                    </a>
                    <p className="text-xs text-gray-400 mt-1">For technical issues and bugs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-saffron-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-saffron-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-maroon-800 mb-1">General Enquiries</div>
                    <a
                      href="mailto:hello@easybiodatamaker.com"
                      className="text-saffron-600 hover:text-saffron-700 text-sm"
                    >
                      hello@easybiodatamaker.com
                    </a>
                    <p className="text-xs text-gray-400 mt-1">For partnerships and feedback</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-saffron-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-saffron-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-maroon-800 mb-1">Response Time</div>
                    <p className="text-sm text-gray-600">Within 24–48 hours on business days</p>
                    <p className="text-xs text-gray-400 mt-1">Monday to Saturday, 10 AM – 6 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle size={16} className="text-saffron-600" />
                  <span className="font-semibold text-sm text-maroon-800">Quick Help</span>
                </div>
                <p className="text-sm text-gray-600">
                  For common questions, check our{' '}
                  <Link href="/faq" className="text-saffron-600 underline font-medium">
                    FAQ page
                  </Link>{' '}
                  — most issues are answered there instantly.
                </p>
              </div>
            </div>

            {/* Quick FAQs */}
            <div>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-6">
                Quick Answers
              </h2>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="card p-4">
                    <h3 className="font-semibold text-maroon-800 text-sm mb-2">{q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/faq" className="text-saffron-600 text-sm underline font-medium">
                  View all FAQs →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
