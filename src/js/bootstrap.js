import { setWrappersHeight } from './utils';

window.addEventListener('resize', setWrappersHeight);

(() => {
  setWrappersHeight();
})();
