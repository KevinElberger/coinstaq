const initialState = {
  profit: false,
  portfolioCoins: []
};

const portfolio = (state = initialState, action) => {
  switch(action) {
    case 'MONITOR_COIN':
      return Object.assign({}, state, {
        portfolioCoins: [...state.portfolioCoins, action.coin]
      });
    default:
      return state;
  }
};

export default portfolio;