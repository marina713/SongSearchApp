import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: ${({theme}) => theme.title};
  margin: 8px 0;
`;

export const Link = styled.TouchableOpacity``;

export const FlatList = styled.FlatList`
  padding: 10px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
  margin-top: 12px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.title};
  padding: 5px 10px;
  font-size: 18px; ;
`;
