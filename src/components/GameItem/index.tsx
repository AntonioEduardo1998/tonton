import { Container, GameBanner, GamePrice, GameTitle } from '@components/GameItem/styles';
import { Game } from '@typings/games';
import React from 'react';
import { View } from 'react-native';

interface GameItemProps {
  game: Game;
}

const GameItem: React.FC<GameItemProps> = React.memo(({ game }) => {
  return (
    <Container>
      <GameBanner source={{ uri: game.thumb }} />
      <View>
        <GameTitle>{game.title}</GameTitle>
        <GamePrice>{game.salePrice} USD</GamePrice>
      </View>
    </Container>
  );
});

GameItem.displayName = 'GameItem';

export default GameItem;
