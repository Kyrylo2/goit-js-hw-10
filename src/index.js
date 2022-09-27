import './css/styles.css';
import { onInput } from './js/fetchCountries';
import debounce from 'lodash.debounce';
// import countryMain from './tamplates/country-main-list.hbs';

const DEBOUNCE_DELAY = 500;

const iputField = document.querySelector('input');

iputField.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
