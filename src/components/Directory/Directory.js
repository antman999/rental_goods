import React, { Component } from 'react';
import MenuItem from '../menuItems/MenuItem';
import {connect} from 'react-redux'
import './directory.scss';
 const Directory = ({sections}) => {
		return (
			<div className='directory-menu'>
				{sections.map(items => (
          <MenuItem id={items.id} title={items.title} img={items.imageUrl} linkURL={items.linkUrl} />
				))}
			</div>
		);

 }

const mapStateToProps = state => ({
	sections: state.directory.sections 
 })

export default connect(mapStateToProps)(Directory);
