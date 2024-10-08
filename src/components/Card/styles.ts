import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  margin: 8px;
  flex: 1;
`;
