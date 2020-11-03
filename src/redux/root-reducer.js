// this is where we will store all state and reducers

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer'
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer'
const persist = {
  key: 'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
	user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persist, rootReducer)


///He we are splitting our reducers into more organized structure this is gonna be the main one that contain all reducers and exports them 