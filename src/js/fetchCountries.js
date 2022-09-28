export { fetchCountries };

import { catchErrFunc } from './catchErrFucn';
import { fatchCountryLengthFunch } from './fatchCountryLengthFunch';

const BASE_URL = 'https://restcountries.com/v3.1';

const fetchCountries = function (input) {
  fetch(`${BASE_URL}/name/${input}`)
    .then(response => {
      return response.json();
    })
    .then(fatchCountryLengthFunch)
    .catch(catchErrFunc);
};
