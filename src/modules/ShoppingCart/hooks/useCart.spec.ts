import { useCart } from '@modules/ShoppingCart/hooks/useCart';
import {
  addItemToCart,
  clearCart,
  removeItemFromCart,
} from '@modules/ShoppingCart/state/slices/cart.slice';
import { act, renderHook } from '@testing-library/react-hooks';
import { productStub } from '@tests/stubs/product.stub';
import { showToast } from '@utils/showToast';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-native', () => ({
  Alert: {
    alert: jest.fn(),
  },
}));

jest.mock('@utils/showToast', () => ({
  showToast: jest.fn(),
}));

describe('useCart', () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch clearCart and show toast on handleClearCart', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.confirmClearCart();
    });

    expect(Alert.alert).toHaveBeenCalledWith('Remover todos os itens do carrinho?', '', [
      { text: 'cancelar', style: 'cancel' },
      { text: 'remover', onPress: expect.any(Function), style: 'destructive' },
    ]);

    act(() => {
      const onPress = (Alert.alert as jest.Mock).mock.calls[0][2][1].onPress;
      onPress();
    });

    expect(dispatchMock).toHaveBeenCalledWith(clearCart());
    expect(showToast).toHaveBeenCalledWith('Carrinho esvaziado');
  });

  it('should dispatch addItemToCart and show toast on addToCart', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(productStub);
    });

    expect(dispatchMock).toHaveBeenCalledWith(addItemToCart(productStub));
    expect(showToast).toHaveBeenCalledWith('Adicionado ao carrinho');
  });

  it('should dispatch removeItemFromCart and show toast on removeToCart', () => {
    const { result } = renderHook(() => useCart());
    const dealId = '1';

    act(() => {
      result.current.removeToCart(dealId);
    });

    expect(dispatchMock).toHaveBeenCalledWith(removeItemFromCart(dealId));
    expect(showToast).toHaveBeenCalledWith('Removido do carrinho');
  });
});
