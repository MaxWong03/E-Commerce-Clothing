import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { shallowEqual, useSelector } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import './Header.scss';

const Header = () => {
  const currentUser = useSelector(state => state.user, shallowEqual);
  const cart = useSelector(state => state.cart, shallowEqual);
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
        <CartIcon />
      </div>
      {
        cart.hidden && <CartDropDown />
      }
    </div>
  )
};

export default Header;