import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware, compose as reduxCompose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import { rootReducer } from './reducers';
import { sagas } from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const debug = process.env.NO_DEBUG !== '1';
const compose =
  (debug && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  reduxCompose;

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
