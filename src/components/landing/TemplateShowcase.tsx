'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TEMPLATES, type TemplateId } from '@/components/biodata/TemplateRegistry';
import { defaultBiodata } from '@/lib/biodata-schema';
import { useBiodataView } from '@/lib/useBiodataView';

const sample = {
  ...defaultBiodata,
  fullName: 'Aarav Mehta',
  dateOfBirth: '1997-08-14',
  placeOfBirth: 'Ahmedabad, Gujarat',
  height: '5\'10"',
  religion: 'Hindu',
  caste: 'Vaishnav',
  fatherName: 'Rajesh Mehta',
  motherName: 'Nisha Mehta',
  highestQualification: 'B.Tech, Computer Science',
  occupation: 'Product Engineer',
  organization: 'Technology Company',
  city: 'Ahmedabad',
  state: 'Gujarat',
  phone: '+91 98765 43210',
  email: 'aarav@example.com',
  aboutMe: 'Calm, family-oriented and curious about the world. I enjoy travel, reading and building useful products.',
  expectations: 'Looking for a kind, grounded partner who values family, growth and mutual respect.',
};

const showcaseIds: TemplateId[] = ['midnight-gold', 'blush-rose-floral', 'emerald-palace', 'kanjivaram-temple'];

export function LandingTemplatePreview({ templateId, compact = false }: { templateId: TemplateId; compact?: boolean }) {
  const definition = TEMPLATES[templateId];
  const view = useBiodataView(sample, 'en', ['basics', 'family', 'education', 'about', 'contact', 'photos'], {}, true, [], []);
  const Layout = definition.Layout;
  return (
    <div className={`overflow-hidden rounded-[4px] border border-stone-200 bg-white shadow-[0_22px_70px_rgba(28,25,23,.14)] ${compact ? 'aspect-[210/297]' : 'aspect-[210/297]'}`}>
      <div className="origin-top-left" style={{ width: '210mm', height: '297mm', transform: compact ? 'scale(.28)' : 'scale(.42)' }}>
        <Layout view={view} auspiciousSymbol="none" colorway={definition.colorways[0]} />
      </div>
    </div>
  );
}

export default function TemplateShowcase() {
  return <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {showcaseIds.map((id) => {
      const template = TEMPLATES[id];
      return <Link href={`/create?template=${id}`} key={id} className="group rounded-2xl border border-stone-200/80 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <LandingTemplatePreview templateId={id} compact />
        <div className="px-2 pb-2 pt-4"><div className="flex items-center justify-between gap-2"><h3 className="font-display text-xl font-semibold">{template.name}</h3><ArrowRight size={16} className="text-stone-400 transition group-hover:translate-x-1 group-hover:text-ink" /></div><p className="mt-1 text-xs uppercase tracking-[.14em] text-stone-400">{template.category}</p></div>
      </Link>;
    })}
  </div>;
}
