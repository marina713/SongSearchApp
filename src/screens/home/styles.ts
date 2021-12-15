import styled from 'styled-components/native';
import {ThemeColors} from '~/constants/colors';

export const Container = styled.View`
  padding: 15px;
`;
export const NotFoundContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text<{theme: ThemeColors}>`
  font-size: 40px;
  color: ${({theme}) => theme.title};
  margin: 8px 0;
  font-weight: 600;
`;
export const Subtitle = styled.Text<{theme: ThemeColors}>`
  font-size: 22px;
  color: ${({theme}) => theme.subtitle};
`;

export const FlatList = styled.FlatList`
  padding: 10px;
`;

export const TextInput = styled.TextInput<{theme: ThemeColors}>`
  height: 40px;
  margin-top: 12px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.title};
  padding: 5px 10px;
  font-size: 18px;
  color: ${({theme}) => theme.title};
`;
