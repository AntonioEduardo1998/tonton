import { Container } from '@components/Card/styles';

type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return <Container>{children}</Container>;
}
