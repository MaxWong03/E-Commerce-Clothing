import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import { SingInSingUpContainer } from './SignInAndSingup.styles';

const SignInAndSignUp = () => {
  return (
    <SingInSingUpContainer>
      <SignIn />
      <SignUp />
    </SingInSingUpContainer>
  )
}

export default SignInAndSignUp;