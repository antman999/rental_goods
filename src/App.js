import React, { Component }from 'react';
import Homepage from './pages/homepages/Homepage';
import { Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import './App.css';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/accoutPages/SignInSignUpPage';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null 
  }

  componentDidMount() {
    this.unsubscribeFromAuth =auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

	render(){
		return (
			<div>
        <Header currentUser={this.state.currentUser}/>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/shop' component={Shop} />
				<Route exact path='/signin' component={SignInSignUpPage} />
			</div>
		);
	}
}

export default App;
