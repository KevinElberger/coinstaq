const news = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NEWS':
      return [
        ...state, news
      ];
    default:
      return state;
  }
};

export default news;