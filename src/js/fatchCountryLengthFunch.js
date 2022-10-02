import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { renderCountryList } from './renderCountryList';
import { renderMainCountry } from './renderMainCountry';
import { createCountryObj } from './createCountryObj';

export { fatchCountryLengthFunch };

const fatchCountryLengthFunch = function (country) {
  if (country.length >= 10) {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }

  const countryObj = createCountryObj(country);

  if (countryObj.length > 1 && countryObj.length < 10) {
    return renderCountryList(countryObj);
  }
  const [countryMain] = countryObj;
  return renderMainCountry(countryMain);
};
