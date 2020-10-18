import React, { Component } from 'react';
import Button from '../custom-button/Button';
import FormInput from '../form-input/FormInput';
import './signin.scss'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class Signin extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
    return (
			<div className='sign-in'>
				<h2>Sign-in</h2>
				<span>Use Email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						label='Email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						name='password'
						type='password'
						label='Password'
						value={this.state.password}
						required
						type='password'
						handleChange={this.handleChange}
					/>
          <div className='buttons'>
            	<Button type='submit' value='submit'>
						Sign in
					</Button>

          <Button onClick={signInWithGoogle}value='submit' isGoogleSignIn>
						Sign in using Google
					</Button>
         </div>
				
				</form>
			</div>
		);
	}
}
export default Signin;
