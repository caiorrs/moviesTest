import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { Wrapper, Scroll, Title } from './styles';
import type { discoverType } from '~/services/types';
import { MoviesBanner, MoviesList } from '~/components';
import { API } from '~/services';
import { useLanguage } from '~/language';
import { setByGenre } from '~/store/ducks/movies';

const Home = () => {
  const { loading: configLoading } = useSelector((state) => state.AppReducer);
  const { trending, genres, byGenre } = useSelector((state) => state.MoviesReducer);
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
      const results = await Promise.all(ids.map(async (id) => {
        const result = await getDiscoverMovies({ page: 1, with_genres: [id] });
        return {
          result,
          genreId: id,
        };
      }));
      console.warn({ results: results[0].result.results[0].title });
      dispatch(setByGenre(results));
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
        {byGenre?.map((genre) => {
          // console.warn({ genre });
          const genreName = genres?.genres?.find((item) => item.id === genre?.result?.genreId[0])?.name;
          // console.warn(genre);
          return (
            <MoviesList
              movies={genre?.result?.results}
              title={genreName}
              onEndReached={handleOnEndReached}
              onChooseMovie={onChooseMovie}
              genreId={genre?.result?.genreId}
            />
          );
        })}
      </Scroll>
    </Wrapper>
  );
};

export default Home;
