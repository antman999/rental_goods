import React, { Component } from 'react';
import Button from '../custom-button/Button';
import FormInput from '../form-input/FormInput';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Signup extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault()  
    
  };

  render() {
    const {displayName,email,password,confirmPassword} = this.state
    return (
			<div className='sign-up'>
				<h2 className='title'>I don't have an account</h2>
				<span>Sign up with your email and password </span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm password'
						required
          />
          <Button type='submit'>
            Create account 
          </Button>
				</form>
			</div>
		);}
}
export default Signup;
