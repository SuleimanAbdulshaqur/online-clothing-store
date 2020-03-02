import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    // keys to the slices of the reducers 
    user: userReducer,
    cart: cartReducer
})