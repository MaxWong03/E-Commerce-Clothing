import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
      <WrappedComponent />
    )
}


export default WithSpinner;
