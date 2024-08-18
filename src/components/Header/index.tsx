import { CartButton } from '@components/Header/components/CartButton';
import { BackButton, Container, Title } from '@components/Header/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import theme from 'src/theme';

type Props = {
  showBackButton?: boolean;
  showCartButton?: boolean;
  children?: React.ReactNode;
};

export function Header({ showBackButton = false, showCartButton = false, children }: Props) {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function navigateToShoppingCart() {
    navigation.navigate('ShoppingCartList');
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={navigateToHome}>
          <MaterialIcons name="arrow-back" size={theme.FONT_SIZE.XL} color={theme.COLORS.WHITE} />
        </BackButton>
      )}
      {children}
      {showCartButton && <CartButton onPress={navigateToShoppingCart} />}
    </Container>
  );
}

const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};
HeaderTitle.displayName = 'Header.Title';
Header.Title = HeaderTitle;
