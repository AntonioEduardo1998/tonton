import { Product } from '@modules/Products/typings/products';
import { useGetGamesQuery } from '@services/gamesApi';
import { act, renderHook } from '@testing-library/react-hooks';
import { useProductList } from './useProductList';

jest.mock('@services/gamesApi');

const mockProducts: Product[] = [
  { dealID: '1', title: 'Game 1', salePrice: '59.99', thumb: 'game1.jpg' },
  { dealID: '2', title: 'Game 2', salePrice: '49.99', thumb: 'game2.jpg' },
];

describe('useProductList', () => {
  beforeEach(() => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      isLoading: false,
    });
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useProductList());

    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.page).toBe(0);
  });

  it('should add products to localProducts when new products are loaded', () => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      data: mockProducts,
      error: null,
      isLoading: false,
    });

    const { result, rerender } = renderHook(() => useProductList());

    rerender();

    expect(result.current.products).toEqual(mockProducts);
  });

  it('should not add duplicate products', () => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      data: mockProducts,
      error: null,
      isLoading: false,
    });

    const { result, rerender } = renderHook(() => useProductList());

    rerender();

    expect(result.current.products).toEqual(mockProducts);

    rerender();

    expect(result.current.products).toEqual(mockProducts);
  });

  it('should increment the page when loadMoreProducts is called', () => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      data: mockProducts,
      error: null,
      isLoading: false,
    });

    const { result, rerender } = renderHook(() => useProductList());

    expect(result.current.page).toBe(0);

    act(() => {
      result.current.loadMoreProducts();
    });

    rerender();

    expect(result.current.page).toBe(1);
  });

  it('should not increment the page if already loading', () => {
    (useGetGamesQuery as jest.Mock).mockReturnValue({
      data: mockProducts,
      error: null,
      isLoading: true,
    });

    const { result } = renderHook(() => useProductList());

    act(() => {
      result.current.loadMoreProducts();
    });

    expect(result.current.page).toBe(0);
  });

  it('should handle error correctly', () => {
    const mockError = new Error('Network error');

    (useGetGamesQuery as jest.Mock).mockReturnValue({
      data: [],
      error: mockError,
      isLoading: false,
    });

    const { result } = renderHook(() => useProductList());

    expect(result.current.error).toBe(mockError);
  });
});
