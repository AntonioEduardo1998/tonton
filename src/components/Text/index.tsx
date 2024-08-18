import { StyledText } from '@components/Text/styles';
import { TextProps as ReactTextProps } from 'react-native';

interface TextProps extends ReactTextProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  fontFamily?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export function Text({ children, ...props }: TextProps) {
  return <StyledText {...props}>{children}</StyledText>;
}
