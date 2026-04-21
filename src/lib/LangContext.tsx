'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type SupportedLanguage, TRANSLATIONS, type FieldLabels } from '@/lib/translations';

interface LangContextType {
  lang: SupportedLanguage;
  setLang: (l: SupportedLanguage) => void;
  t: FieldLabels;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: TRANSLATIONS['en'],
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    const saved = sessionStorage.getItem('biodata_lang') as SupportedLanguage | null;
    if (saved && TRANSLATIONS[saved]) setLangState(saved);
  }, []);

  const setLang = (l: SupportedLanguage) => {
    setLangState(l);
    sessionStorage.setItem('biodata_lang', l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
