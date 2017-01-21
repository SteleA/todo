import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from './reducer';

const initalState = {};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initalState,
    NODE_ENV === 'production' ? applyMiddleware(thunkMiddleware) : applyMiddleware(thunkMiddleware, createLogger()),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer.default);
    });
  }

  return store;
};

const store = configureStore();
export default store;
