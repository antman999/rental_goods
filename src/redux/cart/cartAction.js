export const cartAction = toggle => ({
  type: 'TOGGLE_CART_HIDDEN',
});

export const addToCart = item => ({
  type: 'ADD_ITEM',
  payload: item
})

export const removeFromCart = item => ({
  type: 'REMOVE_ITEM',
  payload: item 
})

export const lowerQuant = item => ({
  type: 'MINUS',
  payload: item 
})