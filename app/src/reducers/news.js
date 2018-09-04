const initialState = {
  newsList: [],
  updateTime: 0
};

const news = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NEWS':
      return Object.assign({}, state, {
        newsList: action.newsList,
        updateTime: 0
      });
    case 'UPDATE_TICK':
      return Object.assign({}, state, {
        updateTime: action.time + state.updateTime
      });
    default:
      return state;
  }
};

export default news;