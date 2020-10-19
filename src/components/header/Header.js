import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './header.scss'
import { auth } from '../../firebase/firebase.utils';

 const Header = ({currentUser}) => {
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
					<div className='option' onClick={()=>{auth.signOut()}}>Log Out</div>
				) : (
					<Link className='option' to='/signin'>
						Sign in
					</Link>
				)}
			</div>
		</div>
	);
 }

const mapStateToProps = (state) => ({
	 currentUser: state.user.currentUser
 })
export default connect(mapStateToProps)(Header)