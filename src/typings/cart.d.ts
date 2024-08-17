import { Game } from '@typings/games';

export interface CartItem extends Game {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  hasItems: boolean;
}
