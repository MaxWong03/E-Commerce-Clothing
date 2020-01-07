import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { StripeContainer } from '../../pages/CheckOutPage/CheckoutPage.styles';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_HJiD6pK8gwFufdXjoizDXQFE001MevH3in';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeContainer
      children={
        <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${priceForStripe}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      }
    />
  )
}

export default StripeCheckoutButton;