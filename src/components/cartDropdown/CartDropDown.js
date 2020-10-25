import React from 'react'
import CartItem from '../cart-item/CartItem'
import Button from '../custom-button/Button'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import './cartdropdown.scss'

import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropDown = ({cartItems , history}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { cartItems.length? 
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
         : (<span className='empty-message'>  Your Cart is empty  </span> )
        }
      </div> 
      <Button onClick={()=>history.push('/checkout')}>Checkout</Button>
    </div>
  )
}
const mapStateToProps = state => ({
 cartItems: selectCartItems(state)
})
 
export default withRouter(connect(mapStateToProps)(CartDropDown))
