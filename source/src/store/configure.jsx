//  import node_modules
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';

//  import redux_moduels
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

//  if this pjroject is Dev-mode, apply Redux DevTools

const isDev = process.env.NODE_ENV === 'development';
// eslint-disable-next-line no-underscore-dangle
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = preloadedState =>
  createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

export default configure;
