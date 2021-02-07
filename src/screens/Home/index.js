import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  Wrapper, Scroll, Title, HeaderWrapper, Touchable, IconWrapper,
  ErrorText, ReloadLabel, SearchText
} from './styles';
import type { discoverType } from '~/services/types';
import { MoviesBanner, MoviesList } from '~/components';
import { API } from '~/services';
import { useLanguage } from '~/language';
import { fetchGenres, fetchTrending, setByGenre } from '~/store/ducks/movies';
import { SearchIcon } from '~/assets/icons';
import theme from '~/assets/theme';

const Home = () => {
  const { loading: configLoading } = useSelector((state) => state.AppReducer);
  const {
    trending, genres, byGenre, errorTrending, loadingTrending, errorGenres, loadingGenres,
  } = useSelector((state) => state.MoviesReducer);
  const [latestPage, setLatestPage] = useState({});
  const dispatch = useDispatch();
  const { HomeStrings, DetailStrings } = useLanguage();
  const navigation = useNavigation();

  useEffect(() => {
    if (genres?.genres?.length) getEveryGenre();
  }, [genres]);

  const getDiscoverMovies = async ({ page, with_genres }: discoverType) => {
    try {
      const result = await API.getDiscoverMovies({ page, with_genres });
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

  const onPressSearch = () => {
    navigation.navigate("Search")
  };

  if (configLoading || loadingTrending || loadingGenres) {
    return (
      <Wrapper>
        <ActivityIndicator size="large" />
      </Wrapper>
    );
  }

  if (errorGenres || errorTrending) {
    const getHomeInfos = () => {
      dispatch(fetchTrending())
      dispatch(fetchGenres())
    }

    return (
      <Wrapper>
        <ErrorText>{HomeStrings.errorMessage}</ErrorText>
        <Touchable 
          style={{paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, backgroundColor: theme.colors.accent}}
          onPress={getHomeInfos}
        >
          <ReloadLabel>{HomeStrings.reload}</ReloadLabel>
        </Touchable>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <IconWrapper>
          <Touchable
            hitSlop={{
              top: 20, bottom: 20, left: 20, right: 20,
            }}
            onPress={onPressSearch}
            style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 5, borderRadius: 10, backgroundColor: theme.colors.accent}}
          >
            <SearchText>{HomeStrings.search}</SearchText>
            <SearchIcon height={30} width={30} />
          </Touchable>
        </IconWrapper>
      </HeaderWrapper>
      <Scroll showsVerticalScrollIndicator={false}>
        <Title>{HomeStrings.trending}</Title>
        <MoviesBanner
          movies={trending?.results}
          onChoose={onChooseMovie}
        />
        {byGenre?.map((genre) => {
          const genreName = genres?.genres?.find((item) => item.id === genre?.result?.genreId[0])?.name;
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
