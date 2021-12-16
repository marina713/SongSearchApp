import styled from 'styled-components/native';
import {ThemeColors} from '~/constants/colors';

export const Container = styled.View<{theme: ThemeColors}>`
  align-items: center;
  padding: 5px;
  border-radius: 25px;
  margin: 15px 20px 0 0;
`;
