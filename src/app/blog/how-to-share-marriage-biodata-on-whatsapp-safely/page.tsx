import { buildMetadata, getSitePage } from '@/lib/seo';
import { ANSWER_GUIDE_ARTICLES } from '@/lib/seo/answerGuideArticles';
import { AnswerGuideArticle } from '@/components/seo/AnswerGuideArticle';

const page = getSitePage('/blog/how-to-share-marriage-biodata-on-whatsapp-safely');
export const metadata = buildMetadata({ title: page.title, description: page.description, path: page.path, type: 'article' });

export default function Page() {
  const article = ANSWER_GUIDE_ARTICLES.find((item) => item.path === '/blog/how-to-share-marriage-biodata-on-whatsapp-safely');
  if (!article) return null;
  return <AnswerGuideArticle article={article} />;
}
