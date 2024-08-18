import { Product } from '@modules/Products/typings/products';

export const productStub: Product = {
  dealID: '1',
  title: 'Product 1',
  salePrice: '100',
  thumb: 'some-url',
};

export const buildProduct = (overrides: Partial<Product> = {}): Product => ({
  ...productStub,
  ...overrides,
});
