import GameItem from '@components/GameItem';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useGetGamesQuery } from 'src/services/games-api';
import { StyledFlatList } from '@components/GamesList/styles';

export function GameList() {
  const [page, setPage] = useState(0);
  const { data: games = [], error, isLoading } = useGetGamesQuery(page);

  const loadMoreGames = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading && page === 0) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Ocorreu um erro</Text>;
  }

  return (
    <StyledFlatList
      data={games}
      keyExtractor={(item) => item.dealID}
      renderItem={({ item }) => <GameItem game={item} />}
      onEndReached={loadMoreGames}
      onEndReachedThreshold={0.5}
      removeClippedSubviews={true}
      initialNumToRender={10}
      maxToRenderPerBatch={5}
    />
  );
}
