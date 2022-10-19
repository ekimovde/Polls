import * as Locales from 'date-fns/locale';
import { Locale } from 'date-fns';

export function getDateFnsLocale(locale: string, country = ''): Locale {
  const currentLocal = Locales[locale];

  if (currentLocal) {
    return Locales[locale] as Locale;
  }

  const countryLocale = `${locale}${country}`;
  const currentCountryLocale = Locales[countryLocale];

  if (currentCountryLocale) {
    return Locales[countryLocale] as Locale;
  }

  return locale === 'en'
    ? Locales.enUS
    : Locales.ru;
}
