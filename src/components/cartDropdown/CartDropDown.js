import React from 'react'
import Button from '../custom-button/Button'
import './cartdropdown.scss'

const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' /> 
      <Button>Checkout</Button>
    </div>
  )
}

export default CartDropDown
