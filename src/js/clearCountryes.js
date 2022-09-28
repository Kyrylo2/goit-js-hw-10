import { refs } from './refs';

export { clearCountryes };

function clearCountryes() {
  refs.countryMainDiv.classList.remove('active');
  refs.bgColor.style.removeProperty('background-color');
  refs.countryList.classList.remove('active');
  refs.container.classList.remove('active');
  refs.iputField.value = '';
}
