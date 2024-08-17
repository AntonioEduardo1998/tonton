import styled from 'styled-components/native';

export const GameContent = styled.View`
  gap: 16px;
`;

export const GameTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const GamePrice = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const GameBanner = styled.Image`
  width: 120px;
  height: 45px;
  flex-direction: row;
`;

export const CartActionButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;

export const CartActionButtonText = styled(GameTitle)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
