import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import rootReducer from './ducks';
import rootSaga from './sagas';

const appFilter = createWhitelistFilter('AppReducer', ['configuration']);
const moviesFilter = createWhitelistFilter('MoviesReducer', ['genres', 'trending']);

const persistConfig = {
  key: 'AppPersist',
  transforms: [appFilter, moviesFilter],
  storage: AsyncStorage,
  whitelist: ['AppReducer', 'MoviesFilter'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
