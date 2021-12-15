import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 5px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.border};
  border-width: 1px;
  padding: 5px 10px;
  flex-direction: row;
`;
export const FlexCol = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const TrackName = styled.Text`
  font-size: 22px;
  color: ${({theme}) => theme.title};
  margin-bottom: 3px;
  font-weight: 600;
`;
export const AlbumCover = styled.Image`
  aspect-ratio: 1;
  width: 85px;
  border-radius: 5px;
  margin: 5px 15px 5px 0;
`;

export const Title = styled.Text`
  font-size: 16px;
`;
