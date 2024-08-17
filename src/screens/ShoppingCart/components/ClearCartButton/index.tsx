import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '@screens/ShoppingCart/components/ClearCartButton/styles';
import { clearCart } from '@store/slices/cart.slice';
import { useDispatch } from 'react-redux';
import theme from 'src/theme';

export function ClearCartButton() {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container onPress={handleClearCart}>
      <MaterialIcons name="delete" size={theme.FONT_SIZE.LG} color={theme.COLORS.RED} />
      <Text size={theme.FONT_SIZE.SM} fontFamily={theme.FONT_FAMILY.BOLD} color={theme.COLORS.RED}>
        Remover todos
      </Text>
    </Container>
  );
}
