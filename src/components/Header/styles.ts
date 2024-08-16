import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  padding: 8px;
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
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  align-items: center;
  justify-content: center;
`;
