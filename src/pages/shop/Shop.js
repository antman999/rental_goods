import React, { Component } from 'react';
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import { Route } from 'react-router-dom'

const Shop = ({collections})=> {
		return (
			<div>
				<Route component={CollectionOverview} />
			</div>
		);
}

export default Shop;
