import { GameList } from '@components/GamesList';
import { Header } from '@components/Header';
import { Container } from '@screens/Home/styles';

export function Home() {
  return (
    <Container>
      <Header showCartButton />
      <GameList />
    </Container>
  );
}
