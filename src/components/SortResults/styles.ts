import styled from 'styled-components/native';
import { ThemeColors } from '~/constants/colors';

export const Container = styled.View`
  padding: 0px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SortItemsContainer = styled.View`
  flex-direction: row;
  margin: 8px 0;
`;

export const SortItem = styled.TouchableOpacity<{
  isSelected: boolean;
  theme: ThemeColors;
}>`
  border-radius: 20px;
  ${props =>
    props.isSelected
      ? `background-color: ${props.theme.text};`
      : `border: 1px ${props.theme.text};`}

  padding: 7px 10px;
  margin: 0 3px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text<{ theme: ThemeColors }>`
  font-size: 22px;
  color: ${({ theme }) => theme.title};
  margin-bottom: 3px;
  font-weight: 300;
`;

export const SortItemText = styled.Text<{
  isSelected: boolean;
  theme: ThemeColors;
}>`
  font-size: 16px;
  ${props =>
    props.isSelected
      ? `color: ${props.theme.background};`
      : `color: ${props.theme.text};`}
`;

export const SortIcon = styled.Image`
  margin-left: 7px;
  margin-right: 7px;
  width: 17px;
  height: 17px;
`;
