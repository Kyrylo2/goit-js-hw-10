import { fetchCountries } from './fetchCountries';
import { clearCountryes } from './clearCountryes';

export { onInput };

const onInput = e => {
  if (!e.target.value) return clearCountryes();

  return fetchCountries(e.target.value);
};
