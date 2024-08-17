import { TextProps } from 'react-native';
import styled from 'styled-components/native';

interface StyledTextProps extends TextProps {
  size?: number;
  color?: string;
  fontFamily?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const StyledText = styled.Text<StyledTextProps>`
  font-size: ${(props) => props.size || props.theme.FONT_SIZE.MD}px;
  color: ${(props) => props.color || props.theme.COLORS.WHITE};
  font-family: ${(props) => props.fontFamily || props.theme.FONT_FAMILY.REGULAR};
  text-align: ${(props) => props.align || 'left'};
`;
