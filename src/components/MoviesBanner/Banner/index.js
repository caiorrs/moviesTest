import React from 'react';
import { useConfiguration } from '~/hooks';
import { Wrapper, Image, Title } from './styles';

const Banner = ({ movie, onChoose }) => {
  const { baseURL, backdropSizes } = useConfiguration();
  const backdropSize = backdropSizes[3];

  return (
    <Wrapper onPress={() => onChoose({ id: movie?.id })}>
      <Image source={{ uri: `${baseURL}${backdropSize}${movie?.backdrop_path || movie?.poster_path}` }} />
      <Title>{movie?.title}</Title>
    </Wrapper>
  );
};

export default Banner;
