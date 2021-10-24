import test from 'ava';
import { i18n, geo } from '../dist/index';

test('i18n Mutations', (t) => {

  const sweden = i18n('SE')((locale) => ({ ...locale, hello: 'Hej!' }));
  const netherlands = i18n('NL')((locale) => ({ ...locale, hello: 'Hoi!' }));

  t.deepEqual(sweden, {
    countryCode: 'SE',
    countryName: 'Sweden',
    currencyCode: 'SEK',
    currencyPlacement: '# !',
    currencySymbol: 'kr',
    hello: 'Hej!'
  });

  t.deepEqual(netherlands, {
    countryCode: 'NL',
    countryName: 'Netherlands',
    currencyCode: 'EUR',
    currencyPlacement: '!#',
    currencySymbol: '€',
    hello: 'Hoi!'
  });

  t.pass();

});

test('Geo getter', (t) => {

  const sweden = geo('SE');
  const netherlands = geo('NL');

  t.deepEqual(sweden, {
    countryCode: 'SE',
    countryName: 'Sweden',
    currencyCode: 'SEK',
    currencyPlacement: '# !',
    currencySymbol: 'kr'
  });

  t.deepEqual(netherlands, {
    countryCode: 'NL',
    countryName: 'Netherlands',
    currencyCode: 'EUR',
    currencyPlacement: '!#',
    currencySymbol: '€'
  });

  t.pass();

});
