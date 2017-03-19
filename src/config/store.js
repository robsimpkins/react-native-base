import {
  createStore,
  applyMiddleware,
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
  reducer as applyStorageReducer,
  createLoader as createStorageLoader,
  createMiddleware as createStorageMiddleware,
} from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import reducers from '../reducers';
import { REDUX_STORAGE_KEY } from '../config/constants';

// Apply storage reducer to listen for LOAD action into reducers
const rootReducer = applyStorageReducer(reducers);

// Create storage engine, loader and middleware
const engine = createEngine(REDUX_STORAGE_KEY);
const load = createStorageLoader(engine);
const storageMiddleware = createStorageMiddleware(engine);

// Create logger middleware
const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

// Apply store middleware
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, storageMiddleware, loggerMiddleware)(createStore);

// Create and load store
const store = createStoreWithMiddleware(rootReducer);
load(store);

export default store;
