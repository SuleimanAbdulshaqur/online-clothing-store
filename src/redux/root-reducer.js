import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    // keys to the slices of the reducers 
    user: userReducer
})