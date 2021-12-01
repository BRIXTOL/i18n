import test from 'ava';
import { i18n } from '../dist/index';

test('i18n Fail', (t) => {

  t.throws(() => i18n('WW'), {
    message: 'Error: "WW" is an invalid ISO country code'
  });

  t.pass();

});

test('i18n Mutations', (t) => {

  const sweden = i18n('SE', {
    mutate: true
  })((locale) => ({ ...locale, hello: 'Hej!' }));

  const netherlands = i18n('NL', {
    mutate: true
  })((locale) => ({ ...locale, hello: 'Hoi!' }));

  t.deepEqual(sweden, {
    countryCode: 'SE',
    countryName: 'Sweden',
    currencyCode: 'SEK',
    currencyPlacement: '# !',
    currencySymbol: 'kr',
    continentCode: 'EU',
    continentName: 'Europe',
    hello: 'Hej!'
  });

  t.deepEqual(netherlands, {
    countryCode: 'NL',
    countryName: 'Netherlands',
    currencyCode: 'EUR',
    currencyPlacement: '!#',
    currencySymbol: '€',
    continentCode: 'EU',
    continentName: 'Europe',
    hello: 'Hoi!'
  });

  t.pass();

});

test('Geo getter', (t) => {

  const sweden = i18n('SE');
  const netherlands = i18n('NL');

  t.deepEqual(sweden, {
    countryCode: 'SE',
    countryName: 'Sweden',
    currencyCode: 'SEK',
    currencyPlacement: '# !',
    currencySymbol: 'kr',
    continentCode: 'EU',
    continentName: 'Europe'
  });

  t.deepEqual(netherlands, {
    countryCode: 'NL',
    countryName: 'Netherlands',
    currencyCode: 'EUR',
    currencyPlacement: '!#',
    currencySymbol: '€',
    continentCode: 'EU',
    continentName: 'Europe'
  });

  t.pass();

});
