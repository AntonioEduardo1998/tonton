import { GameList } from '@components/GamesList';
import { Header } from '@components/Header';
import { Container } from '@screens/Home/styles';

export function Home() {
  return (
    <Container>
      <Header showCartButton>
        <Header.Title>jogos do dia</Header.Title>
      </Header>
      <GameList />
    </Container>
  );
}
