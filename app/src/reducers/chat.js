const initialState = {
  messages: [],
  connected: false,
  typing: false
};

const chat = (state = initialState, action) => {
  switch (action) {
    case 'ADD_MESSAGES':
      return Object.assign({}, state, {
        messages: action.messages
      });
    default:
      return state;
  }
};

export default chat;