import {
  BackButton,
  CardButtonBadge,
  CartButton,
  Container,
  Title,
} from '@components/Header/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { selectCartHasItems } from '@store/slices/cart.slice';
import { useSelector } from 'react-redux';
import theme from 'src/theme';

type Props = {
  showBackButton?: boolean;
  showCartButton?: boolean;
  children?: React.ReactNode;
};

export function Header({ showBackButton = false, showCartButton = false, children }: Props) {
  const navigation = useNavigation();

  const hasItemsInCart = useSelector(selectCartHasItems);

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
          <MaterialIcons name="arrow-back" size={theme.FONT_SIZE.XL} color={theme.COLORS.WHITE} />
        </BackButton>
      )}
      {children}
      {showCartButton && (
        <CartButton onPress={navigateToShoppingCart}>
          {hasItemsInCart && <CardButtonBadge />}
          <MaterialIcons
            name="shopping-cart-checkout"
            size={theme.FONT_SIZE.XL}
            color={theme.COLORS.WHITE}
          />
        </CartButton>
      )}
    </Container>
  );
}

const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};
HeaderTitle.displayName = 'Header.Title';
Header.Title = HeaderTitle;
