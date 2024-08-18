import { Game } from '@typings/games';

export interface ShoppingCartItem extends Game {
  quantity: number;
}

export interface CartState {
  items: ShoppingCartItem[];
  hasItems: boolean;
}
