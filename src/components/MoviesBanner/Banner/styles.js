import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import { heightPercentage, widthPercentage } from '~/utils/responsive';

export const Wrapper = styled.TouchableOpacity`
  width: ${widthPercentage(90)}px;
  height: ${heightPercentage(30)}px;
  margin-horizontal: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  flex: 1;
`;
