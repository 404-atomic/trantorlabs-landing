import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';

const i18nConfig = {
  resources: {
    en: enTranslations,
    zh: zhTranslations,
  },
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

export default i18next;
