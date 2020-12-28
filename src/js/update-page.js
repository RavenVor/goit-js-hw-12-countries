import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import toastrOptions from './options/options.js';
import refs from './refs.js';
import {
  renderCountriesList,
  renderCountryCard,
  clearPage,
} from './render-markup.js';

export default function updatePage(data) {
  if (data.length > 10) {
    toastr.warning(
      'Too many matches found. Please enter a more specific query!',
    );
    clearPage();
  }

  if (data.length > 1 && data.length <= 10) {
    clearPage();
    refs.cardContainer.classList.add('is-hidden');
    refs.coгntriesListWrapper.classList.remove('is-hidden');

    renderCountriesList(data);
  }

  if (data.length === 1) {
    clearPage();
    refs.coгntriesListWrapper.classList.add('is-hidden');
    refs.cardContainer.classList.remove('is-hidden');

    renderCountryCard(data);
  }
}
