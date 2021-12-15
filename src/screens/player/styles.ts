import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const PlayButton = styled.TouchableOpacity`
  justify-content: center;
`;

export const PlayIcon = styled.Image<{smaller?: boolean}>`
  height: ${props => (props.smaller ? `30px` : `75px`)};
  width: ${props => (props.smaller ? `30px` : `75px`)};
  margin: 10px 23px;
`;
