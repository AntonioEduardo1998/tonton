import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '@typings/cart';
import { Game } from '@typings/games';

const initialState: CartState = {
  items: [],
  hasItems: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<Game>) {
      const item = state.items.find((i) => i.dealID === action.payload.dealID);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.hasItems = true;
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.dealID !== action.payload);
      state.hasItems = state.items.length > 0;
    },
    incrementItemQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.dealID === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItemQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.dealID === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart(state) {
      state.items = [];
      state.hasItems = false;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;

export const selectCartHasItems = (state: { cart: CartState }) => state.cart.hasItems;

export const selectIsInCart = (dealID: string) => (state: { cart: CartState }) =>
  state.cart.items.some((item) => item.dealID === dealID);

export const selectTotalCost = (state: { cart: CartState }) => {
  return state.cart.items.reduce((acc, item) => acc + Number(item.salePrice) * item.quantity, 0);
};

export default cartSlice.reducer;
