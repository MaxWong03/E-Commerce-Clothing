import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selector';
import { useHistory } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './CartDropDown.scss';

const CartDropDown = memo(() => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItem);
  const onClickAction = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  }
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
            : <span className='empty-message'>Your Cart Is Empty</span>
        }
      </div>
      <CustomButton onClick={onClickAction}>GO TO CHECKOUT</CustomButton>
    </div>
  )
})

export default CartDropDown;