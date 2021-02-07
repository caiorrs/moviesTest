import moment from 'moment';
import React, { useState, useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useConfiguration } from '~/hooks';
import { useLanguage } from '~/language';
import { API } from '~/services';
import { priceMasker } from '~/utils';
import type {movieDetailsResponse} from '../../services/types';
import {
  Wrapper, PosterWrapper, InfoWrapper, PosterTitle, Rating, DetailsWrapper,
  StatsWrapper, StatsTitle, StatsValue, DescriptionWrapper, DescriptionTitle, DescriptionValue,
  Scroll, ErrorText, Touchable, ReloadLabel,
} from './styles';

const Details = ({ route }) => {
  const { movieId } = route?.params;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [movieDetails, setMovieDetails] = useState<movieDetailsResponse | null>(null);
  // const [movieDetails, setMovieDetails] = useState(null);

  const { DetailStrings } = useLanguage();

  const { baseURL, backdropSizes } = useConfiguration();
  const backdropSize = backdropSizes[3];

  const getMovieDetails = async () => {
    try {
      setIsLoading(true);
      const result = await API.getMovieDetails({ movie_id: movieId });
      setMovieDetails(result?.data);
      setError(null);
      setIsLoading(false);
    } catch (err) {
      console.warn('Error - ', err.message);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  const movieGenres = useMemo(() => movieDetails?.genres?.map((genre) => genre?.name).join(', '), [movieDetails]);

  if (isLoading) {
    return (
      <Wrapper>
        <ActivityIndicator size="large" />
      </Wrapper>
    );
  }

  if (!isLoading && error) {
    return (
      <Wrapper>
        <ErrorText>{DetailStrings.errorMessage}</ErrorText>
        <Touchable onPress={getMovieDetails}>
          <ReloadLabel>{DetailStrings.reload}</ReloadLabel>
        </Touchable>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Scroll stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <PosterWrapper source={{ uri: `${baseURL}${backdropSize}${movieDetails?.backdrop_path || movieDetails?.poster_path}` }}>
          <InfoWrapper>
            <PosterTitle>{movieDetails?.title}</PosterTitle>
            <Rating>{`${movieDetails?.vote_average.toFixed(1)} / 10`}</Rating>
          </InfoWrapper>
        </PosterWrapper>
        <DetailsWrapper>
          <DescriptionWrapper>
            <DescriptionTitle>{DetailStrings.overview}</DescriptionTitle>
            <DescriptionValue>{movieDetails?.overview}</DescriptionValue>
          </DescriptionWrapper>
          <StatsTitle>{DetailStrings.moreInfo}</StatsTitle>
          <StatsWrapper>
            <StatsTitle>{DetailStrings.duration}</StatsTitle>
            <StatsValue>{movieDetails?.runtime} min</StatsValue>
            <StatsTitle>{DetailStrings.year}</StatsTitle>
            <StatsValue>{moment(movieDetails?.release_date).format('YYYY')}</StatsValue>
            <StatsTitle>{DetailStrings.revenue}</StatsTitle>
            <StatsValue>{priceMasker(movieDetails?.revenue)}</StatsValue>
            <StatsTitle>{DetailStrings.budget}</StatsTitle>
            <StatsValue>{!movieDetails?.budget ? DetailStrings.unknown : priceMasker(movieDetails?.budget)}</StatsValue>
            <StatsTitle>{DetailStrings.genres}</StatsTitle>
            <StatsValue>{movieGenres}</StatsValue>
            {movieDetails?.homepage ? (
              <>
                <StatsTitle>{DetailStrings.website}</StatsTitle>
                <StatsValue>{movieDetails?.homepage}</StatsValue>
              </>
              ) : null}
            <StatsTitle>{DetailStrings.originalTitle}</StatsTitle>
            <StatsValue>{movieDetails?.original_title}</StatsValue>
          </StatsWrapper>
        </DetailsWrapper>
      </Scroll>
    </Wrapper>
  );
};

export default Details;
