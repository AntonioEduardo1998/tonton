import {
  selectCartHasItems,
  selectIsInCart,
  selectTotalCost,
  selectTotalItemsInCart,
} from '@modules/ShoppingCart/state/selectors/cart.selectors';
import { CartState } from '@modules/ShoppingCart/typings/shopping-cart';
import { buildCartItem } from '@tests/stubs/shoppingCartItem.stub';

describe('Cart Selectors', () => {
  let state: { cart: CartState };

  beforeEach(() => {
    state = {
      cart: {
        items: [
          buildCartItem({ dealID: '1', title: 'Product 1', salePrice: '10.00', quantity: 2 }),
          buildCartItem({ dealID: '2', title: 'Product 2', salePrice: '15.00', quantity: 1 }),
        ],
        hasItems: true,
      },
    };
  });

  it('should selectCartHasItems return true when there are items in the cart', () => {
    const result = selectCartHasItems(state);
    expect(result).toBe(true);
  });

  it('should selectIsInCart return true when the item is in the cart', () => {
    const result = selectIsInCart('1')(state);
    expect(result).toBe(true);
  });

  it('should selectIsInCart return false when the item is not in the cart', () => {
    const result = selectIsInCart('3')(state);
    expect(result).toBe(false);
  });

  it('should selectTotalCost return the total cost of items in the cart', () => {
    const result = selectTotalCost(state);
    expect(result).toBe(35.0);
  });

  it('should selectTotalItemsInCart return the total number of items in the cart', () => {
    const result = selectTotalItemsInCart(state);
    expect(result).toBe(3);
  });

  it('should selectCartHasItems return false when there are no items in the cart', () => {
    state.cart.items = [];
    state.cart.hasItems = false;
    const result = selectCartHasItems(state);
    expect(result).toBe(false);
  });

  it('should selectTotalCost return 0 when the cart is empty', () => {
    state.cart.items = [];
    const result = selectTotalCost(state);
    expect(result).toBe(0);
  });

  it('should selectTotalItemsInCart return 0 when the cart is empty', () => {
    state.cart.items = [];
    const result = selectTotalItemsInCart(state);
    expect(result).toBe(0);
  });
});
