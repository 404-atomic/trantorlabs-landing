'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

// Create a singleton instance
const i18nInstance = i18next.createInstance();

i18nInstance
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string) => 
    import(`./locales/${language}.json`).then(module => module.default)
  ))
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false,
    },
    // SSR settings
    react: {
      useSuspense: false, // Disable suspense for SSR
      transEmptyNodeValue: '', // Return empty string for empty nodes
      transSupportBasicHtmlNodes: true, // Support basic HTML nodes
    },
    detection: {
      order: ['path', 'htmlTag'], // Only use stable detection methods for SSR
      caches: [], // Disable caching for SSR
    },
    preload: ['en'], // Preload default language
  });

export default i18nInstance;
