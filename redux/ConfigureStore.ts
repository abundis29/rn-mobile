import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
// @ts-ignore
import { createLogger } from 'redux-logger';
import { Auth } from './Auth/Auth';

const config = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
};
// eslint-disable-next-line no-unused-vars
const logger = createLogger({
  collapsed: true,
  level: 'info',
});

const reducers = { Auth };
// @ts-ignore
const combiner = persistCombineReducers(config, reducers);
export type RootState = ReturnType<typeof combiner>;

export const ConfigureStore = () => {
  const store = createStore(combiner, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { persistor, store };
};
