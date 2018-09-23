const axios = require('axios');
import iconList from './cryptoIconList';
const rootURL = 'https://min-api.cryptocompare.com/data/';

export function getNews() {
  return axios.get(rootURL + 'v2/news/?lang=EN')
    .then(response => {
      return response.data.Data;
    })
    .catch(e => console.log(e));
}

/**
 * Returns a list of cryptocurrencies
 */
export function getCoinList() {
  const imageDir = '../node_modules/cryptocurrency-icons/32/color/';
  
  return axios.get(rootURL + 'all/coinlist')
    .then(response => {
      let coins = Object.keys(response.data.Data).map(key => {
        return response.data.Data[key];
      });
      const symbols = iconList.map(icon => icon.symbol);
      
      // Only get cryptos that we have icons for
      coins = coins.filter(coin => {
        return symbols.includes(coin.Symbol);
      });

      return Object.keys(coins).map(coin => {
        return {
          name: coins[coin].Name,
          symbol: coins[coin].Symbol,
          image: imageDir + coins[coin].Symbol + '.png',
          coinName: coins[coin].CoinName,
          fullName: coins[coin].FullName
        };
      });
    })
    .catch(e => console.log(e));
}