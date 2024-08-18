import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Text } from '@components/Text';
import { CartItemComponent } from '@screens/ShoppingCart/components/CartItem';
import { Container, Footer } from '@screens/ShoppingCart/styles';
import { selectCartHasItems, selectTotalCost } from '@store/slices/cart.slice';
import { RootState } from '@store/store';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import theme from 'src/theme';
import { ClearCartButton } from '@screens/ShoppingCart/components/ClearCartButton';
import { EmptyCart } from '@screens/ShoppingCart/components/EmptyCart';

export function ShoppingCart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCost = useSelector(selectTotalCost);
  const hasItems = useSelector(selectCartHasItems);

  return (
    <Container>
      <Header showBackButton>
        <Header.Title>carrinho</Header.Title>
      </Header>
      {hasItems && <ClearCartButton />}
      {!hasItems && <EmptyCart />}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.dealID}
        renderItem={({ item }) => <CartItemComponent game={item} />}
      />
      <Footer>
        <Text color={theme.COLORS.PURPLE_900}>Total: R$ {totalCost.toFixed(2)}</Text>
      </Footer>
    </Container>
  );
}
