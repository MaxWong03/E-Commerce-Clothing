import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItem, selectCartItemTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import {
  TestWarningContainer,
  TotalContainer,
  HeaderBlockContainer,
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  StripeCheckoutContainer
} from './CheckoutPage.styles';

const CheckOutPage = () => {
  const cartItems = useSelector(selectCartItem);
  const cartTotal = useSelector(selectCartItemTotal);
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer
          children={<span>Product</span>}
        />
        <HeaderBlockContainer
          children={<span>Description</span>}
        />
        <HeaderBlockContainer
          children={<span>Quantity</span>}
        />
        <HeaderBlockContainer
          children={<span>Price</span>}
        />
        <HeaderBlockContainer
          children={<span>Remove</span>}
        />
      </CheckoutHeaderContainer>
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
          <div>
            *Please use the following test credit card for payments*
              <br />
            4242 4242 4242 4242 - Exp: 01/20 -CVV: 123
          </div>
        }
      />
      <StripeCheckoutContainer price={cartTotal} />
    </CheckoutPageContainer>
  )
}

export default memo(CheckOutPage);