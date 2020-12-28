import refs from './refs.js';
import handleInput from '../index.js';
import listTpl from '../templates/listMarkup.hbs';
import cardTpl from '../templates/cardMarkup.hbs';

function renderCountriesList(listData) {
  const markup = listTpl(listData);
  refs.coгntriesList.insertAdjacentHTML('beforeend', markup);

  refs.coгntriesList.addEventListener('click', handleCountriesList);
}

function renderCountryCard(cardData) {
  const markup = cardTpl(cardData);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);

  refs.coгntriesList.removeEventListener('click', handleCountriesList);
}

function clearPage() {
  refs.coгntriesList.innerHTML = '';
  refs.cardContainer.innerHTML = '';
  refs.cardContainer.classList.add('is-hidden');
  refs.coгntriesListWrapper.classList.add('is-hidden');
}

function handleCountriesList(evt) {
  const targetCountry = evt.target;
  // refs.input.value = targetCountry.dataset.name;
  refs.input.value = targetCountry.textContent;

  handleInput();
  if (!refs.input.value) {
    clearPage();
  }
}

export { renderCountriesList, renderCountryCard, clearPage };
