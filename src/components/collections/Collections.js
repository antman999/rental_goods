import React from 'react'
import Button from '../custom-button/Button';
import './collections.scss'
const Collections=(props)=> {
  return (
		<div className='collection-item'>
			<div
				className='image'
				style={{ backgroundImage: `url(${props.imageUrl})` }} />
			
				<div className='collection-footer'>
					<span className='name'>{props.name}</span>
					<span className='price'>{props.price}</span>
			</div>
			<Button inverted> Add to Cart! </Button>
			</div>
	);
}
export default Collections