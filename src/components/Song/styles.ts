import styled from 'styled-components/native';
import {ThemeColors} from '~/constants/colors';

export const Container = styled.View<{theme: ThemeColors}>`
  margin: 10px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.border};
  border-width: 1px;
  padding: 5px 10px;
  align-items: center;
`;

export const TrackName = styled.Text<{theme: ThemeColors}>`
  font-size: 30px;
  color: ${({theme}) => theme.title};
  margin-bottom: 3px;
  font-weight: 600;
`;
export const AlbumCover = styled.Image`
  aspect-ratio: 1;
  width: 200px;
  border-radius: 5px;
  margin: 20px 15px 5px 0;
`;

export const Title = styled.Text`
  font-size: 23px;
`;
