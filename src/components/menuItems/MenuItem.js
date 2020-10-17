import React from 'react';
import './menuItem.scss'

const MenuItem = props => {
	return (
		<div style={{ backgroundImage: `url(${props.img})` }} className='menu-item'>
			<div>
			<div className='content'>
        <h2 className='title'>{props.title}</h2>
				<span className='subtitle'>View</span>
			</div>
		</div>
		</div>
	);
};

export default MenuItem;
