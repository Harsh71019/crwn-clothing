import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ inverted,children,isGoogleSignIn, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
 