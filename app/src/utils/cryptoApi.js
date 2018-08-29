const axios = require('axios');
const rootURL = 'https://min-api.cryptocompare.com/data/';

export function getNews() {
  return axios.get(rootURL + 'v2/news/?lang=EN')
    .then(response => console.log(response));
}