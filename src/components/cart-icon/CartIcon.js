import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cartIcon.scss'
import { connect } from 'react-redux'
import { cartAction } from "../../redux/cart/cartAction";

const CartIcon = ({cartAction}) => {
  return (
    <div className='cart-icon' onClick={cartAction}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  cartAction: ()=> dispatch(cartAction())
})
export default connect (null,mapDispatchToProps)(CartIcon)