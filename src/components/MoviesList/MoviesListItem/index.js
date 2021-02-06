import React from 'react';
import { useConfiguration } from '~/hooks';
import { Touchable, Image } from './styles';

const MoviesListItem = ({ movie, onSelectMovie }) => {
  const { imageBaseURL, posterSizes } = useConfiguration();

  const posterSize = posterSizes[3];

  return (
    <Touchable onPress={() => onSelectMovie({ id: movie?.id })}>
      <Image source={{ uri: `${imageBaseURL}${posterSize}${movie?.poster_path}` }} />
    </Touchable>
  );
};

export default MoviesListItem;
