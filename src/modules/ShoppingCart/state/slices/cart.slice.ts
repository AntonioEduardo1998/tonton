import { CartState } from '@modules/ShoppingCart/typings/shopping-cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@modules/Products/typings/products';

const initialState: CartState = {
  items: [],
  hasItems: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<Product>) {
      const item = state.items.find((i) => i.dealID === action.payload.dealID);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.hasItems = true;
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const updatedItems = state.items.filter((item) => item.dealID !== action.payload);
      state.items = updatedItems;
      state.hasItems = updatedItems.length > 0;
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

export default cartSlice.reducer;
