import styled from 'styled-components/native';

export const GameContent = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const GameInfo = styled.View`
  padding-left: 16px;
`;

export const GameBanner = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 4px;
`;

export const CartActionButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;
