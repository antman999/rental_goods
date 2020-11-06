import React from 'react'
import './checkout.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import Checkout from '../../components/checkout-items/Checkout';
import StripeButton from "../../components/stripe-button/StripeButton";


const CheckoutPage = ({cartItems,total}) => {
  return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
      </div>
      {cartItems.map(ci => (
				<Checkout key={ci.id} cartItem={ci}/> 
      ))
      }
      <div className='total'>
        <span> Total: ${total}</span>
			</div>
			<div className='test-warning'>
				**PLEASE USE TEST CARD**
				<br /> 
				4242 4242 4242 4242 exp 01/25 - CVV: 123
			</div>
			<StripeButton price={total}/> 
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage)
