import { buildMetadata } from '@/lib/seo';
import { SearchIntentLandingPage } from '@/components/seo/SearchIntentLandingPage';
import { SEARCH_INTENT_PAGES } from '@/lib/seo/searchIntentPages';

const page = SEARCH_INTENT_PAGES.find((item) => item.path === '/brahmin-biodata-format-for-marriage')!;

export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path });

export default function Page() {
  return <SearchIntentLandingPage page={page} />;
}
