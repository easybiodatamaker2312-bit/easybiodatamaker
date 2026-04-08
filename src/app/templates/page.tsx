import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Lock, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marriage Biodata Templates – Free & Premium | EasyBiodataMaker',
  description:
    'Browse free and premium marriage biodata templates. Classic Indian format, modern minimal, and community-specific templates. Create your biodata instantly.',
  alternates: { canonical: 'https://easybiodatamaker.com/templates' },
  keywords: [
    'marriage biodata templates',
    'free biodata template for marriage',
    'biodata design for marriage',
    'shaadi biodata template download',
    'marriage biodata template word',
    'biodata format template india',
    'modern biodata template marriage',
    'traditional biodata template',
    'premium biodata template',
    'biodata template pdf free',
  ],
};

const templates = [
  {
    id: 'classic',
    name: 'Classic Indian',
    desc: 'Traditional Indian marriage biodata with Sanskrit invocation, decorative borders, and all standard fields.',
    tags: ['Hindu', 'All Communities', 'Traditional'],
    isPremium: false,
    preview: '🕉️',
    color: 'from-amber-100 to-orange-100',
  },
  {
    id: 'modern',
    name: 'Modern Minimal',
    desc: 'Clean, contemporary design for urban professionals and NRI families. Elegant typography.',
    tags: ['Modern', 'NRI', 'Urban'],
    isPremium: true,
    preview: '✦',
    color: 'from-slate-100 to-gray-100',
  },
  {
    id: 'royal',
    name: 'Royal Heritage',
    desc: 'Ornate design with royal borders and gold accents. Perfect for Rajput, Maratha, and royal families.',
    tags: ['Rajput', 'Premium', 'Ornate'],
    isPremium: true,
    preview: '👑',
    color: 'from-yellow-100 to-amber-100',
  },
  {
    id: 'south',
    name: 'South Indian',
    desc: 'Extended 2-page format with all fields relevant to South Indian Tamil, Telugu, Kannada, and Malayalam communities.',
    tags: ['South India', 'Tamil', 'Telugu'],
    isPremium: true,
    preview: '🌺',
    color: 'from-green-100 to-emerald-100',
  },
  {
    id: 'islamic',
    name: 'Islamic Nikah',
    desc: 'Muslim marriage biodata template with Arabic Bismillah header, biradari, and Islamic values section.',
    tags: ['Muslim', 'Nikah', 'Islamic'],
    isPremium: true,
    preview: '☪️',
    color: 'from-teal-100 to-cyan-100',
  },
  {
    id: 'christian',
    name: 'Christian Marriage',
    desc: 'Christian biodata format with denomination, church details, and all relevant family information.',
    tags: ['Christian', 'Church', 'Modern'],
    isPremium: true,
    preview: '✝️',
    color: 'from-blue-100 to-indigo-100',
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-tag">Templates</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-maroon-900 mt-3 mb-5">
              Marriage Biodata Templates
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our collection of free and premium marriage biodata templates designed for
              all Indian communities.
            </p>
          </div>
        </section>

        {/* Templates grid */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div key={template.id} className="card overflow-hidden group">
                  {/* Preview area */}
                  <div className={`h-36 bg-gradient-to-br ${template.color} flex items-center justify-center text-5xl relative`}>
                    {template.preview}
                    {template.isPremium && (
                      <div className="absolute top-3 right-3 bg-maroon-800 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Lock size={10} /> Premium
                      </div>
                    )}
                    {!template.isPremium && (
                      <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        FREE
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-maroon-800 mb-2">
                      {template.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{template.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {template.tags.map((tag) => (
                        <span key={tag} className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {template.isPremium ? (
                      <button disabled className="w-full btn-secondary text-sm py-2 opacity-60 cursor-not-allowed justify-center">
                        <Lock size={14} /> Coming Soon
                      </button>
                    ) : (
                      <Link href="/create" className="btn-primary w-full justify-center text-sm py-2">
                        Use This Template →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Premium notice */}
            <div className="mt-10 card p-6 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold-400 text-gold-400" />)}
              </div>
              <h2 className="font-display text-2xl font-bold text-maroon-900 mb-2">
                Premium Templates Coming Soon
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto mb-4">
                We're designing beautiful premium templates for all communities. The Classic Indian
                template is free forever. Premium templates will be available at a one-time affordable
                price.
              </p>
              <Link href="/create" className="btn-primary">
                Use Classic Template Free →
              </Link>
            </div>
          </div>
        </section>

        {/* SEO content */}
        <section className="py-12 px-4 bg-amber-50/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-maroon-900 mb-4">
              Why Use a Professional Biodata Template?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              A professionally designed <strong>marriage biodata template</strong> makes a strong
              first impression on prospective families. Our templates are specifically designed for
              Indian matrimonial purposes, following the traditional layout that families expect.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Unlike generic resume templates or Word documents, our marriage biodata templates
              include all India-specific fields like caste, gotra, manglik status, and family details,
              presented in the format that Indian families are comfortable with.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
