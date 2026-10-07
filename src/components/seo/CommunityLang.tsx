'use client';
import { useEffect } from 'react';
import type { SupportedLanguage } from '@/lib/translations';
export function CommunityLang({ lang }: { lang: SupportedLanguage }) {
  useEffect(() => { document.documentElement.lang = lang === 'en' ? 'en' : `${lang}-IN`; return () => { document.documentElement.lang = 'en'; }; }, [lang]);
  return null;
}
