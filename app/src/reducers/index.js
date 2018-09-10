import { combineReducers } from 'redux';
import coinList from './coinList';
import news from './news';
import chat from './chat';
import portfolio from './portfolio';

const app = combineReducers({
  news,
  chat,
  coinList,
  portfolio
});

export default app;