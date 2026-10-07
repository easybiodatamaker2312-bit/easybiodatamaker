import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Marriage Biodata Templates | EasyBiodataMaker',
  description: 'Browse marriage biodata templates for Indian families, with printable A4 layouts, photos, custom fields and language-aware styling.',
  alternates: { canonical: 'https://easybiodatamaker.com/templates' },
  openGraph: {
    title: 'Marriage Biodata Templates | EasyBiodataMaker',
    description: 'Browse printable marriage biodata templates with A4 layouts and flexible photo and field options.',
    url: 'https://easybiodatamaker.com/templates',
    type: 'website',
  },
};

export default function TemplatesLayout({ children }: { children: ReactNode }) {
  return children;
}
