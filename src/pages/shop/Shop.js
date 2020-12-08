import React, { Component } from 'react'
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/CollectionPage';
import {
	firestore,
	convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';
export class Shop extends Component {

	unsubscribeFromSnapshot = null
	componentDidMount() {
		const collectionRef = firestore.collection('collections')	
		collectionRef.onSnapshot(async snapshot => {
		convertCollectionSnapshotToMap(snapshot)
		})
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

export default Shop;
