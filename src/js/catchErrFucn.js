import { clearCountryes } from './clearCountryes';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export { catchErrFunc };

const catchErrFunc = function (e) {
  clearCountryes();

  Notify.failure('Oops, there is no country with that name');
  throw new Error(e.message);
};
