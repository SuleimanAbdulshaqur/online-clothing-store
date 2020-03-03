import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// using local storage as default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//persist config, key is the base root, storage-is the type of storage, whitelist-what we save
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

//its clear
const rootReducer = combineReducers({
    // keys to the slices of the reducers 
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


// persistReducer takes 2 args: the config and the root reducer
export default persistReducer(persistConfig, rootReducer);