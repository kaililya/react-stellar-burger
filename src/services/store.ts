import { applyMiddleware, compose } from 'redux';
import {legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { socketMiddleware } from './socketMiddleware';
import { wsActions } from '../utils/types';



declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)));

export const store = createStore(rootReducer, enhancer);