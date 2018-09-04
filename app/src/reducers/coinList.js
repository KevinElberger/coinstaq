const coinList = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COINS':
      return [
        ...state, action.coins
      ];
    default:
      return state;
  }
};

export default coinList;