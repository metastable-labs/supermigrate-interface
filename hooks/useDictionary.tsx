import { Locale } from '@/config/internationalization/i18n';
// import "server-only";

export const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
};

const useDictionary = () => {
  const getDictionary = async (locale: Locale) => dictionaries[locale]();

  return getDictionary;
};

export default useDictionary;
