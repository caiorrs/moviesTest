import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { Wrapper, Scroll, Title } from './styles';
import type { discoverType } from '~/services/types';
import { MoviesBanner, MoviesList } from '~/components';
import { API } from '~/services';
import { useLanguage } from '~/language';

const Home = () => {
  const { loading: configLoading, configuration } = useSelector((state) => state.AppReducer);
  const { trending, genres } = useSelector((state) => state.MoviesReducer);
  const [latestPage, setLatestPage] = useState({});
  const dispatch = useDispatch();
  const { HomeStrings, DetailStrings } = useLanguage();

  const navigation = useNavigation();

  const getDiscoverMovies = async ({ page, with_genres }: discoverType) => {
    try {
      const result = await API.getDiscoverMovies({ page, with_genres });
      console.warn(result?.data);
      return { ...result?.data, genreId: with_genres };
    } catch (error) {
      console.warn(error?.message);
    }
  };

  const getEveryGenre = async () => {
    const ids = genres?.genres?.reduce((acc, curr) => [...acc, curr.id], []);
    try {
      const results = await Promise.all(ids.map((id) => getDiscoverMovies({ page: 1, with_genres: [id] })));
      console.log({ results });
    } catch (error) {
      console.warn(error.message);
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

  const onChooseMovie = ({ id }) => {
    navigation.navigate('Details', { movieId: id, name: DetailStrings.title });
  };

  useEffect(() => {
    if (genres?.genres?.length) getEveryGenre();
  }, [genres]);

  if (configLoading || !trending?.results?.length) return <ActivityIndicator />;

  return (
    <Wrapper>
      <Scroll showsVerticalScrollIndicator={false}>
        <Title>{HomeStrings.trending}</Title>
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
