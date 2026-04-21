import type { Metadata } from 'next';
import { AEOBlock } from '@/components/ui/AEOBlock';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marriage Biodata Blog – Tips, Formats & Guides 2024 | EasyBiodataMaker',
  description: 'Expert guides on Indian marriage biodata creation. How to write biodata, formats for all communities, partner expectations tips, common mistakes, NRI biodata guide. 100% free advice.',
  keywords: [
    'marriage biodata tips 2024','how to write biodata for marriage blog','shaadi biodata guide india','biodata format tips hindi','marriage biodata mistakes to avoid','partner expectations in biodata examples','biodata for nri marriage tips','how to write gotra in biodata','manglik biodata tips','biodata format for second marriage','intercaste marriage biodata tips','how to mention income in biodata','marriage biodata photo tips','biodata for girl how to write','biodata for boy how to write',
  ],
  alternates: { canonical: 'https://easybiodatamaker.com/blog' },
  openGraph: { title: 'Marriage Biodata Blog – Expert Tips & Guides', description: 'Complete guides on Indian marriage biodata — formats, writing tips, community guides, and more.', url: 'https://easybiodatamaker.com/blog' },
};

const articles = [
  {
    slug: '/blog/how-to-write-biodata-for-marriage',
    title: 'How to Write Biodata for Marriage – The Complete 2024 Guide',
    excerpt: 'clear, numbered guide to writing the perfect marriage biodata. What sections to include, what language to use, how long it should be, and 10 expert tips from matrimonial advisors.',
    category: 'Guide',
    categoryColor: 'bg-blue-100 text-blue-700',
    readTime: '12 min',
    date: 'Dec 28, 2024',
    keywords: ['how to write biodata','marriage biodata guide','biodata writing tips'],
    featured: true,
  },
  {
    slug: '/blog/marriage-biodata-format-india',
    title: 'Marriage Biodata Format India 2024 – Complete Section-by-Section Guide',
    excerpt: 'The standard Indian marriage biodata format explained section by section. What goes in personal details, family details, education, career and contact sections with real examples.',
    category: 'Format',
    categoryColor: 'bg-amber-100 text-amber-700',
    readTime: '10 min',
    date: 'Dec 26, 2024',
    keywords: ['marriage biodata format india','biodata format sections','standard biodata format'],
    featured: true,
  },
  {
    slug: '/blog/free-biodata-maker-vs-word-template',
    title: 'Free Biodata Maker vs Word Template – Which is Better in 2024?',
    excerpt: 'Should you use a free online biodata maker or download a Word template? We compare both options on design quality, ease of use, mobile support, privacy, and final output.',
    category: 'Comparison',
    categoryColor: 'bg-green-100 text-green-700',
    readTime: '7 min',
    date: 'Dec 24, 2024',
    keywords: ['biodata maker vs word template','free biodata maker online','biodata word format'],
    featured: false,
  },
  {
    slug: '/blog/what-to-write-in-partner-expectations',
    title: 'What to Write in Partner Expectations – 20 Real Examples for 2024',
    excerpt: 'The partner expectations section is the most personal part of a biodata. Here are 20 real examples for Hindu, Muslim, Sikh families, NRIs, and inter-caste open families.',
    category: 'Tips',
    categoryColor: 'bg-purple-100 text-purple-700',
    readTime: '8 min',
    date: 'Dec 22, 2024',
    keywords: ['what to write in partner expectations biodata','partner expectations examples','jeevan saathi expectations'],
    featured: true,
  },
  {
    slug: '/blog/biodata-mistakes-to-avoid',
    title: '15 Biodata Mistakes That Cost You Good Matches – Avoid These in 2024',
    excerpt: 'From exaggerating qualifications to leaving manglik blank — these 15 common biodata mistakes are silently killing your matrimonial prospects. Here is how to fix them.',
    category: 'Mistakes',
    categoryColor: 'bg-red-100 text-red-700',
    readTime: '9 min',
    date: 'Dec 20, 2024',
    keywords: ['biodata mistakes to avoid','marriage biodata errors','what not to write in biodata'],
    featured: false,
  },
  {
    slug: '/blog/nri-marriage-biodata-guide',
    title: 'NRI Marriage Biodata – Complete Guide for Indians Abroad 2024',
    excerpt: 'A complete guide for NRIs creating a marriage biodata from USA, UK, Canada, Australia, UAE. What extra information to include, how to mention visa status, income in foreign currency.',
    category: 'NRI',
    categoryColor: 'bg-teal-100 text-teal-700',
    readTime: '10 min',
    date: 'Dec 18, 2024',
    keywords: ['nri marriage biodata','overseas indian biodata','biodata for nri groom bride'],
    featured: false,
  },
  {
    slug: '/blog/intercaste-marriage-biodata',
    title: 'Inter-Caste Marriage Biodata – How to Write Caste No Bar 2024',
    excerpt: 'If you are open to inter-caste or inter-religion marriage, your biodata needs to communicate this clearly and respectfully. Here is exactly how to word it.',
    category: 'Guide',
    categoryColor: 'bg-blue-100 text-blue-700',
    readTime: '6 min',
    date: 'Dec 16, 2024',
    keywords: ['intercaste marriage biodata','caste no bar biodata','inter-religion biodata'],
    featured: false,
  },
  {
    slug: '/blog/second-marriage-biodata-guide',
    title: 'Second Marriage / Remarriage Biodata – A Sensitive & Complete Guide',
    excerpt: 'Creating a biodata for a second marriage or remarriage requires extra sensitivity. How to honestly mention divorce, widowhood, children — and still make a compelling biodata.',
    category: 'Guide',
    categoryColor: 'bg-blue-100 text-blue-700',
    readTime: '8 min',
    date: 'Dec 14, 2024',
    keywords: ['second marriage biodata','remarriage biodata india','divorce biodata format'],
    featured: false,
  },
];

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'EasyBiodataMaker Blog',
  description: 'Expert guides on Indian marriage biodata creation, formats, and tips',
  url: 'https://easybiodatamaker.com/blog',
  publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', url: 'https://easybiodatamaker.com' },
};


