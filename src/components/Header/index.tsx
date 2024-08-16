import { BackButton, CartButton, Container } from '@components/Header/styles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import theme from 'src/theme';

type Props = {
  showBackButton?: boolean;
  showCartButton?: boolean;
};

export function Header({ showBackButton = false, showCartButton = false }: Props) {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function navigateToShoppingCart() {
    navigation.navigate('ShoppingCart');
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={navigateToHome}>
          <FontAwesome name="arrow-left" size={theme.FONT_SIZE.XL} color={theme.COLORS.GRAY_700} />
        </BackButton>
      )}
      {showCartButton && (
        <CartButton onPress={navigateToShoppingCart}>
          <FontAwesome
            name="shopping-cart"
            size={theme.FONT_SIZE.XL}
            color={theme.COLORS.GRAY_700}
          />
        </CartButton>
      )}
    </Container>
  );
}
