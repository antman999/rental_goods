import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './header.scss'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cartDropdown/CartDropDown'
import { selectCurrentUser } from "../../redux/user/user.selector";
import {selectCartHidden} from '../../redux/cart/cart.selectors';

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
	currentUser: selectCurrentUser(state), //this is coming from root reducer
	hidden: selectCartHidden(state) //this dot notation has to be the same as the reducer state
 })
export default connect(mapStateToProps)(Header)