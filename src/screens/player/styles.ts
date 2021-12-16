import styled from 'styled-components/native';
import {ThemeColors} from '~/constants/colors';

export const Container = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const PlayerContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-bottom: 80px;
`;

export const RowContainer = styled.View<{theme: ThemeColors}>`
  flex-direction: row;
  justify-content: center;
  background-color: ${({theme}) => theme.card};
  border-radius: 50px;
  padding: 5px 10px;
`;

export const PlayButton = styled.TouchableOpacity`
  justify-content: center;
`;

export const PlayIcon = styled.Image<{smaller?: boolean}>`
  height: ${props => (props.smaller ? `30px` : `75px`)};
  width: ${props => (props.smaller ? `30px` : `75px`)};
  margin: 10px 23px;
`;
