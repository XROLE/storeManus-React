import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const initialState = {};

const middleware = [createLogger(), thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducers, initialState, compose(
//   applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__
//   && window.__REDUX_DEVTOOLS_EXTENSION__(),
// ));

const store = createStore(rootReducers, initialState, composeEnhancers(
  applyMiddleware(...middleware)
));

export default store;
