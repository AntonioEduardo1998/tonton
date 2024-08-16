import { Header } from '@components/Header';
import { Container, Title } from '@screens/ShoppingCart/styles';

export function ShoppingCart() {
  return (
    <Container>
      <Header showBackButton />
      <Title>Shopping Cart</Title>
    </Container>
  );
}
