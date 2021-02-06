import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { heightPercentage } from '~/utils/responsive';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.View``;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const PosterWrapper = styled(FastImage)`
  height: ${heightPercentage(30)}px;
  justify-content: flex-end;
`;

export const InfoWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const PosterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: bold;
`;

export const Rating = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: bold;
`;

export const DetailsWrapper = styled.View``;

export const StatsWrapper = styled.View``;

export const StatsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text}
`;

export const StatsValue = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const DescriptionWrapper = styled.View``;

export const DescriptionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const DescriptionValue = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
