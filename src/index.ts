import { getCurrency } from '@brixtol/currency-codes';
import { ICountries, getCountryName } from '@brixtol/country-names';
import { ICurrencySymbols, getCurrencySymbol } from '@brixtol/currency-symbols';
import { IPlacements, getPlacement } from '@brixtol/currency-symbol-placements';

export interface IGeoIP {
  /**
   * The 2 Letter country code
   */
  countryCode: string,
  /**
   * The Country Name (in English)
   */
  countryName: string,
  /**
   * The 3 letter Currency Code
   */
  currencyCode: string,
  /**
   * The Currency Symbol
   */
  currencySymbol: string,
  /**
   * The Currency Placement
   */
  currencyPlacement: string
}

const get = (countryCode: keyof ICountries): IGeoIP => {

  const countryName = getCountryName(countryCode);
  const currencyCode = getCurrency(countryCode);
  const currencySymbol = getCurrencySymbol(currencyCode as keyof ICurrencySymbols);
  const currencyPlacement = getPlacement(currencyCode as keyof IPlacements);

  return {
    countryCode,
    countryName,
    currencyCode,
    currencySymbol,
    currencyPlacement
  };
};

export const i18n = (
  countryCode: keyof ICountries
) => <T = unknown>(
  callback: (locale: Partial<IGeoIP>) => T
) => callback(get(countryCode));

export const geo = (
  countryCode: keyof ICountries
) => get(countryCode);
