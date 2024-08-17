import { Game } from '@typings/games';
import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const StyledFlatList = styled(FlatList as new () => FlatList<Game>)<FlatListProps<Game>>`
  flex: 1;
  padding: 10px;
  background-color: ${(props) => props.theme.COLORS.PURPLE_500};
`;
