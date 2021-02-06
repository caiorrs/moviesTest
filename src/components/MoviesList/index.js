import React from 'react';
import {
  Wrapper, TitleWrapper, Title, ListWrapper, List, ItemWrapper,
} from './styles';
import MoviesListItem from './MoviesListItem';

const MoviesList = ({
  title, movies, onEndReached, onChooseMovie, genreId,
}) => {
  const renderItem = ({ item: movie }) => (
    <ItemWrapper>
      <MoviesListItem
        movie={movie}
        onSelectMovie={onChooseMovie}
      />
    </ItemWrapper>
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <ListWrapper>
        <List
          data={movies}
          extraData={movies}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReached={() => onEndReached(genreId)}
          onEndReachedThreshold={0.5}
        />
      </ListWrapper>
    </Wrapper>
  );
};

export default MoviesList;
