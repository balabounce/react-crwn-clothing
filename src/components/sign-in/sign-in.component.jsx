import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = (ev) => {
        const {value, name} = ev.target;
        this.setState({[name]: value});
    }

    render () {
        return (
            <div className='sign-in'>
                <h2 className='fz-35'>I already have an account</h2>
                <span className='fz-23'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='Email' 
                        required
                    />
                    <FormInput 
                        name="password" 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton> 
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton> 
                    </div>
                </form>
            </div>
        )
    }
}

