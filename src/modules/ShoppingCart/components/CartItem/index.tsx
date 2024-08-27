import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import {
  ActionButton,
  ActionsView,
  CartItemInfo,
  Container,
  ProductTitle,
} from '@modules/ShoppingCart/components/CartItem/styles';
import { useCartItem } from '@modules/ShoppingCart/hooks/useCartItem';
import { ShoppingCartItem } from '@modules/ShoppingCart/typings/shopping-cart';
import theme from '@theme/index';
import { Pressable } from 'react-native';

type CartItemProps = {
  product: ShoppingCartItem;
};

export function CartItem({ product }: CartItemProps) {
  const { disableDecrement, decrementQuantity, incrementQuantity, removeItem } =
    useCartItem(product);

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
      <Pressable onPress={removeItem}>
        <MaterialIcons name="delete" size={theme.FONT_SIZE.XL} color={theme.COLORS.RED} />
      </Pressable>
    </Container>
  );
}
