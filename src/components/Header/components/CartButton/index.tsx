import { Container, Badge } from '@components/Header/components/CartButton/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from '@components/Text';
import theme from 'src/theme';
import { useSelector } from 'react-redux';
import { selectCartHasItems, selectTotalItemsInCart } from '@store/slices/cart.slice';

export function CartButton({ onPress }: { onPress: () => void }) {
  const hasItemsInCart = useSelector(selectCartHasItems);

  const totalItemsInCart = useSelector(selectTotalItemsInCart);

  return (
    <Container onPress={onPress}>
      {hasItemsInCart && (
        <Badge>
          <Text size={theme.FONT_SIZE.XSM}>{totalItemsInCart}</Text>
        </Badge>
      )}
      <MaterialIcons
        name="shopping-cart-checkout"
        size={theme.FONT_SIZE.XL}
        color={theme.COLORS.WHITE}
      />
    </Container>
  );
}
