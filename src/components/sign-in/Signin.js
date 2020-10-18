import React, { Component } from 'react';
import Button from '../custom-button/Button';
import FormInput from '../form-input/FormInput';
import './signin.scss'


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
				<h2>Signin</h2>
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
					

					<Button type='submit' value='submit'>
						Sign in
					</Button>
				</form>
			</div>
		);
	}
}
export default Signin;
