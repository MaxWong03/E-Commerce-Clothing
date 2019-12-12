import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import './CartDropDown.scss';

const CartDropDown = () => {
  const { cartItems } = useSelector(state => state.cart, shallowEqual);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => (
            <CartItem 
              key={cartItem.id}
              item={cartItem}
            />
          ))
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropDown;