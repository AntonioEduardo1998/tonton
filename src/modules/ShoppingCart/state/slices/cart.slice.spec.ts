import cartReducer, {
  addItemToCart,
  clearCart,
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart,
} from '@modules/ShoppingCart/state/slices/cart.slice';
import { CartState } from '@modules/ShoppingCart/typings/shopping-cart';
import { productStub } from '@tests/stubs/product.stub';

describe('cart slice', () => {
  let initialState: CartState;

  beforeEach(() => {
    initialState = {
      items: [],
      hasItems: false,
    };
  });

  it('should handle addItemToCart when the item is new', () => {
    const newState = cartReducer(initialState, addItemToCart(productStub));

    expect(newState.items.length).toBe(1);
    expect(newState.items[0]).toEqual({ ...productStub, quantity: 1 });
    expect(newState.hasItems).toBe(true);
  });

  it('should handle addItemToCart when the item already exists', () => {
    initialState.items = [{ ...productStub, quantity: 1 }];
    const newState = cartReducer(initialState, addItemToCart(productStub));

    expect(newState.items.length).toBe(1);
    expect(newState.items[0].quantity).toBe(2);
    expect(newState.hasItems).toBe(true);
  });

  it('should handle removeItemFromCart', () => {
    initialState.items = [{ ...productStub, quantity: 1 }];
    const newState = cartReducer(initialState, removeItemFromCart('1'));

    expect(newState.items.length).toBe(0);
    expect(newState.hasItems).toBe(false);
  });

  it('should handle incrementItemQuantity', () => {
    initialState.items = [{ ...productStub, quantity: 1 }];
    const newState = cartReducer(initialState, incrementItemQuantity('1'));

    expect(newState.items[0].quantity).toBe(2);
  });

  it('should handle decrementItemQuantity', () => {
    initialState.items = [{ ...productStub, quantity: 2 }];
    const newState = cartReducer(initialState, decrementItemQuantity('1'));

    expect(newState.items[0].quantity).toBe(1);
  });

  it('should not decrement quantity below 1', () => {
    initialState.items = [{ ...productStub, quantity: 1 }];
    const newState = cartReducer(initialState, decrementItemQuantity('1'));

    expect(newState.items[0].quantity).toBe(1);
  });

  it('should handle clearCart', () => {
    initialState.items = [{ ...productStub, quantity: 1 }];
    const newState = cartReducer(initialState, clearCart());

    expect(newState.items.length).toBe(0);
    expect(newState.hasItems).toBe(false);
  });
});
