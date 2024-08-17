import { Card } from '@components/Card';
import {
  CartActionButton,
  CartActionButtonText,
  GameBanner,
  GameContent,
} from '@components/GameItem/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { addItemToCart, removeItemFromCart, selectIsInCart } from '@store/slices/cart.slice';
import { Game } from '@typings/games';
import { showToast } from '@utils/showToast';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import theme from 'src/theme';
import { Text } from '@components/Text';

interface GameItemProps {
  game: Game;
}

const GameItem: React.FC<GameItemProps> = React.memo(({ game }) => {
  const dispatch = useDispatch();

  const addToCart = (game: Game) => {
    dispatch(addItemToCart(game));
    showToast('adicionado ao carrinho');
  };

  const removeFromCart = (dealId: string) => {
    dispatch(removeItemFromCart(dealId));
    showToast('removido do carrinho');
  };

  const gameIsInCart = useSelector(selectIsInCart(game.dealID));

  return (
    <Card>
      <GameContent>
        <GameBanner source={{ uri: game.thumb }} />
        <View>
          <Text>{game.title}</Text>
          <Text>R$ {game.salePrice}</Text>
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
    </Card>
  );
});

GameItem.displayName = 'GameItem';

export default GameItem;
