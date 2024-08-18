import { NavigateToCartButton } from '@components/NavigateToCartButton';
import { BackButton, Container, Title } from '@components/Header/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@hooks/useNavigation';
import theme from '@theme/index';

type Props = {
  showBackButton?: boolean;
  showCartButton?: boolean;
  children?: React.ReactNode;
};

export function Header({ showBackButton = false, showCartButton = false, children }: Props) {
  const { navigateToHome } = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={navigateToHome}>
          <MaterialIcons name="arrow-back" size={theme.FONT_SIZE.XL} color={theme.COLORS.WHITE} />
        </BackButton>
      )}
      {children}
      {showCartButton && <NavigateToCartButton />}
    </Container>
  );
}

const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};
HeaderTitle.displayName = 'Header.Title';
Header.Title = HeaderTitle;
