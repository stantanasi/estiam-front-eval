import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

// eslint-disable-next-line import/prefer-default-export
export function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware, loggerMiddleware];

  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
