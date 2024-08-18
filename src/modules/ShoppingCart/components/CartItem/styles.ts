import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin: 8px;
  gap: 16px;
  border-radius: 8px;
`;

export const CartItemInfo = styled.View`
  flex: 1;
  gap: 8px;
`;

export const ActionsView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ProductTitle = styled.Text`
  max-width: 100%;
`;

export const ActionButton = styled.TouchableOpacity<ButtonProps>`
  padding: 8px;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;
