import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
  [selectCartItem],
  cartItems => cartItems.reduce(
    (accumlator, cartItem) => accumlator + cartItem.quantity
    , 0
  )
)