'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { loadBiodata } from '@/lib/utils';
import { downloadBiodataAsPDF } from '@/lib/pdf';
import type { BiodataFormData } from '@/types/biodata';
import { TEMPLATES, type TemplateId } from './AllTemplates';
import { Download, ArrowLeft, Edit, Loader2, Upload, X, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PreviewClient() {
  const [data, setData] = useState<BiodataFormData | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>('classic');
  const [photos, setPhotos] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const [showTemplates, setShowTemplates] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = loadBiodata();
    if (!saved) { router.push('/create'); return; }
    setData(saved as BiodataFormData);
  }, [router]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.slice(0, 3).forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPhotos(prev => [...prev.slice(0, 2), ev.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadError('');
    try {
      const name = data?.fullName?.replace(/\s+/g, '-').toLowerCase() || 'biodata';
      await downloadBiodataAsPDF('biodata-preview', `${name}-marriage-biodata.pdf`);
    } catch {
      setDownloadError('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const templateIds = Object.keys(TEMPLATES) as TemplateId[];
  const currentIdx = templateIds.indexOf(selectedTemplate);

  const prevTemplate = () => setSelectedTemplate(templateIds[(currentIdx - 1 + templateIds.length) % templateIds.length]);
  const nextTemplate = () => setSelectedTemplate(templateIds[(currentIdx + 1) % templateIds.length]);

  if (!data) return (
    <div className="flex items-center justify-center min-h-64">
      <Loader2 className="animate-spin text-saffron-500" size={32} />
    </div>
  );

  const TemplateComponent = TEMPLATES[selectedTemplate].component;
  const tpl = TEMPLATES[selectedTemplate];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Top controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 no-print">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-800">Preview & Download</h1>
          <p className="text-gray-500 text-sm">Choose template · Upload photos · Download PDF</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/create" className="btn-secondary text-sm py-2 px-4">
            <Edit size={16} /> Edit Form
          </Link>
          <button onClick={handleDownload} disabled={isDownloading} className="btn-primary text-sm py-2 px-5 disabled:opacity-70">
            {isDownloading ? <><Loader2 size={16} className="animate-spin" /> Generating…</> : <><Download size={16} /> Download PDF</>}
          </button>
        </div>
      </div>

      {downloadError && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-4 text-sm">{downloadError}</div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar: Template picker + Photo upload */}
        <div className="lg:w-72 flex-shrink-0 space-y-4 no-print">

          {/* Photo upload */}
          <div className="card p-4">
            <h3 className="font-bold text-maroon-800 text-sm mb-3 flex items-center gap-2">
              <ImageIcon size={16} className="text-saffron-500" /> Upload Photos (up to 3)
            </h3>

            {photos.length > 0 && (
              <div className="flex gap-2 mb-3 flex-wrap">
                {photos.map((photo, i) => (
                  <div key={i} className="relative">
                    <img src={photo} alt={`Photo ${i+1}`} className="w-16 h-20 object-cover rounded border-2 border-saffron-200" />
                    <button onClick={() => removePhoto(i)} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                      <X size={10} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handlePhotoUpload} className="hidden" />
            <button onClick={() => fileInputRef.current?.click()} className="w-full border-2 border-dashed border-amber-300 rounded-xl py-3 px-4 text-sm text-saffron-600 hover:bg-saffron-50 hover:border-saffron-400 transition-all flex items-center justify-center gap-2">
              <Upload size={16} /> {photos.length > 0 ? 'Add More Photos' : 'Upload Photo'}
            </button>
            <p className="text-xs text-gray-400 mt-2 text-center">Photo appears on biodata. JPG/PNG, max 5MB each</p>
          </div>

          {/* Template selector */}
          <div className="card p-4">
            <h3 className="font-bold text-maroon-800 text-sm mb-3">Choose Template</h3>

            {/* Current template nav */}
            <div className="flex items-center justify-between mb-3 bg-amber-50 rounded-lg p-3">
              <button onClick={prevTemplate} className="w-8 h-8 rounded-lg bg-white border border-amber-200 flex items-center justify-center hover:border-saffron-400 transition-colors">
                <ChevronLeft size={16} className="text-saffron-600" />
              </button>
              <div className="text-center">
                <div className="text-xl">{tpl.emoji}</div>
                <div className="text-xs font-bold text-maroon-800 mt-0.5">{tpl.name}</div>
                <div className="text-[10px] text-gray-400">{tpl.lang}</div>
              </div>
              <button onClick={nextTemplate} className="w-8 h-8 rounded-lg bg-white border border-amber-200 flex items-center justify-center hover:border-saffron-400 transition-colors">
                <ChevronRight size={16} className="text-saffron-600" />
              </button>
            </div>

            {/* Grid of all templates */}
            <div className="grid grid-cols-5 gap-1.5">
              {templateIds.map(id => {
                const t = TEMPLATES[id];
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedTemplate(id)}
                    title={t.name}
                    className={`aspect-square rounded-lg border-2 flex items-center justify-center text-xl transition-all ${selectedTemplate === id ? 'border-saffron-500 bg-saffron-50 scale-110' : 'border-amber-100 bg-white hover:border-amber-300'}`}
                  >
                    {t.emoji}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 space-y-1">
              <div className="text-xs text-gray-400 flex justify-between"><span>Community</span><span className="font-medium text-gray-600">{tpl.community}</span></div>
              <div className="text-xs text-gray-400 flex justify-between"><span>Language</span><span className="font-medium text-gray-600">{tpl.lang}</span></div>
              <div className="text-xs text-gray-400 flex justify-between"><span>Colors</span><span className="font-medium text-gray-600">{tpl.colors}</span></div>
            </div>
          </div>

          {/* All templates list */}
          <div className="card p-4">
            <h3 className="font-bold text-maroon-800 text-sm mb-3">All {templateIds.length} Templates</h3>
            <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
              {templateIds.map(id => {
                const t = TEMPLATES[id];
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedTemplate(id)}
                    className={`w-full flex items-center gap-2.5 p-2 rounded-lg text-left transition-all text-xs ${selectedTemplate === id ? 'bg-saffron-100 border border-saffron-300' : 'hover:bg-amber-50 border border-transparent'}`}
                  >
                    <span className="text-base">{t.emoji}</span>
                    <div>
                      <div className="font-semibold text-maroon-800">{t.name}</div>
                      <div className="text-gray-400">{t.community}</div>
                    </div>
                    {selectedTemplate === id && <span className="ml-auto text-saffron-500">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="flex-1 min-w-0">
          <div className="overflow-x-auto rounded-xl shadow-2xl">
            <div style={{ transformOrigin: 'top left' }}>
              <TemplateComponent data={data} photos={photos} />
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 no-print">
            ✓ All 10 templates free · PDF watermark: EasyBiodataMaker.com
          </p>
        </div>
      </div>
    </div>
  );
}
