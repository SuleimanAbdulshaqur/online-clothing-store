import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';


import rootReducer from './root-reducer';


// set up middleware s an array
const middlewares = [logger];


// set up store
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// persist 
export const persistor = persistStore(store);


export default { store, persistor };