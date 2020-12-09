import React, { Component } from 'react'
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/CollectionPage';
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
export class Shop extends Component {

	unsubscribeFromSnapshot = null
	componentDidMount() {
		const {updateCollections} = this.props
		const collectionRef = firestore.collection('collections')	
 collectionRef.get().then(snapshot => {
		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		updateCollections(collectionsMap);
 });
	}

	render() {
		const {match} = this.props
		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(Shop);
