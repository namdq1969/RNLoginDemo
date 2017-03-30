import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import rootReducer from '../reducers';

export default function configureStore(initialState : any = undefined) {
  const middlewares = [thunk];

  if (__DEV__) {
    const logger = createLogger();
    middlewares.push(logger);
  }
  const enhancer = compose(autoRehydrate(), applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState, enhancer);
}
