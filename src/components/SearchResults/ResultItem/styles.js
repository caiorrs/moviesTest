import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  height: 150px;
  background-color: white;
  border-radius: 10px;
  margin-vertical: 10px;
  padding: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const PosterWrapper = styled.View`
  height: 100%;
  width: 30%;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain
})`
  flex: 1;
`;

export const DescriptionWrapper = styled.View`
  justify-content: space-between;
  flex: 1;
`;

export const TitleAndDescription = styled.View``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.darkText};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.darkText};
  font-weight: 500;
`;

export const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Rating = styled.Text`
  color: ${({theme}) => theme.colors.darkText};
  font-weight: bold;
  font-size: 14px;
`;
