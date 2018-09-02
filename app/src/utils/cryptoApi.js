const axios = require('axios');
const rootURL = 'https://min-api.cryptocompare.com/data/';

export function getNews() {
  return axios.get(rootURL + 'v2/news/?lang=EN')
    .then(response => {
      return response.data.Data;
    })
    .catch(e => console.log(e));
}

/**
 * Returns the top 30 cryptocurrencies by market value
 */
export function getCoinList() {
  return axios.get(rootURL + 'all/coinlist')
    .then(response => {
      let coins = Object.keys(response.data.Data).map(key => {
        return response.data.Data[key];
      });
      
      coins = coins.filter(coin => {
        return Number(coin.SortOrder) <= 30;
      });

      return Object.keys(coins).map(coin => {
        return {
          name: coins[coin].Name,
          symbol: coins[coin].Symbol,
          coinName: coins[coin].CoinName,
          fullName: coins[coin].FullName
        };
      });
    })
    .catch(e => console.log(e));
}