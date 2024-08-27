import styled from 'styled-components/native';

export const Container = styled.Pressable`
  border-radius: 8px;
  padding: 4px 8px;
  margin-left: auto;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  gap: 8px;
`;
