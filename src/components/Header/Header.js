import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { shallowEqual, useSelector } from 'react-redux';

import './Header.scss';

const Header = () => {
  const currentUser = useSelector(state => state.user, shallowEqual);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
      </Link>
        <Link className='option' to='/shop'>
          CONTACT
      </Link>
        {
          currentUser ?
            <div
              className='option'
              onClick={() => auth.signOut()}
            >
              SIGN OUT
          </div>
            :
            <Link
              className='option'
              to='/signin'
            >
              SIGN IN
        </Link>
        }
      </div>
    </div>
  )
};

export default Header;