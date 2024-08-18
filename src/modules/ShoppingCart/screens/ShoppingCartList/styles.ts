import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.PURPLE_500};
`;

export const ClearCartButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.RED};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
