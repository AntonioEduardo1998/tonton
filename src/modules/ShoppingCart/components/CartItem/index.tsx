import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import {
  ActionButton,
  ActionsView,
  CartItemInfo,
  Container,
  ProductTitle,
} from '@modules/ShoppingCart/components/CartItem/styles';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart,
} from '@modules/ShoppingCart/state/slices/cart.slice';
import { ShoppingCartItem } from '@modules/ShoppingCart/typings/shopping-cart';
import { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import theme from 'src/theme';

type CartItemProps = {
  product: ShoppingCartItem;
};

export function CartItem({ product }: CartItemProps) {
  const dispatch = useDispatch();
  const disableDecrement = useMemo(() => product.quantity <= 1, [product.quantity]);

  function incrementQuantity() {
    dispatch(incrementItemQuantity(product.dealID));
  }

  function decrementQuantity() {
    dispatch(decrementItemQuantity(product.dealID));
  }

  function removeItem() {
    dispatch(removeItemFromCart(product.dealID));
  }

  return (
    <Container>
      <CartItemInfo>
        <ProductTitle numberOfLines={1} ellipsizeMode="tail">
          {product.title}
        </ProductTitle>
        <Text color={theme.COLORS.GRAY_200} size={theme.FONT_SIZE.SM}>
          Preço: R$ {product.salePrice}
        </Text>
      </CartItemInfo>
      <ActionsView>
        <ActionButton onPress={decrementQuantity} disabled={disableDecrement}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={theme.FONT_SIZE.XXL}
            color={theme.COLORS.WHITE}
          />
        </ActionButton>
        <Text size={theme.FONT_SIZE.LG}>{product.quantity}</Text>
        <ActionButton onPress={incrementQuantity}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={theme.FONT_SIZE.XXL}
            color={theme.COLORS.WHITE}
          />
        </ActionButton>
      </ActionsView>
      <TouchableOpacity onPress={removeItem}>
        <MaterialIcons name="delete" size={theme.FONT_SIZE.XL} color={theme.COLORS.RED} />
      </TouchableOpacity>
    </Container>
  );
}
