import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@modules/ShoppingCart/state/slices/cart.slice';
import { gamesApi } from '@services/gamesApi';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
