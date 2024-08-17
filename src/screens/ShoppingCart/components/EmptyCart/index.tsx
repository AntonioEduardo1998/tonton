import { Card } from '@components/Card';
import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Container, KeepShoppingButton } from '@screens/ShoppingCart/components/EmptyCart/styles';
import theme from 'src/theme';

export function EmptyCart() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Card>
        <Text
          align="center"
          size={theme.FONT_SIZE.LG}
          fontFamily={theme.FONT_FAMILY.BOLD}
          color={theme.COLORS.WHITE}>
          Seu carrinho está vazio
        </Text>
        <KeepShoppingButton onPress={navigateToHome}>
          <MaterialIcons
            name="shopping-cart"
            size={theme.FONT_SIZE.LG}
            color={theme.COLORS.PURPLE_700}
          />
          <Text
            size={theme.FONT_SIZE.MD}
            fontFamily={theme.FONT_FAMILY.BOLD}
            color={theme.COLORS.PURPLE_700}>
            Continuar comprando
          </Text>
        </KeepShoppingButton>
      </Card>
    </Container>
  );
}
