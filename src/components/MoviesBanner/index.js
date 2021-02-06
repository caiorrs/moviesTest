import React from 'react';
import {
  Wrapper, List, ItemWrapper,
} from './styles';
import Banner from './Banner';

const MoviesBanner = ({ movies, onChoose }) => {
  const renderItem = ({ item: movie, index }) => (
    <ItemWrapper>
      <Banner
        key={index}
        movie={movie}
        onChoose={onChoose}
      />
    </ItemWrapper>
  );

  return (
    <Wrapper>
      <List
        data={movies}
        extraData={movies}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Wrapper>
  );
};

export default MoviesBanner;
