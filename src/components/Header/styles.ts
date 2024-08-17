import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
  align-items: center;
  padding: 8px 16px;
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BackButton = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 8px;
`;

export const CartButton = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 8px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CardButtonBadge = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 12px;
  z-index: 1;
  height: 12px;
  border-radius: 8px;
  position: absolute;
  top: 0px;
  right: 2px;
  align-items: center;
  justify-content: center;
`;
