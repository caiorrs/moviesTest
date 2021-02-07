import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 50,
  },
})``;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  padding: 10px;
`;

export const HeaderWrapper = styled.View`
  padding: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Touchable = styled.TouchableOpacity``;

export const IconWrapper = styled.View``;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  max-width: 70%;
  text-align: center;
`;

export const ReloadLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: bold;
`;

export const SearchText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-horizontal: 10px;
`;