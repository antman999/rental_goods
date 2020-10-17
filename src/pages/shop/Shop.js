import React, { Component } from 'react';
import Preview from '../../components/previews/Preview';
import SHOP_DATA from './shop.data';
class Shop extends Component {
	state = {
		collections: SHOP_DATA,
	};
	render() {
		return (
			<div>
				{this.state.collections.map(({ id, ...propsItems }) => (
					<Preview key={id} {...propsItems} />
				))}
			</div>
		);
	}
}

export default Shop;
