import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Heart, Shield, Zap, Users, Award, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About EasyBiodataMaker – Free Marriage Biodata Maker for Indians',
  description:
    'Learn about EasyBiodataMaker.com – India\'s most trusted free online marriage biodata maker. Create professional shaadi biodata in minutes without any registration.',
  alternates: { canonical: 'https://easybiodatamaker.com/about' },
  openGraph: {
    title: 'About EasyBiodataMaker – Free Marriage Biodata Maker',
    description: 'India\'s simplest free marriage biodata maker. No login, instant PDF download.',
    url: 'https://easybiodatamaker.com/about',
  },
  keywords: [
    'about easybiodatamaker',
    'free marriage biodata maker india',
    'online biodata maker for shaadi',
    'best biodata maker for marriage',
    'biodata website india',
    'marriage biodata generator free',
  ],
};

const values = [
  { icon: Heart, title: 'Made for India', desc: 'Built specifically for Indian families across all communities – Hindu, Muslim, Sikh, Christian, Jain & more.' },
  { icon: Shield, title: 'Privacy First', desc: 'Your personal data never leaves your browser. We store nothing on our servers. Zero data collection.' },
  { icon: Zap, title: 'Instant & Free', desc: 'Create and download your complete marriage biodata as a PDF in under 5 minutes. Always free, no hidden charges.' },
  { icon: Users, title: 'Family Friendly', desc: 'Simple enough for elders to use. No tech knowledge required. Works on mobile, tablet and desktop.' },
  { icon: Award, title: 'Professional Quality', desc: 'Traditional Indian biodata format with beautiful typography that families and matrimonial sites expect.' },
  { icon: Globe, title: 'All Communities', desc: 'Supports biodata formats for all religions, castes and communities across every Indian state.' },
];

const stats = [
  { value: '50,000+', label: 'Biodatas Created' },
  { value: '100%', label: 'Free Forever' },
  { value: '28+', label: 'States Covered' },
  { value: '4.9★', label: 'User Rating' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-4 border-b border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-tag">Our Story</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mb-6">
              About EasyBiodataMaker
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We believe every Indian family deserves a beautiful, professional marriage biodata —
              completely free, without any technical hassle or privacy concerns.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 bg-maroon-900">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-3xl font-bold text-saffron-400">{value}</div>
                <div className="text-amber-200/70 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-maroon-900 mb-6">Our Mission</h2>
            <div className="prose prose-gray text-gray-600 space-y-4 text-base leading-relaxed">
              <p>
                EasyBiodataMaker.com was born out of a simple observation: creating a marriage biodata
                in India is unnecessarily complicated. Families either hire expensive designers, struggle
                with MS Word templates, or share their data with sketchy matrimonial websites.
              </p>
              <p>
                We built <strong>India's simplest free marriage biodata maker</strong> that requires
                zero technical skills, zero registration, and costs absolutely nothing. Fill a simple
                form, preview your biodata, and download a beautiful PDF — in under 5 minutes.
              </p>
              <p>
                Our biodata format follows the traditional Indian style trusted by families across all
                communities — Brahmin, Patel, Rajput, Agarwal, Kayastha, and hundreds more. Whether
                you need a <strong>Hindu marriage biodata format</strong>, Muslim nikah biodata, or
                Sikh shaadi biodata, we've got you covered.
              </p>
              <p>
                Most importantly, <strong>your data stays private</strong>. We don't have servers storing
                your name, date of birth, or family details. Everything happens in your browser only.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 bg-amber-50/40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-maroon-900">What We Stand For</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card p-6">
                  <div className="w-11 h-11 bg-saffron-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-saffron-600" size={20} />
                  </div>
                  <h3 className="font-bold text-maroon-800 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
              Why EasyBiodataMaker is the Best Free Biodata Maker in India
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Searching for a <strong>free biodata format for marriage download</strong>? You've found
                the right place. Unlike other biodata maker websites that ask for email registration,
                charge hidden fees, or sell your data to matrimonial agencies, EasyBiodataMaker is
                completely transparent and free.
              </p>
              <p>
                Our <strong>marriage biodata format in Word</strong> alternative provides an even better
                experience — a professionally designed PDF template that looks better than any Word
                document and works on all devices.
              </p>
              <p>
                We support biodata creation for all Indian communities including{' '}
                <strong>Hindu biodata for marriage</strong>, Muslim biodata format,
                Sikh marriage biodata, Christian biodata, Jain biodata, and Buddhist biodata formats.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-maroon-800 to-maroon-950 text-white text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Ready to Create Your Biodata?</h2>
          <p className="text-amber-200/80 mb-6 text-sm">
            Join 50,000+ families who created their marriage biodata with us
          </p>
          <Link href="/create" className="btn-primary">
            Create Free Biodata Now →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
