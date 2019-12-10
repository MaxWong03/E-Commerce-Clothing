import React, { useState } from 'react';

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
        <input
          name='email'
          type='email'
          value={credential.email}
          onChange={handleChange}
          required />
        <label>Email</label>
        <input
          name='password'
          type='password'
          value={credential.password}
          onChange={handleChange}
          required />
        <label>Password</label>

        <input type='submit' value='Submit Form' />
      </form>
    </div>
  )

};

export default SignIn;