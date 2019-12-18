import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItem, selectCartItemTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './CheckOutPage.scss';

const CheckOutPage = () => {
  const cartItems = useSelector(selectCartItem);
  const cartTotal = useSelector(selectCartItemTotal);
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      }
      <div className='total'>
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  )
}

export default memo(CheckOutPage);