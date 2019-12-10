import React from 'react';

import classNames from 'classnames';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {

  const buttonClass = classNames('custom-button', {
    'google-sign-in custom-button': isGoogleSignIn
  });

  return (
    <button
      className={buttonClass}
      {...otherProps}
    >
      {children}
    </button>
  )
};

export default CustomButton;