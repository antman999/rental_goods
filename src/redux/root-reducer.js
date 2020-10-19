// this is where we will store all state and reducers

import { combineReducers } from "redux";

import userReducer from './user/userReducer'

export default combineReducers({
  user: userReducer
})

///He we are splitting our reducers into more organized structure this is gonna be the main one that contain all reducers and exports them 