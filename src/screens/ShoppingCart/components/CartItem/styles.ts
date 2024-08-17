import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemInfoContainer = styled.View`
  gap: 8px;
`;

export const ActionsView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ActionButton = styled(TouchableOpacity)<ButtonProps>`
  padding: 8px;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;
