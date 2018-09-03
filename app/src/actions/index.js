export const addCoins = coins => ({
  type: 'ADD_COINS',
  coins
});

export const addNews = newsList => ({
  type: 'ADD_NEWS',
  newsList,
  time: new Date().getTime()
});

export const updateTick = time => ({
  type: 'UPDATE_TICK',
  time
});