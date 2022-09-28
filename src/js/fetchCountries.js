export { fetchCountries };
export { renderMainCountry };
export { getStingFromArray };
export { onInput };

import { FastAverageColor } from 'fast-average-color';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const countryList = document.querySelector('.country-list');
const countryMainDiv = document.querySelector('.country-info');
const iputField = document.querySelector('input');
const bgColor = document.querySelector('.animative-color-bg');
const mainTilteH1 = document.querySelector('h1');
const allImages = document.querySelector('img');

const onInput = function (e) {
  if (!e.target.value) return clearCountryes();

  return fetchCountries(e.target.value);
};

const fetchCountries = function (input) {
  fetch(`https://restcountries.com/v3.1/name/${input}`)
    .then(response => {
      return response.json();
    })
    .then(country => {
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
    })
    .catch(function () {
      clearCountryes();
      Notify.failure('Oops, there is no country with that name');
    });
};

function renderMainCountry({ name, flags, capital, population, languages }) {
  countryMainDiv.classList.add('active');
  countryList.classList.remove('active');

  countryMainDiv.innerHTML = `<ul class='country-main-list'>
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

function renderCountryList(countries) {
  countryList.classList.add('active');
  countryMainDiv.classList.remove('active');
  const listOfCountries = countries
    .map(
      country =>
        `<li class='country-list__item'>
        <img
          src='${country.flags}'
          alt='${country.name}'
          class='country-list__image'
        />
        <p class='country-list__title'>${country.name}</p>
      </li>`
    )
    .join('');

  countryList.innerHTML = listOfCountries;
}

function getStingFromArray(languages) {
  return Object.values(languages).join(', ').trim().slice(0, -1);
}

function clearCountryes() {
  bgColor.style.removeProperty('background-color');
  countryList.classList.remove('active');
  countryMainDiv.classList.remove('active');
  iputField.value = '';
}

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

function changeBackgroundColor(currentFlag) {
  const fac = new FastAverageColor();

  fac
    .getColorAsync(currentFlag)
    .then(color => {
      document.querySelector(
        'img.visible'
      ).style.filter = `drop-shadow(0 0 10px ${color.hex})`;
      bgColor.style.backgroundColor = `${color.hex}80`;
      mainTilteH1.style.color = color.isDark ? '#fff' : '#999';
    })
    .catch(e => {
      // console.log(e);
    });
}
