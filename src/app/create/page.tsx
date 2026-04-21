import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import DynamicForm from '@/components/form/DynamicForm';

export const metadata: Metadata = {
  title: 'Create Marriage Biodata – Dynamic Form | EasyBiodataMaker',
  description: 'Create your marriage biodata with a fully dynamic form. Add, remove, rename any field. 7 languages. Upload photos. Download PDF free.',
  robots: { index: false, follow: false },
};

export default function CreatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30">
      <Navbar />
      <main className="flex-1 py-10 px-4">
        <DynamicForm />
      </main>
      <Footer />
    </div>
  );
}
