import GameItem from '@components/GameItem';
import { Game } from '@typings/games';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useGetGamesQuery } from 'src/services/games-api';

export function GameList() {
  const [page, setPage] = useState(0);

  const [localGames, setLocalGames] = useState<Game[]>([]);

  const { data: games = [], error, isLoading } = useGetGamesQuery(page);

  useEffect(() => {
    if (games && games.length) {
      setLocalGames((prevGames) => [...prevGames, ...games]);
    }
  }, [games]);

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
    <FlatList
      data={localGames}
      keyExtractor={(item) => item.dealID}
      renderItem={({ item }) => <GameItem game={item} />}
      onEndReached={loadMoreGames}
      onEndReachedThreshold={0.5}
      numColumns={2}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
    />
  );
}
