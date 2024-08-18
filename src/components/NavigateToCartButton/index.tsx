import { Badge, Container } from '@components/NavigateToCartButton/styles';
import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@hooks/useNavigation';
import {
  selectCartHasItems,
  selectTotalItemsInCart,
} from '@modules/ShoppingCart/state/selectors/cart.selectors';
import theme from '@theme/index';
import { useSelector } from 'react-redux';

export function NavigateToCartButton() {
  const hasItemsInCart = useSelector(selectCartHasItems);

  const totalItemsInCart = useSelector(selectTotalItemsInCart);

  const { navigateToShoppingCart } = useNavigation();

  return (
    <Container onPress={navigateToShoppingCart}>
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
