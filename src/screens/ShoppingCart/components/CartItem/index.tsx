import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import {
  ActionButton,
  ActionsView,
  Container,
  ItemInfoContainer,
} from '@screens/ShoppingCart/components/CartItem/styles';
import { decrementItemQuantity, incrementItemQuantity } from '@store/slices/cart.slice';
import { CartItem } from '@typings/cart';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import theme from 'src/theme';

type CartItemProps = {
  game: CartItem;
};

export function CartItemComponent({ game }: CartItemProps) {
  const dispatch = useDispatch();
  const disableDecrement = useMemo(() => game.quantity <= 1, [game.quantity]);

  function incrementQuantity() {
    dispatch(incrementItemQuantity(game.dealID));
  }

  function decrementQuantity() {
    dispatch(decrementItemQuantity(game.dealID));
  }

  return (
    <Container>
      <ItemInfoContainer>
        <Text>{game.title}</Text>
        <Text>Preço: R$ {game.salePrice}</Text>
      </ItemInfoContainer>
      <ActionsView>
        <ActionButton onPress={decrementQuantity} disabled={disableDecrement}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={theme.FONT_SIZE.XXL}
            color={theme.COLORS.WHITE}
          />
        </ActionButton>
        <Text size={theme.FONT_SIZE.LG}>{game.quantity}</Text>
        <ActionButton onPress={incrementQuantity}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={theme.FONT_SIZE.XXL}
            color={theme.COLORS.WHITE}
          />
        </ActionButton>
      </ActionsView>
    </Container>
  );
}
