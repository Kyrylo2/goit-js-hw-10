import { refs } from './refs';

export { renderCountryList };

function renderCountryList(countries) {
  const listOfCountries = countries
    .map(
      country =>
        `<li class='country-list__item'>
        <img
          src='${country.flags.png}'
          alt='${country.name.official}'
          class='country-list__image'
        />
        <p class='country-list__title'>${country.name.official}</p>
      </li>`
    )
    .join('');

  refs.countryList.innerHTML = listOfCountries;

  refs.bgColor.style.backgroundColor = ``;
  refs.container.classList.add('active');
  refs.countryList.classList.add('active');
  refs.countryMainDiv.classList.remove('active');
  refs.countryMainDiv.innerHTML = '';
}
