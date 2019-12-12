import React from 'react';

import classNames from 'classnames';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {

  const buttonClass = classNames('custom-button', {
    'google-sign-in custom-button': isGoogleSignIn,
    'inverted custom-button': inverted
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