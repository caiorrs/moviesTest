import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-vertical: 10px;
`;

export const TitleWrapper = styled.View`
  padding-left: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const ListWrapper = styled.View``;

export const List = styled.FlatList``;

export const ItemWrapper = styled.View``;
