import { buildMetadata, getSitePage } from '@/lib/seo';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BiodataTextGenerator } from '@/components/tools/BiodataTextGenerator';
const page = getSitePage('/tools/about-me-generator');
export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: 'website' });
export default function ToolPage() {
 return <main className="min-h-screen bg-[#FBF7F0] text-stone-900"><Navbar/><div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12"><Breadcrumbs items={[{label:'Home',href:'/'},{label:'Writing tools',href:'/marriage-biodata-guides'},{label:page.title}]}/><header className="mt-8"><p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-700">Free writing tool · No login</p><h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">{page.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">Write a natural introduction for a marriage biodata by choosing the details that genuinely describe you. This browser-based helper creates a draft you can edit before adding it to your biodata.</p><p className="mt-3 max-w-3xl text-sm leading-7 text-stone-500">The tool generates a starting point from the values you enter. It does not verify personal claims or decide compatibility. Review every sentence before sharing.</p></header><BiodataTextGenerator kind="about"/></div><Footer/></main>;
}
