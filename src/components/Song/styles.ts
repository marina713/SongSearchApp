import styled from 'styled-components/native';
import { ThemeColors } from '~/constants/colors';

export const Container = styled.View<{ theme: ThemeColors }>`
  margin: 10px 5px;
  padding: 5px 20px;
  align-items: center;
`;

export const TrackName = styled.Text<{ theme: ThemeColors }>`
  font-size: 30px;
  color: ${({ theme }) => theme.title};
  margin-bottom: 3px;
  font-weight: 600;
  text-align: center;
`;
export const AlbumCover = styled.Image`
  aspect-ratio: 1;
  width: 200px;
  border-radius: 5px;
  margin: 20px 0 15px 0;
`;

export const Title = styled.Text<{ theme: ThemeColors }>`
  font-size: 23px;
  text-align: center;
  color: ${({ theme }) => theme.subtitle};
`;

export const FlexRowContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;

export const ExtraInfoContainer = styled.View<{ theme: ThemeColors }>`
  flex-direction: row;
  justify-content: center;
  border: 0.7px solid ${({ theme }) => theme.text};
  border-radius: 20px;
  padding: 2px 10px;
  margin: 3px 3px;
`;

export const ExtraInfoText = styled.Text<{ theme: ThemeColors }>`
  font-size: 17px;
  color: ${({ theme }) => theme.text};
`;
