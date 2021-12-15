import styled from 'styled-components/native';
import {ThemeColors} from '~/constants/colors';

export const Container = styled.TouchableOpacity<{theme: ThemeColors}>`
  margin: 5px;
  border-radius: 15px;
  border-color: ${({theme}) => theme.border};
  border-width: 1px;
  padding: 8px 12px;
  flex-direction: row;
`;

export const FlexCol = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ExtraInfoContainer = styled.View<{theme: ThemeColors}>`
  flex-direction: row;
  justify-content: center;
  border: 0.7px solid ${({theme}) => theme.text};
  border-radius: 20px;
  padding: 2px 10px;
  margin-top: 5px;
`;

export const TrackName = styled.Text<{theme: ThemeColors}>`
  font-size: 22px;
  color: ${({theme}) => theme.title};
  font-weight: 600;
`;

export const AlbumCover = styled.Image`
  aspect-ratio: 1;
  width: 85px;
  border-radius: 8px;
  margin: 5px 15px 5px 0;
`;

export const Title = styled.Text<{theme: ThemeColors}>`
  font-size: 17px;
  color: ${({theme}) => theme.title};
  margin: 3px 0;
`;

export const ExtraInfoText = styled.Text<{theme: ThemeColors}>`
  font-size: 16px;
  color: ${({theme}) => theme.text};
`;

export const SubTitle = styled.Text<{theme: ThemeColors}>`
  font-size: 13px;
  color: ${({theme}) => theme.subtitle};
  margin: 1px 0;
`;
