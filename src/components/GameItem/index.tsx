import React from 'react';
import { View } from 'react-native';
import { Image, Text } from 'react-native';
import { Game } from '@typings/games';

interface GameItemProps {
  game: Game;
}

const GameItem: React.FC<GameItemProps> = React.memo(({ game }) => {
  return (
    <View>
      <Image source={{ uri: game.thumb }} style={{ width: 100, height: 100 }} />
      <Text>{game.title}</Text>
      <Text>{game.salePrice} USD</Text>
    </View>
  );
});

GameItem.displayName = 'GameItem';

export default GameItem;
