import { getDateFnsLocale } from '~/shared/utils/get-date-fns-locale';
import { DEFAULT_CURRENCY } from '~/shared/repository/constants';

export function getLocalizedPrice(currencyISOCode: string, languageISOCode: string, amount: number): string {
  const { code } = getDateFnsLocale(languageISOCode);
  const useDefaultCurrency = USE_FAKE_BACKEND || !currencyISOCode;

  return new Intl.NumberFormat(code,
    {
      style: 'currency',
      currency: useDefaultCurrency ? DEFAULT_CURRENCY : currencyISOCode,
      minimumFractionDigits: 2
    }).format(amount);
}
