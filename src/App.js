import React, { Component } from 'react';
import Homepage from './pages/homepages/Homepage';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import Shop from './pages/shop/Shop';
import './App.css';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/accoutPages/SignInSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkoutPage/CheckoutPage';

class App extends Component {
unsubscribeFromAuth = null 

	componentDidMount() {
		const {setCurrentUser} = this.props
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					 setCurrentUser({
							id: snapShot.id,
							...snapShot.data(),
					});
				});
			} 
			
			setCurrentUser(userAuth)
				
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Route exact path='/' component={Homepage} />
				<Route path='/shop' component={Shop} />
				<Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
				<Route exact path='/checkout' component={Checkout}/>
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,

});
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
