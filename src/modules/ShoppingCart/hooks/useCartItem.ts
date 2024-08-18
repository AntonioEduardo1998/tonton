import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart,
} from '@modules/ShoppingCart/state/slices/cart.slice';
import { useDispatch } from 'react-redux';
import { ShoppingCartItem } from '../typings/shopping-cart';
import { useMemo } from 'react';

export function useCartItem(item: ShoppingCartItem) {
  const dispatch = useDispatch();

  const disableDecrement = useMemo(() => item.quantity <= 1, [item.quantity]);

  function incrementQuantity() {
    dispatch(incrementItemQuantity(item.dealID));
  }

  function decrementQuantity() {
    dispatch(decrementItemQuantity(item.dealID));
  }

  function removeItem() {
    dispatch(removeItemFromCart(item.dealID));
  }

  return {
    disableDecrement,
    incrementQuantity,
    decrementQuantity,
    removeItem,
  };
}
