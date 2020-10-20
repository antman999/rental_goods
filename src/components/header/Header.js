import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './header.scss'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cartDropdown/CartDropDown'

 const Header = ({currentUser,hidden}) => {
  return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				HOME
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					Shop
				</Link>
				<Link className='option' to='/shop'>
					Contact
				</Link>
				{currentUser ? (
					<div
						className='option'
						onClick={() => {
							auth.signOut();
						}}>
						Log Out
					</div>
				) : (
					<Link className='option' to='/signin'>
						Sign in
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null:<CartDropDown />}
		</div>
	);
 }

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser, //this is coming from root reducer
	hidden: state.cart.hidden //this dot notation has to be the same as the reducer state
 })
export default connect(mapStateToProps)(Header)