import { CartState } from '@modules/ShoppingCart/typings/shopping-cart';

export const selectCartHasItems = (state: { cart: CartState }) => state.cart.hasItems;

export const selectIsInCart = (dealID: string) => (state: { cart: CartState }) =>
  state.cart.items.some((item) => item.dealID === dealID);

export const selectTotalCost = (state: { cart: CartState }) => {
  return state.cart.items.reduce((acc, item) => acc + Number(item.salePrice) * item.quantity, 0);
};

export const selectTotalItemsInCart = (state: { cart: CartState }) => {
  return state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
};
