import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import persistedReducer from '../Reducer/index';
//import storage from 'redux-persist/lib/storage';
import {persistStore} from 'redux-persist';

export const store = createStore(persistedReducer);

export const Pstore = persistStore(store);
