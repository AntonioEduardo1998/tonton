import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { CartItemComponent } from '@screens/ShoppingCart/components/CartItem';
import {
  ClearCartButton,
  ClearCartButtonText,
  Container,
  Footer,
} from '@screens/ShoppingCart/styles';
import { clearCart, selectTotalCost } from '@store/slices/cart.slice';
import { RootState } from '@store/store';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import theme from 'src/theme';
import { Text } from '@components/Text';

export function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCost = useSelector(selectTotalCost);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Header showBackButton>
        <Header.Title>carrinho</Header.Title>
      </Header>
      <ClearCartButton onPress={handleClearCart}>
        <MaterialIcons name="delete" size={theme.FONT_SIZE.LG} color={theme.COLORS.RED} />
        <ClearCartButtonText>Remover todos</ClearCartButtonText>
      </ClearCartButton>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.dealID}
        renderItem={({ item }) => (
          <Card>
            <CartItemComponent game={item} />
          </Card>
        )}
      />
      <Footer>
        <Text color={theme.COLORS.PURPLE_900}>Total: R$ {totalCost.toFixed(2)}</Text>
      </Footer>
    </Container>
  );
}
