import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Supported locales
export const locales = ['id', 'en', 'ar', 'vi', 'ja', 'fil', 'th'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'id';

// Locale labels
export const localeLabels: Record<Locale, string> = {
  id: 'Indonesia',
  en: 'English',
  ar: 'العربية',
  vi: 'Tiếng Việt',
  ja: '日本語',
  fil: 'Filipino',
  th: 'ไทย',
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Wait for the locale from the request
  const locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
