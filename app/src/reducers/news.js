const initialState = {
  newsList: [],
  loaded: false,
  updateTime: new Date().getTime()
};

// TODO: Fix timestamp bug
const news = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NEWS':
      return Object.assign({}, state, {
        loaded: true,
        newsList: action.newsList,
        updateTime: new Date(action.time - state.updateTime).getTime()
      });
    case 'UPDATE_TICK':
      return Object.assign({}, state, {
        updateTime: action.time - state.updateTime
      });
    default:
      return state;
  }
};

export default news;