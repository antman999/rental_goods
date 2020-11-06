import React from 'react'
import StripeCheckout  from 'react-stripe-checkout';
const StripeButton = ({ price }) => {
  const priceInCents = price * 100; 
  const publicKey = 'pk_test_51HkdGFE8zJXFvkcUL8HUnGpclttQxr9bxBwlodI6beGls7SJfWwAuAT80UQhMpa2JzwyvA0Jw16Xl1JB5XEwqx9a00TjseGgqv'
  const onToken = token => {
    console.log(token)
    alert('YAY done!')
  }
  return (
			<StripeCheckout
				label='Pay Now'
				name='Rental goods'
				billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceInCents}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publicKey}
			/>

	);
}

export default StripeButton
