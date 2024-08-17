import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const KeepShoppingButton = styled.TouchableOpacity`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;
