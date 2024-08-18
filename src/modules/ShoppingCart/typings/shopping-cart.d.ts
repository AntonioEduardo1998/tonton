import { Product } from '@modules/Products/typings/products';

export interface ShoppingCartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: ShoppingCartItem[];
  hasItems: boolean;
}
