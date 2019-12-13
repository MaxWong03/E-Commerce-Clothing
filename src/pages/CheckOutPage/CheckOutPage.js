import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import isEqual from 'lodash/isEqual';
import './CheckOutPage.scss';

const CheckOutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems, isEqual);
  const calTotal = cartItemsArr => {
    return cartItemsArr.reduce((accumlator, cartItem) =>
      accumlator + cartItem.quantity * cartItem.price
      , 0);
  }
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
        <span>Total: ${calTotal(cartItems)}</span>
      </div>
    </div>
  )
}

export default memo(CheckOutPage);