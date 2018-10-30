// store.js

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        composeWithDevTools(applyMiddleware(thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

export default store;