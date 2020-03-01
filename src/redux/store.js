import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


import rootReducer from './root-reducer';


// set up middleware s an array
const middlewares = [logger];


// set up store
const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store;