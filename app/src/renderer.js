import React from 'react';
import {render} from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './global.css';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
)
