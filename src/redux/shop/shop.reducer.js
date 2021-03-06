import SHOP_DATA from './shop.data'
import ShopActionTypes from './shop.types'

const SHOP = {
  collections: SHOP_DATA
}

const shopReducer = (state = SHOP, action) => {
  switch (action.type) { 
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state 
  }
}

export default shopReducer