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
  margin-top: 20px;
  padding: 10px;
`;
