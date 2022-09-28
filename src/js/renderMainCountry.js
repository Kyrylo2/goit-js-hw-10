import { refs } from './refs';
import { changeBackgroundColor } from './changeBackgroundColor';

export { renderMainCountry };

function renderMainCountry({ name, flags, capital, population, languages }) {
  refs.container.classList.add('active');
  refs.countryMainDiv.classList.add('active');
  refs.countryList.classList.remove('active');
  refs.countryList.innerHTML = '';

  refs.countryMainDiv.innerHTML = `<ul class='country-main-list'>
    <li class='country-main-list__header'>
      <img
        src='${flags}'
        alt='${name}'
        class='country-main-list__image visible'
      />
      <h2 class='country-main-list__title'>${name}</h2>
    </li>
    <li class='country-main-list__attribute'><b>Capital</b>: ${capital}</li>
    <li class='country-main-list__attribute'><b>Population</b>: ${population}</li>
    <li class='country-main-list__attribute'><b>Languages</b>: ${languages}</li>
  </ul>`;

  changeBackgroundColor(flags);
}
