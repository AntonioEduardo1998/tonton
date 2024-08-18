import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '@modules/ShoppingCart/components/ClearCartButton/styles';
import { useCart } from '@modules/ShoppingCart/hooks/useCart';
import theme from 'src/theme';

export function ClearCartButton() {
  const { confirmClearCart } = useCart();

  return (
    <Container onPress={confirmClearCart}>
      <MaterialIcons name="delete" size={theme.FONT_SIZE.LG} color={theme.COLORS.RED} />
      <Text size={theme.FONT_SIZE.SM} fontFamily={theme.FONT_FAMILY.BOLD} color={theme.COLORS.RED}>
        Remover todos
      </Text>
    </Container>
  );
}
