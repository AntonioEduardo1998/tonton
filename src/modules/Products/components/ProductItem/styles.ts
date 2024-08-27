import styled from 'styled-components/native';

export const ProductContent = styled.View`
  flex-direction: column;
  gap: 16px;
`;

export const ProductBanner = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 4px;
`;

export const CartActionButton = styled.Pressable`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;
