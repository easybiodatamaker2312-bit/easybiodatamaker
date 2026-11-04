import { buildMetadata } from '@/lib/seo';
import BiodataBuilderClient from './BiodataBuilderClient';

export const metadata = buildMetadata({
  title: 'Create Your Marriage Biodata | EasyBiodataMaker',
  description: 'Create your marriage biodata in the browser with guided fields, photos and live preview. No account is required to start editing.',
  path: '/create',
  noIndex: true,
});

export default function CreatePage() {
  return <BiodataBuilderClient />;
}
