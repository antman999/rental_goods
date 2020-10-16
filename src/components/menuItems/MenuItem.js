import React from 'react';
import './menuItem.scss'

const MenuItem = props => {
	return (
		<div style={{backgroundImage:`url(${props.img})`}}className='menu-item'>
			<div className='content'>
        <h2 className='title'>{props.title}</h2>
				<span className='subtitle'>View</span>
			</div>
		</div>
	);
};

export default MenuItem;
