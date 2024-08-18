import { useCartItem } from '@modules/ShoppingCart/hooks/useCartItem';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart,
} from '@modules/ShoppingCart/state/slices/cart.slice';
import { act, renderHook } from '@testing-library/react-hooks';
import { useDispatch } from 'react-redux';
import { shoppingCartItemStub } from '@tests/stubs/shoppingCartItem.stub';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('useCartItem', () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return disableDecrement as true when quantity is 1 or less', () => {
    const { result } = renderHook(() => useCartItem(shoppingCartItemStub));

    expect(result.current.disableDecrement).toBe(true);
  });

  it('should return disableDecrement as false when quantity is greater than 1', () => {
    const { result } = renderHook(() =>
      useCartItem({
        ...shoppingCartItemStub,
        quantity: 2,
      }),
    );

    expect(result.current.disableDecrement).toBe(false);
  });

  it('should dispatch incrementItemQuantity when incrementQuantity is called', () => {
    const { result } = renderHook(() => useCartItem(shoppingCartItemStub));

    act(() => {
      result.current.incrementQuantity();
    });

    expect(dispatchMock).toHaveBeenCalledWith(incrementItemQuantity(shoppingCartItemStub.dealID));
  });

  it('should dispatch decrementItemQuantity when decrementQuantity is called', () => {
    const { result } = renderHook(() => useCartItem(shoppingCartItemStub));

    act(() => {
      result.current.decrementQuantity();
    });

    expect(dispatchMock).toHaveBeenCalledWith(decrementItemQuantity(shoppingCartItemStub.dealID));
  });

  it('should dispatch removeItemFromCart when removeItem is called', () => {
    const { result } = renderHook(() => useCartItem(shoppingCartItemStub));

    act(() => {
      result.current.removeItem();
    });

    expect(dispatchMock).toHaveBeenCalledWith(removeItemFromCart(shoppingCartItemStub.dealID));
  });
});
