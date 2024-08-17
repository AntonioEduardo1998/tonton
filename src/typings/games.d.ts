export interface Game {
  dealID: string;
  title: string;
  salePrice: string;
  thumb: string;
}

export interface GamesState {
  data: Game[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}