const aeoFaqs = [
  { question: 'What topics does the EasyBiodataMaker blog cover?', answer: 'The EasyBiodataMaker blog covers: how to write marriage biodata, partner expectations examples, biodata mistakes to avoid, community-specific biodata formats, NRI biodata guide, inter-caste marriage biodata, second marriage biodata, and more.' },
  { question: 'How often is the blog updated?', answer: 'The EasyBiodataMaker blog is updated regularly with new articles on Indian matrimonial biodata creation, community-specific formats, writing tips, and SEO guides for marriage biodata.' },
];

const aeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aeoFaqs.map((f: {question: string; answer: string}) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};
export default function BlogPage() {
  const featured = articles.filter(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-14 px-4 border-b border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-tag">Knowledge Center</span>
            <h1 className="font-display text-4xl font-bold text-maroon-900 mt-3 mb-4">
              Marriage Biodata Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Expert advice on Indian marriage biodatas — formats, writing tips, community guides, common
              mistakes, and everything in between. All articles are free.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">

            {/* Featured */}
            <h2 className="font-display text-xl font-bold text-maroon-900 mb-5 flex items-center gap-2">
              <Star size={18} className="text-saffron-500 fill-saffron-400" /> Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {featured.map(a => (
                <Link key={a.slug} href={a.slug}
                  className="card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${a.categoryColor}`}>{a.category}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={11} /> {a.readTime}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar size={11} /> {a.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-maroon-800 leading-snug mb-2 group-hover:text-saffron-700 transition-colors">{a.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{a.excerpt}</p>
                    <div className="flex flex-wrap gap-1">
                      {a.keywords.slice(0,2).map(k => (
                        <span key={k} className="text-[10px] bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                          <Tag size={8} /> {k}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 pb-4">
                    <span className="flex items-center gap-1.5 text-saffron-600 font-semibold text-sm group-hover:text-saffron-700">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* All articles */}
            <h2 className="font-display text-xl font-bold text-maroon-900 mb-5">All Articles</h2>
            <div className="space-y-4">
              {rest.map(a => (
                <Link key={a.slug} href={a.slug}
                  className="card p-5 flex items-start gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all group">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.categoryColor}`}>{a.category}</span>
                      <span className="text-xs text-gray-400">{a.readTime} · {a.date}</span>
                    </div>
                    <h3 className="font-bold text-maroon-800 group-hover:text-saffron-700 transition-colors text-sm mb-1">{a.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{a.excerpt.substring(0, 120)}...</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-saffron-500 transition-colors flex-shrink-0 mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-maroon-800 to-maroon-950 text-white text-center">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to Create Your Biodata?</h2>
          <p className="text-amber-200/80 text-sm mb-6">Free · 10 Templates · 7 Languages · Instant PDF</p>
          <Link href="/create" className="btn-primary">Create Free Biodata Now →</Link>
        </section>
      </main>

      <AEOBlock faqs={aeoFaqs} title="People Also Ask" ctaHref="/create" ctaText="Create Your Free Biodata" />
      <Footer />
    </div>
  );
}

// Need Star import
function Star({ size, className }: { size: number; className: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}
