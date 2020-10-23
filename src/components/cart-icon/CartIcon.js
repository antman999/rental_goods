import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cartIcon.scss'
import { connect } from 'react-redux'
import { cartAction } from "../../redux/cart/cartAction";

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({cartAction, itemCount}) => {
  return (
    <div className='cart-icon' onClick={cartAction}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  cartAction: ()=> dispatch(cartAction())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})
export default connect (mapStateToProps,mapDispatchToProps)(CartIcon)
