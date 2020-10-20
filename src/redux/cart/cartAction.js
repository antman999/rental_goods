export const cartAction = toggle => ({
  type: 'TOGGLE_CART_HIDDEN',
});

export const addToCart = item => ({
  type: 'ADD_ITEM',
  payload: item
})