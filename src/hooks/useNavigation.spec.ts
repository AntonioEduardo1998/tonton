import { renderHook, act } from '@testing-library/react-hooks';
import { useNavigation } from '@hooks/useNavigation';
import { useNavigation as useReactNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('useNavigation', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useReactNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate to ProductList when navigateToHome is called', () => {
    const { result } = renderHook(() => useNavigation());

    act(() => {
      result.current.navigateToHome();
    });

    expect(mockNavigate).toHaveBeenCalledWith('ProductList');
  });

  it('should navigate to ShoppingCartList when navigateToShoppingCart is called', () => {
    const { result } = renderHook(() => useNavigation());

    act(() => {
      result.current.navigateToShoppingCart();
    });

    expect(mockNavigate).toHaveBeenCalledWith('ShoppingCartList');
  });
});
