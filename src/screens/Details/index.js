import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useConfiguration } from '~/hooks';
import { API } from '~/services';
import { movieDetailsResponse } from '~/services/types';
import {
  Wrapper, HeaderWrapper, PosterWrapper, InfoWrapper, PosterTitle, Rating, DetailsWrapper,
  StatsWrapper, StatsTitle, StatsValue, DescriptionWrapper, DescriptionTitle, DescriptionValue,
  Scroll,
} from './styles';

const Details = ({ route }) => {
  const { movieId } = route?.params;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [movieDetails, setMovieDetails] = useState<movieDetailsResponse | null>(null);
  const [movieDetails, setMovieDetails] = useState(null);

  const { baseURL, backdropSizes } = useConfiguration();
  const backdropSize = backdropSizes[3];

  const getMovieDetails = async () => {
    try {
      setIsLoading(true);
      const result = await API.getMovieDetails({ movie_id: movieId });
      setMovieDetails(result?.data);
      setError(null);
      setIsLoading(false);
      console.warn(result?.data);
    } catch (err) {
      console.warn('Error - ', err.message);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  // console.warn({ movieDetails });

  if (isLoading || movieDetails === null) {
    return (
      <Wrapper>
        <ActivityIndicator />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        {/* <Header /> */}
      </HeaderWrapper>
      <Scroll>
        <PosterWrapper source={{ uri: `${baseURL}${backdropSize}${movieDetails?.backdrop_path}` }}>
          <InfoWrapper>
            <PosterTitle>{movieDetails?.title}</PosterTitle>
            <Rating>{`${movieDetails?.vote_average.toFixed(1)} / 10`}</Rating>
          </InfoWrapper>
        </PosterWrapper>
        <DetailsWrapper>
          <DescriptionWrapper>
            <DescriptionTitle>Overview</DescriptionTitle>
            <DescriptionValue>{movieDetails?.overview}</DescriptionValue>
          </DescriptionWrapper>
          <StatsWrapper>
            <StatsTitle>Revenue</StatsTitle>
            <StatsValue>{movieDetails?.revenue}</StatsValue>
            <StatsTitle>Budget</StatsTitle>
            <StatsValue>{movieDetails?.budget}</StatsValue>
            <StatsTitle>Genres</StatsTitle>
            <StatsValue>{movieDetails?.genres?.map((genre) => genre?.name)}</StatsValue>
            <StatsTitle>Website</StatsTitle>
            <StatsValue>{movieDetails?.homepage}</StatsValue>
            <StatsTitle>Original Title</StatsTitle>
            <StatsValue>{movieDetails?.original_title}</StatsValue>
          </StatsWrapper>
        </DetailsWrapper>
      </Scroll>
    </Wrapper>
  );
};

export default Details;
