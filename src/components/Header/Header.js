import React, { memo } from 'react';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = memo(() => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
      </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
      </OptionLink>
        {
          currentUser ?
            <OptionDiv
              onClick={() => auth.signOut()}
            >
              SIGN OUT
          </OptionDiv>
            :
            <OptionLink
              to='/signin'
            >
              SIGN IN
        </OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden && <CartDropDown />
      }
    </HeaderContainer>
  )
});

export default Header;