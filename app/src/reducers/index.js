import { combineReducers } from 'redux';
import coinList from './coinList';
import news from './news';
import portfolio from './portfolio';

const app = combineReducers({
  news,
  coinList,
  portfolio
});

export default app;