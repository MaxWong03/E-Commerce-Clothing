import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import './Header.scss';

const Header = memo(() => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
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
        hidden && <CartDropDown />
      }
    </div>
  )
});

export default Header;