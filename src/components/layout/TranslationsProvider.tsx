'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n/client';

interface TranslationsProviderProps {
  children: ReactNode;
  locale: string;
}

export function TranslationsProvider({
  children,
  locale,
}: TranslationsProviderProps) {
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
