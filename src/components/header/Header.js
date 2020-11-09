import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cartDropdown/CartDropDown'
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles'

 const Header = ({currentUser,hidden}) => {
  return (
		<HeaderContainer>
			<LogoContainer to='/'>
				HOME
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>
					Shop
				</OptionLink>
				<OptionLink to='/shop'>
					Contact
				</OptionLink>
				{currentUser ? (
					<OptionDiv
					
						onClick={() => {
							auth.signOut();
						}}>
						Log Out
					</OptionDiv>
				) : (
					<OptionLink to='/signin'>
						Sign in
					</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null:<CartDropDown />}
		</HeaderContainer>
	);
 }

const mapStateToProps = (state) => ({
	currentUser: selectCurrentUser(state), //this is coming from root reducer
	hidden: selectCartHidden(state) //this dot notation has to be the same as the reducer state
 })
export default connect(mapStateToProps)(Header)