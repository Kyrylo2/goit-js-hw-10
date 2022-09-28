import { fetchCountries } from './fetchCountries';
import { clearCountryes } from './clearCountryes';

export { onInput };

const onInput = function (e) {
  if (!e.target.value) return clearCountryes();
  console.log(e.target.value);

  return fetchCountries(e.target.value);
};
