import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => {
    console.log('triggered');
    return state.cart
  }, shallowEqual);
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
}

export default CartIcon;