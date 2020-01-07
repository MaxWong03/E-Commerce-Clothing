import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItem, selectCartItemTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';
import './CheckOutPage.scss';
import { TestWarningContainer, TotalContainer } from './CheckoutPage.styles';

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
      <TotalContainer
        children={<span>Total: ${cartTotal}</span>}
      />

      <TestWarningContainer
        children={
          <text>
            *Please use the following test credit card for payments*
              <br />
            4242 4242 4242 4242 - Exp: 01/20 -CVV: 123
          </text>
        }
      />
      <StripeCheckoutButton price={cartTotal} />
    </div>
  )
}

export default memo(CheckOutPage);