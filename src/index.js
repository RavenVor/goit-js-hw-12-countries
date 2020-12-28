import debounce from 'lodash.debounce';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import toastrOptions from './js/options/options.js';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import updatePage from './js/update-page.js';
import { clearPage } from './js/render-markup.js';
import './styles.css';

export default function handleInput() {
  let countryName = refs.input.value;

  if (countryName !== '') {
    fetchCountries(countryName)
      .then(data => {
        updatePage(data);
      })
      .catch(() => {
        clearPage();
        toastr.error('404 Not Found!');
      });
  }
  clearPage();
}

refs.input.addEventListener('input', debounce(handleInput, 500));
