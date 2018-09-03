import React from 'react';
import {render} from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import App from './App.jsx';
import './global.css';

const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('app')
)
