import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import isEqual from 'lodash/isEqual';
import './CartIcon.scss';

const CartIcon = memo(() => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems, isEqual);
  const getItemNumber = cartItemsArr => {
    return cartItemsArr.reduce(
      (accumlator, cartItem) => accumlator + cartItem.quantity,
      0
    )
  }

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{getItemNumber(cartItems)}</span>
    </div>
  )
})

export default CartIcon;