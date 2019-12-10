import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

const SignIn = () => {
  const [credential, setCredential] = useState({ email: '', password: '' });

  const handleSubmit = event => {
    event.preventDefault();
    setCredential({ email: '', password: '' });
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

        <CustomButton type='submit'> Sign In </CustomButton>
        <CustomButton onClick={signInWithGoogle}> Sign In With Google </CustomButton>
      </form>
    </div>
  )

};

export default SignIn;