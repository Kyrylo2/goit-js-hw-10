import { refs } from './refs';

export { clearCountryes };

function clearCountryes() {
  refs.iputField.value = '';
  refs.countryMainDiv.innerHTML = '';
  refs.countryList.innerHTML = '';

  refs.countryMainDiv.classList.remove('active');
  refs.countryList.classList.remove('active');
  refs.container.classList.remove('active');

  refs.bgColor.style.removeProperty('background-color');
}
