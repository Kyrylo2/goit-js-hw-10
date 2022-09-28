import './css/styles.css';
import { onInput } from './js/onInputFunc';
import { refs } from './js/refs';

import debounce from 'lodash.debounce';
// import countryMain from './tamplates/country-main-list.hbs';

const DEBOUNCE_DELAY = 300;

refs.iputField.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
