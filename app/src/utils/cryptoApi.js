const axios = require('axios');
const rootURL = 'https://min-api.cryptocompare.com/data/';

export function getNews() {
  return axios.get(rootURL + 'v2/news/?lang=EN')
    .then(response => {
      return response.data.Data;
    })
    .catch(e => console.log(e));
}