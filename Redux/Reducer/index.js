import {combineReducers} from 'redux';
//import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import {AuthReducer} from './AuthReducer';
import {NoteReducer} from './NoteReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist: [''],
};

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Note: NoteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
