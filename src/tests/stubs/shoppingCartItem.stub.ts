import { ShoppingCartItem } from '@modules/ShoppingCart/typings/shopping-cart';

export const shoppingCartItemStub: ShoppingCartItem = {
  dealID: '1',
  quantity: 1,
  title: 'some-title',
  salePrice: '100',
  thumb: 'some-url',
};

export const buildCartItem = (overrides: Partial<ShoppingCartItem> = {}): ShoppingCartItem => ({
  ...shoppingCartItemStub,
  ...overrides,
});
