import  SHOP_DATA from './shop.data'

const SHOP = {
  collections: SHOP_DATA
}

const shopReducer = (state = SHOP, action) => {
  switch (action.type) { 
    default:
      return state 
  }
}

export default shopReducer