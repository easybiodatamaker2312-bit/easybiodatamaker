import type { Metadata } from 'next';
import { CommunityLandingPage } from '@/components/seo/CommunityLandingPage';
import { COMMUNITY_PAGES } from '@/lib/seo/communityPages';

const page = COMMUNITY_PAGES.find((item) => item.slug === 'hindi')!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `https://easybiodatamaker.com${page.path}` },
  openGraph: { title: page.title, description: page.description, url: `https://easybiodatamaker.com${page.path}`, type: 'article' },
};

export default function Page() { return <CommunityLandingPage page={page} />; }
