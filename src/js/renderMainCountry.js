import { refs } from './refs';
import { changeBackgroundColor } from './changeBackgroundColor';
import { getStingFromArray } from './getStingFromArray';

export { renderMainCountry };

// { name, flags, capital, population, languages }

function renderMainCountry({ name, flags, capital, population, languages }) {
  // console.log(country);
  refs.container.classList.add('active');
  refs.countryMainDiv.classList.add('active');
  refs.countryList.classList.remove('active');
  refs.countryList.innerHTML = '';

  refs.countryMainDiv.innerHTML = `<ul class='country-main-list'>
    <li class='country-main-list__header'>
      <img
        src='${flags.png}'
        alt='${name.official}'
        class='country-main-list__image visible'
      />
      <h2 class='country-main-list__title'>${name.official}</h2>
    </li>
    <li class='country-main-list__attribute'><b>Capital</b>: ${getStingFromArray(
      capital
    )}</li>
    <li class='country-main-list__attribute'><b>Population</b>: ${population.toLocaleString()}</li>
    <li class='country-main-list__attribute'><b>Languages</b>: ${getStingFromArray(
      languages
    )}</li>
  </ul>`;

  changeBackgroundColor(flags.png);
}
