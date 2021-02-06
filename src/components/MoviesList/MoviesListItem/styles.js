import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Touchable = styled.TouchableOpacity`
  margin: 10px;
  height: 180px;
  width: 130px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  flex: 1;
`;
