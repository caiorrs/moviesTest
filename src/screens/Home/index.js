import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { Wrapper, Scroll } from './styles';
import type { discoverType } from '~/services/types';

import { MoviesBanner, MoviesList } from '~/components';
import { API } from '~/services';

const Home = () => {
  const { loading: configLoading, configuration } = useSelector((state) => state.AppReducer);
  const { trending } = useSelector((state) => state.MoviesReducer);
  const [latestPage, setLatestPage] = useState({});
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const getDiscoverMovies = async ({ page, with_genres }: discoverType) => {
    try {
      const result = await API.getDiscoverMovies({ page, with_genres });
      console.warn(result?.data);
    } catch (error) {
      console.warn(error?.response.data);
    }
  };

  const handleOnEndReached = (genreId) => {
    if (Object.keys(latestPage).includes(String(genreId))) {
      // dispatch(fetchMoreFromGenre({ page: latestPage[genreId] + 1, with_genres: [genreId] }));
      const obj = { ...latestPage };
      obj[genreId] += 1;
      setLatestPage({ ...obj });
    } else {
      // dispatch(fetchMoreFromGenre({ page: 2, with_genres: [genreId] }));
      const obj = { ...latestPage };
      obj[genreId] = 2;
      setLatestPage({ ...obj });
    }
  };

  useEffect(() => {
    if (configuration) {
      console.warn({ configuration });
    }
  }, [configuration]);

  const onChooseMovie = ({ id }) => {
    navigation.navigate('Details', { movieId: id });
  };

  if (configLoading || !trending?.results?.length) return <ActivityIndicator />;

  return (
    <Wrapper>
      <Scroll>
        <MoviesBanner
          movies={trending?.results}
          onChoose={onChooseMovie}
        />
        <MoviesList
          movies={trending?.results}
          title="Filmes"
          onEndReached={handleOnEndReached}
          onChooseMovie={onChooseMovie}
          genreId={1}
        />
        <MoviesList
          movies={trending?.results}
          title="Filmes"
          onEndReached={handleOnEndReached}
          onChooseMovie={onChooseMovie}
          genreId={2}
        />
        <MoviesList
          movies={trending?.results}
          title="Filmes"
          onEndReached={handleOnEndReached}
          onChooseMovie={onChooseMovie}
          genreId={3}
        />
      </Scroll>
    </Wrapper>
  );
};

export default Home;
