import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

const SignIn = () => {
  const initialState = { email: '', password: '' };
  const [credential, setCredential] = useState(initialState);

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = credential;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredential(initialState);      
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredential({ ...credential, [name]: value })
  }
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={credential.email}
          handleChange={handleChange}
          label='email'
          required />
        <FormInput
          name='password'
          type='password'
          value={credential.password}
          handleChange={handleChange}
          label='password'
          required />
        <div className='buttons'>
          <CustomButton type='submit'> Sign In </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            isGoogleSignIn
          >
            Sign In With Google
        </CustomButton>

        </div>
      </form>
    </div>
  )

};

export default SignIn;