'use client';

import { useLang } from '@/lib/LangContext';
import { LANGUAGE_OPTIONS } from '@/lib/translations';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { lang, setLang } = useLang();

  return (
    <div className="card p-4 mb-4">
      <h3 className="font-bold text-maroon-800 text-sm mb-3 flex items-center gap-2">
        <Globe size={15} className="text-saffron-500" />
        Select Form Language
      </h3>
      <div className="grid grid-cols-2 gap-1.5">
        {LANGUAGE_OPTIONS.map(({ value, native, flag }) => (
          <button
            key={value}
            onClick={() => setLang(value)}
            className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-semibold transition-all border ${
              lang === value
                ? 'bg-saffron-500 text-white border-saffron-500 shadow-md'
                : 'bg-white text-gray-600 border-amber-200 hover:border-saffron-300 hover:bg-amber-50'
            }`}
          >
            <span className="text-base leading-none">{flag}</span>
            <span>{native}</span>
            {lang === value && <span className="ml-auto text-white/80">✓</span>}
          </button>
        ))}
      </div>
      {lang !== 'en' && (
        <p className="text-[10px] text-gray-400 mt-2 text-center">
          All form labels will switch to {LANGUAGE_OPTIONS.find(o => o.value === lang)?.native}
        </p>
      )}
    </div>
  );
}
