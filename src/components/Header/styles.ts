import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 8px;
  flex: 1;
`;

export const CartButton = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 8px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;
