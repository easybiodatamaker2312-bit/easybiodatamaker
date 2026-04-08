import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import PreviewClient from '@/components/biodata/PreviewClient';

export const metadata: Metadata = {
  title: 'Preview & Download Your Marriage Biodata PDF | EasyBiodataMaker',
  description: 'Preview your marriage biodata and download as professional PDF. Choose from 10 free templates. Upload photos.',
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 py-8 px-4 sm:px-6">
        <PreviewClient />
      </main>
      <Footer />
    </div>
  );
}
