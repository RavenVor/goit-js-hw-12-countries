function fetchCountries(countryName) {
  const url = `https://restcountries.eu/rest/v2/name/${countryName}?fields=name;flag;capital;population;languages`;

  return fetch(url).then(res => {
    if (res.ok) return res.json();
    throw new Error('Error fatching data');
  });
}

export default fetchCountries;
