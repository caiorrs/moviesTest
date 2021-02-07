import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { heightPercentage } from '~/utils/responsive';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.View``;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 100,
  },
})`
  flex: 1;
`;

export const PosterWrapper = styled(FastImage)`
  height: ${heightPercentage(30)}px;
  justify-content: flex-end;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
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

export const DetailsWrapper = styled.View`
  padding: 10px;
  border-width: 1px;
  border-color: ${(({ theme }) => theme.colors.text)};
  border-radius: 10px;
  margin: 10px;
`;

export const StatsWrapper = styled.View`
  padding-vertical: 10px;
`;

export const StatsTitle = styled.Text`
  margin-vertical: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: bold;
`;

export const StatsValue = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const DescriptionWrapper = styled.View`\
  margin-bottom: 10px;
`;

export const DescriptionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DescriptionValue = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
`;

export const Touchable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  margin-top: 30px;
`;

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
