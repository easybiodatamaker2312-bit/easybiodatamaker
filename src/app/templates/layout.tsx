import { buildMetadata, getSitePage } from '@/lib/seo';
import type { ReactNode } from 'react';

const page = getSitePage('/templates');

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path });

export default function TemplatesLayout({ children }: { children: ReactNode }) {
  return children;
}
