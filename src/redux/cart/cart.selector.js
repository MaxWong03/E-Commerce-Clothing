import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemCount = createSelector(
  [selectCartItem],
  cartItems => cartItems.reduce(
    (accumlator, cartItem) => accumlator + cartItem.quantity
    , 0
  )
)

export const selectCartItemTotal = createSelector(
  [selectCartItem],
  cartItems => {
    return cartItems.reduce((accumlator, cartItem) =>
      accumlator + cartItem.quantity * cartItem.price
      , 0);
  }
)