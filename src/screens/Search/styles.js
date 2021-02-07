import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.input.background};
  color: ${({theme}) => theme.colors.input.text};
  padding: 10px;
  border-radius: 5px;
`;

export const IconWrapper = styled.View``;

export const Touchable = styled.TouchableOpacity`
  padding: 5px;
`;

export const Input = styled.TextInput`
  flex: 1;
`;

export const ResultsWrapper = styled.View``;

export const HintText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  text-align: center;
  padding-vertical: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const NoResultsText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  text-align: center;
  padding-vertical: 10px;
  font-size: 16px;
  font-weight: 500;
`;