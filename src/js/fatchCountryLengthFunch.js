import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { renderCountryList } from './renderCountryList';
import { renderMainCountry } from './renderMainCountry';

export { fatchCountryLengthFunch };

const fatchCountryLengthFunch = function (country) {
  if (country.length >= 10) {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }

  if (country.length > 1 && country.length < 10) {
    return renderCountryList(country);
  }
  const [countryMain] = country;
  return renderMainCountry(countryMain);
};
