import styled from 'styled-components/native';

export const Container = styled.View``;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const PlayButton = styled.TouchableOpacity`
  justify-content: center;
`;

export const PlayIcon = styled.Image<{smaller?: boolean}>`
  height: ${props => (props.smaller ? `35px` : `65px`)};
  width: ${props => (props.smaller ? `35px` : `65px`)};
  margin: 10px 10px;
`;
