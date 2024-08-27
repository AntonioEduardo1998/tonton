import styled from 'styled-components/native';

export const Container = styled.Pressable`
  border-radius: 8px;
  padding: 8px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Badge = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 18px;
  z-index: 1;
  height: 18px;
  border-radius: 8px;
  position: absolute;
  top: 0px;
  right: 2px;
  align-items: center;
  justify-content: center;
`;
