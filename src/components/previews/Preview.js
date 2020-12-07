import React from 'react'
import Collections from '../collections/Collections'

import './preview.scss' 

const Preview = ({ title, items }) => {
  return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<Collections key={item.id} item={item} />
					))}
			</div>
		</div>
	);
}
export default Preview
