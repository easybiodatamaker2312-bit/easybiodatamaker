'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TEMPLATES, type TemplateId } from '@/components/biodata/TemplateRegistry';
import { defaultBiodata } from '@/lib/biodata-schema';
import { useBiodataView } from '@/lib/useBiodataView';

const sampleFor = (variant: 'man' | 'woman') => ({
  ...defaultBiodata,
  fullName: variant === 'woman' ? 'Ananya' : 'Aarav',
  dateOfBirth: variant === 'woman' ? '1999-03-22' : '1997-08-14',
  timeOfBirth: variant === 'woman' ? '10:30 AM' : '09:15 AM',
  placeOfBirth: 'Ahmedabad, Gujarat',
  height: variant === 'woman' ? '5\'5"' : '5\'10"',
  religion: 'Hindu',
  caste: 'Vaishnav',
  fatherName: variant === 'woman' ? 'Sanjay' : 'Rajesh',
  motherName: variant === 'woman' ? 'Kavita' : 'Nisha',
  highestQualification: variant === 'woman' ? 'M.Sc, Information Technology' : 'B.Tech, Computer Science',
  occupation: variant === 'woman' ? 'Architect' : 'Product Engineer',
  organization: variant === 'woman' ? 'Design Studio' : 'Technology Company',
  city: 'Ahmedabad',
  state: 'Gujarat',
  phone: variant === 'woman' ? '+91 98765 12340' : '+91 98765 43210',
  email: variant === 'woman' ? 'ananya.demo@example.com' : 'aarav.demo@example.com',
  aboutMe: variant === 'woman' ? 'Creative, warm and curious. I enjoy art, music, exploring new places and spending time with family.' : 'Thoughtful, family-oriented and curious. I enjoy travel, reading and building useful products.',
  expectations: 'Looking for a kind, understanding partner who values family, growth and mutual respect.',
});

const showcaseIds: TemplateId[] = ['gold-frame', 'blush-rose-floral', 'emerald-palace', 'kanjivaram-temple'];

export function LandingTemplatePreview({ templateId, compact = false, variant = 'man' }: { templateId: TemplateId; compact?: boolean; variant?: 'man' | 'woman' }) {
  const definition = TEMPLATES[templateId];
  const sample = sampleFor(variant);
  const photos = [{ id: `demo-${variant}`, name: `${variant === 'woman' ? 'Bride' : 'Groom'} demo portrait`, dataUrl: variant === 'woman' ? '/demo/sample-bride.jpg' : '/demo/sample-groom.jpg' }];
  const view = useBiodataView(sample, 'en', ['basics', 'family', 'education', 'about', 'contact', 'photos'], {}, true, photos, []);
  const Layout = definition.Layout;
  return (
    <div className={`overflow-hidden rounded-[4px] border border-stone-200 bg-white shadow-[0_22px_70px_rgba(28,25,23,.14)] ${compact ? 'aspect-[210/297]' : 'aspect-[210/297]'}`}>
      <div className="origin-top-left" style={{ width: '210mm', height: '297mm', transform: compact ? 'scale(.28)' : 'scale(.42)' }}>
        <Layout view={view} auspiciousSymbol="none" colorway={definition.colorways[0]} />
      </div>
    </div>
  );
}


export function HeroBiodataPair() {
  return (
    <div className="hero-demo-pair" aria-label="Groom and bride sample biodata previews">
      <div className="hero-demo-card hero-demo-man">
        <span className="hero-demo-label">GROOM · SAMPLE</span>
        <LandingTemplatePreview templateId="blush-rose-floral" variant="man" />
      </div>
      <div className="hero-demo-card hero-demo-woman">
        <span className="hero-demo-label">BRIDE · SAMPLE</span>
        <LandingTemplatePreview templateId="pearl-lavender" variant="woman" />
      </div>
      <div className="hero-demo-caption">Groom & bride examples · fictional demo details</div>
    </div>
  );
}

export default function TemplateShowcase() {
  return <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {showcaseIds.map((id, index) => {
      const template = TEMPLATES[id];
      return <Link href={`/create?template=${id}`} key={id} className="group rounded-2xl border border-stone-200/80 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <LandingTemplatePreview templateId={id} compact variant={index % 2 === 0 ? 'man' : 'woman'} />
        <div className="px-2 pb-2 pt-4"><div className="flex items-center justify-between gap-2"><h3 className="font-display text-xl font-semibold">{template.name}</h3><ArrowRight size={16} className="text-stone-400 transition group-hover:translate-x-1 group-hover:text-ink" /></div><p className="mt-1 text-xs uppercase tracking-[.14em] text-stone-400">{template.category}</p></div>
      </Link>;
    })}
  </div>;
}
