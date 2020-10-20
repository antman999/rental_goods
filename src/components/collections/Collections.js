import React from 'react'
import Button from '../custom-button/Button';
import { connect } from 'react-redux'
import { addToCart } from "../../redux/cart/cartAction";
import './collections.scss'
const Collections=({item,addToCart})=> {
  return (
		<div className='collection-item'>
			<div
				className='image'
				style={{ backgroundImage: `url(${item.imageUrl})` }} />
			
				<div className='collection-footer'>
					<span className='name'>{item.name}</span>
					<span className='price'>{item.price}</span>
			</div>
			<Button onClick={()=>addToCart(item)}inverted> Add to Cart! </Button>
			</div>
	);
}

const mapDispatchToProps = dispatch => ({
	addToCart: item => dispatch(addToCart(item))
})
export default connect(null,mapDispatchToProps)(Collections)