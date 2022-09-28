import { getStingFromArray } from './getStingFromArray';

export { createCountryObj };

function createCountryObj(country) {
  return country.map(
    country =>
      (country = {
        name: country.name.official,
        flags: country.flags.png,
        capital: getStingFromArray(country.capital),
        population: country.population.toLocaleString(),
        languages: getStingFromArray(country.languages),
      })
  );
}
