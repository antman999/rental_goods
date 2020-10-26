import React from 'react'
import './checkout.scss'
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/cartAction";
const Checkout = ({ cartItem, clearItem }) => {
  const {name,imageUrl,price,quantity} = cartItem
  return (
		<div className='checkout-item'>
			<div className='image-container'>
        <img alt='item' src={imageUrl}/>
			</div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
   clearItem: item => dispatch(removeFromCart(item))
})
export default connect(null,mapDispatchToProps)(Checkout)
