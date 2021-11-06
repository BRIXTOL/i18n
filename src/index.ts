import { getCurrency } from '@brixtol/currency-codes';
import { getCountryName, CountryCodes } from '@brixtol/country-names';
import { getCurrencySymbol } from '@brixtol/currency-symbols';
import { getPlacement } from '@brixtol/currency-symbol-placements';
import { LiteralUnion } from '@brixtol/tsutils';
export * from '@brixtol/country-names';
export * from '@brixtol/currency-symbols';
export * from '@brixtol/currency-codes';

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

export interface IOptions {
  /**
   * Whether or not the response should be
   * mutated. i18n mutations will invoke a
   * curried function return.
   *
   * @default false
   */
  mutate?: boolean;
}

export function i18n <
  O extends IOptions,
  R extends O['mutate'] extends true
  ? <T = unknown> (
    callback: (
      locale: Partial<IGeoIP>
  ) => T) => T
  : IGeoIP
>(
  countryCode: LiteralUnion<CountryCodes>,
  options: O
): R {

  const geoip: Partial<IGeoIP> = {};

  try {

    geoip.countryCode = countryCode;
    geoip.countryName = getCountryName(countryCode);
    geoip.currencyCode = getCurrency(countryCode);
    geoip.currencySymbol = getCurrencySymbol(geoip.currencyCode);
    geoip.currencyPlacement = getPlacement(geoip.currencyCode);

    return <R>(options?.mutate ? (callback) => callback(geoip) : geoip);

  } catch (error) {

    throw new Error(error);

  }
};
