import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorBox } from '@/components/seo/AuthorBox';

export type GuideArticle = {
  path: string; title: string; description: string; intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedPath: string; relatedLabel: string;
};

export function AnswerGuideArticle({ article }: { article: GuideArticle }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: article.title, description: article.description,
    datePublished: '2026-10-11', dateModified: '2026-10-11',
    author: { '@type': 'Person', name: 'Karan Shah', url: 'https://easybiodatamaker.com/about' },
    mainEntityOfPage: `https://easybiodatamaker.com${article.path}`,
    publisher: { '@type': 'Organization', name: 'EasyBiodataMaker', logo: { '@type': 'ImageObject', url: 'https://easybiodatamaker.com/icon-192.png' } }
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: article.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
  return <main className="min-h-screen bg-[#FBF7F0] text-stone-900"><Navbar />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
      <Breadcrumbs items={[{label:'Home',href:'/'},{label:'Blog',href:'/blog'},{label:article.title}]} />
      <article className="mt-8 rounded-3xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Practical guide · EasyBiodataMaker</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-stone-600">{article.intro}</p>
        <p className="mt-3 text-sm text-stone-500">Reviewed on 11 October 2026</p>
        {article.sections.map(section => <section key={section.heading} className="mt-9"><h2 className="font-display text-2xl font-semibold">{section.heading}</h2>{section.paragraphs.map(p => <p key={p} className="mt-4 text-base leading-8 text-stone-700">{p}</p>)}</section>)}
        <section className="mt-10 rounded-2xl bg-[#FFFCF7] p-5"><h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>{article.faqs.map(f => <div key={f.question} className="mt-5"><h3 className="font-semibold">{f.question}</h3><p className="mt-2 text-sm leading-7 text-stone-600">{f.answer}</p></div>)}</section>
        <div className="mt-10 flex flex-wrap gap-3"><Link href={article.relatedPath} className="btn-primary">{article.relatedLabel}</Link><Link href="/marriage-biodata-guides" className="btn-secondary">Browse all guides</Link></div>
      </article><AuthorBox reviewedOn="11 October 2026" />
    </div><Footer /></main>;
}
