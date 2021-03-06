export const addCoins = coins => ({
  type: 'ADD_COINS',
  coins
});

export const monitorCoin = coin => ({
  type: 'MONITOR_COIN',
  coin
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

export const addMessages = messages => ({
  type: 'ADD_MESSAGES',
  messages
});