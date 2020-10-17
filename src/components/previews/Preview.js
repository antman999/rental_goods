import React from 'react'
import Collections from '../collections/Collections'

import './preview.scss' 

const Preview = (props) => {
  return (
		<div className='collection-preview'>
			<h2 className='title'>{props.title.toUpperCase()}</h2>
			<div className='preview'>
				{props.items.map(item => (
					<Collections key={item.id}name={item.name} imageUrl={item.imageUrl} price={item.price} />
				))}
			</div>
		</div>
	);
}
export default Preview
