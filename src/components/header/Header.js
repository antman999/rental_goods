import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

 const Header = (props) => {
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
				<Link className='option' to='/signin'>
					Sign in 
				</Link>
			</div>
		</div>
	);
}
export default Header