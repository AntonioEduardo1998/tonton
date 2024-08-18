import { Header } from '@components/Header';
import { Text } from '@components/Text';
import { CartItem } from '@modules/ShoppingCart/components/CartItem/';
import { ClearCartButton } from '@modules/ShoppingCart/components/ClearCartButton';
import { EmptyCart } from '@modules/ShoppingCart/components/EmptyCart';
import { Container, Footer } from '@modules/ShoppingCart/screens/ShoppingCartList/styles';
import { selectCartHasItems, selectTotalCost } from '@modules/ShoppingCart/state/slices/cart.slice';
import { RootState } from '@store/store';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import theme from 'src/theme';

export function ShoppingCartList() {
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
        renderItem={({ item }) => <CartItem product={item} />}
      />
      <Footer>
        <Text color={theme.COLORS.PURPLE_900}>Total: R$ {totalCost.toFixed(2)}</Text>
      </Footer>
    </Container>
  );
}
