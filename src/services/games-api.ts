import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Game } from '@typings/games';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.cheapshark.com/api/1.0/' }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (page = 0) => `deals?pageSize=1&pageNumber=${page}`,
      transformResponse: (response: Game[]) => {
        return response;
      },
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
