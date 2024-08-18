import { CartButton } from '@components/Header/components/CartButton';
import { BackButton, Container, Title } from '@components/Header/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@hooks/useNavigation';
import theme from 'src/theme';

type Props = {
  showBackButton?: boolean;
  showCartButton?: boolean;
  children?: React.ReactNode;
};

export function Header({ showBackButton = false, showCartButton = false, children }: Props) {
  const { navigateToHome, navigateToShoppingCart } = useNavigation();

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
