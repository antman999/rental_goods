import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Preview from '../previews/Preview';
import {
	selectShopItems,
	selectCollectionOverviewObject,
} from '../../redux/shop/shop.selectors';
import './collectionOverview.scss'
const CollectionOverview = ({collections}) => {
  return (
		<div className='collections-overview'>
			{collections.map(({ id, ...propsItems }) => (
				<Preview key={id} {...propsItems} />
			))}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionOverviewObject,
});

export default connect(mapStateToProps)(CollectionOverview)
