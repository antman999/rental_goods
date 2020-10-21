import React from 'react'
import CartItem from '../cart-item/CartItem'
import Button from '../custom-button/Button'
import { connect } from "react-redux";
import './cartdropdown.scss'

const CartDropDown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
      </div> 
      <Button>Checkout</Button>
    </div>
  )
}

const mapStateToProps = state => ({
 cartItems: state.cart.cartItems
})
 
export default connect(mapStateToProps)(CartDropDown)
