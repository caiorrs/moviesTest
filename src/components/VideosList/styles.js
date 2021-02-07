import styled from 'styled-components/native'

export const Wrapper = styled.View`
  height: 200px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  margin-vertical: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const List = styled.FlatList`
  flex: 1;
`;

export const ItemWrapper = styled.View`
  flex: 1;
`;
