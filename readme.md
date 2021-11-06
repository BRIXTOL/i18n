## @brixtol/i18n

Static GeoIP utilities which accepts a **3166-1 alpha-2** country code and returns a JSON object with relevant Geographical information.

### Why?

The vast majority of GeoIP services were doing too much or too little. We wanted a basic static powered GeoIP that would return exactly what we required in a fast and efficient manner. This project is composed from a series of small packages that map information from a series of datasets.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm add @brixtol/i18n
```

[npm](https://www.npmjs.com/)

```cli
npm install @brixtol/i18n
```

[Yarn](https://yarnpkg.com/)

```cli
yarn add @brixtol/i18n
```

## Usage

Pass in a currency code that is lowercase, uppercase or a mixture of both. There is 1 export available, the `i18n` function exposes `mutate` option in the 2nd parameter. When `true` function is curried. If you do not need to mutate the default response is returned.

### Response

The i18n response will return the following response (locale) information:

```ts
interface IGeoIP {
  /**
   * The 2 Letter country code
   */
  countryCode: string;
  /**
   * The Country Name (in English)
   */
  countryName: string;
  /**
   * The 3 letter Currency Code
   */
  currencyCode: string;
  /**
   * The Currency Symbol
   */
  currencySymbol: string;
  /**
   * The Currency Placement
   */
  currencyPlacement: string;
}
```

### Example

```ts
import { i18n } from '@brixtol/i18n';

const default = geo('NL')
// => IGeoIP

const mutator = i18n('NL', { mutate: true})(locale => ({ ...locale, hello: 'hoi!' }))
// => IGeoIP & { hello: 'hoi!' }
```

### Packages

This module constructs the response by using the following smaller modules:

- [@brixtol/country-names](https://github.com/BRIXTOL/country-names)
- [@brixtol/currency-codes](https://github.com/BRIXTOL/currency-codes)
- [@brixtol/currency-placements](https://github.com/BRIXTOL/currency-symbol-placements)
- [@brixtol/currency-symbols](https://github.com/BRIXTOL/currency-symbols)

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
