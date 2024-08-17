import {
  CartActionButton,
  CartActionButtonText,
  Container,
  GameBanner,
  GameContent,
  GamePrice,
  GameTitle,
} from '@components/GameItem/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { addItemToCart, removeItemFromCart, selectIsInCart } from '@store/slices/cart.slice';
import { Game } from '@typings/games';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import theme from 'src/theme';

interface GameItemProps {
  game: Game;
}

const GameItem: React.FC<GameItemProps> = React.memo(({ game }) => {
  const dispatch = useDispatch();

  const addToCart = (game: Game) => {
    dispatch(addItemToCart(game));
  };

  const removeFromCart = (dealId: string) => {
    dispatch(removeItemFromCart(dealId));
  };

  const gameIsInCart = useSelector(selectIsInCart(game.dealID));

  return (
    <Container>
      <GameContent>
        <GameBanner source={{ uri: game.thumb }} />
        <View>
          <GameTitle>{game.title}</GameTitle>
          <GamePrice>R$ {game.salePrice}</GamePrice>
        </View>
      </GameContent>
      <CartActionButton
        onPress={() => (gameIsInCart ? removeFromCart(game.dealID) : addToCart(game))}>
        <MaterialIcons
          name={!gameIsInCart ? 'add-shopping-cart' : 'remove-shopping-cart'}
          size={theme.FONT_SIZE.XL}
          color={theme.COLORS.WHITE}
        />
        <CartActionButtonText>
          {!gameIsInCart ? 'Adicionar ao carrinho' : 'Remover do carrinho'}
        </CartActionButtonText>
      </CartActionButton>
    </Container>
  );
});

GameItem.displayName = 'GameItem';

export default GameItem;
