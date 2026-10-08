import { buildMetadata } from '@/lib/seo';
import { CommunityLandingPage } from '@/components/seo/CommunityLandingPage';
import { COMMUNITY_PAGES } from '@/lib/seo/communityPages';

const page = COMMUNITY_PAGES.find((item) => item.slug === 'marathi')!;

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path });

export default function Page() { return <CommunityLandingPage page={page} />; }
