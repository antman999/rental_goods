import React from 'react'
import './checkout.scss'
import { connect } from "react-redux";
import { removeFromCart, lowerQuant, addToCart } from "../../redux/cart/cartAction";
const Checkout = ({ cartItem, clearItem, lowerQuantity, addMore }) => {
  const {name,imageUrl,price,quantity} = cartItem
  return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img alt='item' src={imageUrl} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
           <div onClick={() => lowerQuantity(cartItem) }className='arrow'>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={()=> addMore(cartItem)} className='arrow'>&#10095;</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
   clearItem: item => dispatch(removeFromCart(item)),
   addMore: item => dispatch(addToCart(item)),
   lowerQuantity: item => dispatch(lowerQuant(item))
})
export default connect(null,mapDispatchToProps)(Checkout)
