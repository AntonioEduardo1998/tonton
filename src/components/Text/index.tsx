import { StyledText } from '@components/Text/styles';

type TextProps = {
  children: React.ReactNode;
  size?: number;
  color?: string;
  fontFamily?: string;
};

export function Text({ children, ...props }: TextProps) {
  return <StyledText {...props}>{children}</StyledText>;
}
