import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '@screens/ShoppingCart/components/ClearCartButton/styles';
import { clearCart } from '@store/slices/cart.slice';
import { showToast } from '@utils/showToast';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import theme from 'src/theme';

export function ClearCartButton() {
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
    showToast('Carrinho esvaziado');
  }

  function confirmClearCart() {
    Alert.alert('Remover todos os itens do carrinho?', '', [
      { text: 'cancelar', style: 'cancel' },
      { text: 'remover', onPress: handleClearCart, style: 'destructive' },
    ]);
  }

  return (
    <Container onPress={confirmClearCart}>
      <MaterialIcons name="delete" size={theme.FONT_SIZE.LG} color={theme.COLORS.RED} />
      <Text size={theme.FONT_SIZE.SM} fontFamily={theme.FONT_FAMILY.BOLD} color={theme.COLORS.RED}>
        Remover todos
      </Text>
    </Container>
  );
}
