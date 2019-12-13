import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import isEqual from 'lodash/isEqual';
import './CartDropDown.scss';

const CartDropDown = memo(() => {
  const history = useHistory();
  const cartItems = useSelector(state => state.cart.cartItems, isEqual);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
            cartItems.map(cartItem => (
              <CartItem
                key={cartItem.id}
                item={cartItem}
              />
            ))
            : <span className='empty-messagee'>Your Cart Is Empty</span>
        }
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  )
})

export default CartDropDown;