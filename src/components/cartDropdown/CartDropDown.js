import React from 'react'
import CartItem from '../cart-item/CartItem'
import Button from '../custom-button/Button'
import { connect } from "react-redux";
import './cartdropdown.scss'

import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropDown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { cartItems? 
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
         : (<span className='empty-message'>  Your Cart is empty  </span> )
        }
      </div> 
      <Button>Checkout</Button>
    </div>
  )
}

const mapStateToProps = state => ({
 cartItems: selectCartItems(state)
})
 
export default connect(mapStateToProps)(CartDropDown)
