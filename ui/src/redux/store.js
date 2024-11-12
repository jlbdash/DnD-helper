import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { thunk } from 'redux-thunk';
import page from './reducers/pageReducers';

// This function creates and maintains the single store of data for the application. Only in react-redux.
export default function configureStore(initialState) {
  const persistConfig = {
    key: 'root', // Key for the persisted state in storage
    storage, // Storage type (localStorage here)
  };

  // This section determines what are the variable names that should be subscribed to in the UI components.
  let reducer = combineReducers({
    page: page,
  });

  let persistedReducer = persistReducer(persistConfig, reducer);

  // Allows for asynchronous reducers.
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // Use Redux DevTools extension if available, else use compose
  const composedEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Create the store with the persisted reducer and initial state
  const store = createStore(
    persistedReducer,
    initialState,
    composedEnhancers(middlewareEnhancer)
  );

  // Create a persistor for the store
  const persistor = persistStore(store);

  // Return both the store and the persistor
  return { store, persistor };
}
