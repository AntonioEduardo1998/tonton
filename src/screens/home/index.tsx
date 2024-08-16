import { Header } from '@components/Header';
import { Container, Title } from '@screens/Home/styles';

export function Home() {
  return (
    <Container>
      <Header showCartButton />
      <Title>Home</Title>
    </Container>
  );
}
