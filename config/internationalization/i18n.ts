export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de', 'es', 'fr'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export type LangParamProp = { lang: Locale };
