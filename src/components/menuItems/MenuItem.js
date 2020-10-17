import React from 'react';
import './menuItem.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = props => {
	return (
		<div style={{ backgroundImage: `url(${props.img})` }} className='menu-item' onClick={()=>props.history.push(`${props.match.url}${props.linkURL}`)}>
			<div>
			<div className='content'>
        <h2 className='title'>{props.title}</h2>
				<span className='subtitle'>View</span>
			</div>
		</div>
		</div>
	);
};

export default withRouter(MenuItem);
