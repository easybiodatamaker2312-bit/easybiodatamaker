import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog – Marriage Biodata Tips, Formats & Guides | EasyBiodataMaker',
  description:
    'Expert guides on Indian marriage biodata — how to write biodata, common mistakes, community-specific formats, partner expectations, and more. Free tips for Indian families.',
  alternates: { canonical: 'https://easybiodatamaker.com/blog' },
  keywords: [
    'marriage biodata tips',
    'how to write biodata for marriage blog',
    'shaadi biodata guide',
    'biodata maker tips india',
    'marriage biodata mistakes to avoid',
    'partner expectations in biodata',
    'biodata for nri marriage',
    'modern marriage biodata format',
  ],
};

const articles = [
  {
    slug: 'how-to-make-biodata-for-marriage',
    title: 'How to Make Biodata for Marriage – Complete Step-by-Step Guide',
    excerpt: 'Everything you need to know to create the perfect marriage biodata — from structure and format to tips and common mistakes to avoid.',
    category: 'Guide',
    readTime: '10 min',
    date: 'Jan 15, 2024',
    keywords: ['how to make biodata', 'marriage biodata format', 'biodata guide'],
    internal: true,
  },
  {
    slug: 'free-biodata-format-download',
    title: 'Free Biodata Format for Marriage – Why Online is Better Than Word',
    excerpt: 'Stop struggling with Word templates. Here\'s why creating your biodata online gives a better, more professional result and how to do it for free.',
    category: 'Download',
    readTime: '5 min',
    date: 'Jan 20, 2024',
    keywords: ['free biodata format', 'biodata template download'],
    internal: true,
  },
  {
    slug: 'hindu-marriage-biodata-format',
    title: 'Hindu Marriage Biodata Format – Gotra, Manglik & All Fields Explained',
    excerpt: 'A complete guide to creating a Hindu marriage biodata. Everything about gotra, manglik status, kundali details, caste, and all Hindu-specific fields.',
    category: 'Community',
    readTime: '8 min',
    date: 'Feb 1, 2024',
    keywords: ['hindu biodata format', 'gotra in biodata', 'manglik biodata'],
    internal: true,
  },
  {
    title: 'What to Write in Partner Expectations in Biodata – 15 Examples',
    excerpt: 'Writing partner expectations is the trickiest part of a marriage biodata. Here are 15 real examples for different communities, broken down by what works and what doesn\'t.',
    category: 'Tips',
    readTime: '7 min',
    date: 'Feb 10, 2024',
    keywords: ['partner expectations biodata', 'what to write in expectations'],
    internal: false,
  },
  {
    title: '10 Common Mistakes in Marriage Biodata (And How to Fix Them)',
    excerpt: 'From leaving mandatory fields blank to exaggerating qualifications — here are the 10 most common biodata mistakes Indian families make and how to avoid them.',
    category: 'Tips',
    readTime: '6 min',
    date: 'Feb 18, 2024',
    keywords: ['biodata mistakes', 'marriage biodata errors'],
    internal: false,
  },
  {
    title: 'NRI Marriage Biodata – Special Tips for Overseas Indians',
    excerpt: 'Creating a marriage biodata as an NRI requires special considerations — visa status, income in foreign currency, and different cultural expectations. Here\'s a full guide.',
    category: 'NRI',
    readTime: '8 min',
    date: 'Mar 1, 2024',
    keywords: ['nri marriage biodata', 'overseas indian biodata'],
    internal: false,
  },
  {
    title: 'Intercast Marriage Biodata – How to Mention Caste No Bar',
    excerpt: 'If you\'re open to inter-caste or inter-religion marriage, your biodata needs to clearly communicate this. Here\'s exactly how to word it respectfully.',
    category: 'Guide',
    readTime: '5 min',
    date: 'Mar 10, 2024',
    keywords: ['intercaste marriage biodata', 'caste no bar biodata'],
    internal: false,
  },
  {
    title: 'Marriage Biodata for Divorcees – A Sensitive Guide',
    excerpt: 'Remarriage biodatas need to handle previous marriage details sensitively. Here\'s how to create an honest yet compelling biodata for a second marriage.',
    category: 'Guide',
    readTime: '6 min',
    date: 'Mar 20, 2024',
    keywords: ['divorce remarriage biodata', 'second marriage biodata'],
    internal: false,
  },
];

const categoryColors: Record<string, string> = {
  Guide: 'bg-blue-100 text-blue-700',
  Download: 'bg-green-100 text-green-700',
  Community: 'bg-saffron-100 text-saffron-700',
  Tips: 'bg-purple-100 text-purple-700',
  NRI: 'bg-teal-100 text-teal-700',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-tag">Knowledge Center</span>
            <h1 className="font-display text-4xl font-bold text-maroon-900 mt-3 mb-4">
              Marriage Biodata Tips & Guides
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert advice on Indian marriage biodatas — formats, writing tips, community guides,
              and everything in between.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, i) => (
                <article key={i} className="card overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={11} /> {article.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={11} /> {article.date}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-lg text-maroon-800 leading-snug mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {article.keywords.map((kw) => (
                        <span key={kw} className="text-xs bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 rounded-full">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-5">
                    {article.internal && 'slug' in article ? (
                      <Link
                        href={`/${article.slug}`}
                        className="flex items-center gap-2 text-saffron-600 font-semibold text-sm hover:text-saffron-700 transition-colors"
                      >
                        Read Article <ArrowRight size={15} />
                      </Link>
                    ) : (
                      <span className="flex items-center gap-2 text-gray-300 text-sm">
                        Coming Soon <ArrowRight size={15} />
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-maroon-800 to-maroon-950 text-white text-center">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to Create Your Biodata?</h2>
          <p className="text-amber-200/80 text-sm mb-6">Free · Instant · No Login Required</p>
          <Link href="/create" className="btn-primary">
            Create Biodata Now →
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  );
}
