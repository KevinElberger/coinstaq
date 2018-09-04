const coinList = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COINS':
      return action.coins;
    default:
      return state;
  }
};

export default coinList;