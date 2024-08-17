import { Header } from '@components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import {
  ClearCartButton,
  ClearCartButtonText,
  Container,
  Footer,
} from '@screens/ShoppingCart/styles';
import { clearCart, selectTotalCost } from '@store/slices/cart.slice';
import { RootState } from '@store/store';
import { CartItem } from '@typings/cart';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import theme from 'src/theme';

export function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCost = useSelector(selectTotalCost);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>Quantidade: {item.quantity}</Text>
    </View>
  );

  return (
    <Container>
      <Header showBackButton>
        <Header.Title>carrinho</Header.Title>
      </Header>
      <ClearCartButton onPress={handleClearCart}>
        <MaterialIcons name="delete" size={theme.FONT_SIZE.LG} color={theme.COLORS.RED} />
        <ClearCartButtonText>Remover todos</ClearCartButtonText>
      </ClearCartButton>
      <FlatList data={cartItems} keyExtractor={(item) => item.dealID} renderItem={renderItem} />
      <Footer>
        <Text>Total: R$ {totalCost}</Text>
      </Footer>
    </Container>
  );
}
