import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.cheapshark.com/api/1.0/' }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (page = 0) => `deals?pageSize=10&pageNumber=${page}`,
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
