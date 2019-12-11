import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.scss';

const SignUp = () => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [info, setInfo] = useState(initialState);

  const { displayName, email, password, confirmPassword } = info;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Don't Match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      //clear form
      setInfo(initialState);
    } catch (err) {
      console.error(err);
    }

  };

  const handleChange = event => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'> I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form
        className='sign-up-form'
        onSubmit={handleSubmit}
      >
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'> Sign Up</CustomButton>
      </form>
    </div>
  )
};

export default SignUp;