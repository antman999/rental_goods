import React from 'react'
import CartItem from '../cart-item/CartItem'
import Button from '../custom-button/Button'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import './cartdropdown.scss'

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { cartAction} from "../../redux/cart/cartAction";

const CartDropDown = ({cartItems , history, dispatch}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { cartItems.length? 
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
         : (<span className='empty-message'>  Your Cart is empty  </span> )
        }
      </div> 
      <Button onClick={() => {
        
        history.push('/checkout')
        dispatch(cartAction())
      }}>Checkout</Button>
    </div>
  )
}
const mapStateToProps = state => ({
	cartItems: selectCartItems(state),
});
 
export default withRouter(connect(mapStateToProps)(CartDropDown))
