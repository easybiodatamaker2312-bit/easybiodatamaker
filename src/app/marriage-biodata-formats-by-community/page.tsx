import { buildMetadata, getSitePage } from '@/lib/seo';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { COMMUNITY_PAGES } from '@/lib/seo/communityPages';

const page = getSitePage('/marriage-biodata-formats-by-community');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: page.type });

const breadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
 { '@type':'ListItem',position:1,name:'Home',item:'https://easybiodatamaker.com/' },
 { '@type':'ListItem',position:2,name:'Formats by community',item:'https://easybiodatamaker.com/marriage-biodata-formats-by-community' },
]};

export default function CommunityHubPage() {
 return <div className="min-h-screen flex flex-col bg-[#FBF7F0]"><Navbar/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}}/><main className="flex-1">
  <section className="border-b border-stone-200 bg-white px-4 py-14"><div className="mx-auto max-w-5xl"><p className="text-sm font-semibold uppercase tracking-[.18em] text-[#B8893B]">Indian marriage biodata</p><h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#1C1917]">Marriage Biodata Formats by Community</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">Different families use different details when introducing a prospective match. These guides explain which fields may be useful, which should remain optional, how to protect private information, and how to start a biodata without login.</p><Link href="/create" className="btn-primary mt-7 inline-flex">Create a biodata</Link></div></section>
  <section className="mx-auto max-w-6xl px-4 py-12"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{COMMUNITY_PAGES.map((page)=><article key={page.slug} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"><p className="text-sm text-[#B8893B]">{page.nativeName}</p><h2 className="mt-2 font-display text-2xl text-stone-900">{page.name} biodata</h2><p className="mt-3 text-sm leading-6 text-stone-600">{page.intro}</p><Link href={page.path} className="mt-5 inline-flex text-sm font-semibold text-[#6B1E2E]">Read the {page.name} guide →</Link></article>)}</div></section>
  <section className="mx-auto max-w-6xl px-4 pb-10"><h2 className="font-display text-3xl">More community-specific formats</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{[
    ['/maratha-biodata-format','Maratha biodata'],['/brahmin-biodata-format-for-marriage','Brahmin biodata'],['/rajput-marriage-biodata-format','Rajput biodata'],['/anand-karaj-biodata-format','Anand Karaj biodata'],['/islamic-biodata-for-marriage','Islamic marriage biodata'],
  ].map(([href,label])=><Link key={href} href={href} className="rounded-xl border border-stone-200 bg-white p-4 text-sm font-semibold hover:border-gold">{label}</Link>)}</div></section>
  <section className="mx-auto max-w-4xl px-4 pb-16"><h2 className="font-display text-3xl">What these guides have in common</h2><div className="mt-5 space-y-4 text-stone-700 leading-8"><p>Every guide starts with the same privacy-first principle: a marriage biodata is an introduction, not an identity file. Government ID numbers, passport details, exact home addresses and financial documents do not belong in a version that may be forwarded through relatives.</p><p>The community pages also keep cultural fields optional. A term can be important to one family and irrelevant to another. Where a field is tradition-specific, the guide explains when it may be useful rather than presenting it as a rule for everyone in that community.</p><p>Each guide links to a real biodata template and the builder. You can choose the recommended design, change optional fields, add a custom field and hide contact details before creating the final document.</p></div></section>
 </main><Footer/></div>;
}
