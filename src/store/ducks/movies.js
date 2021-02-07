/* eslint-disable no-case-declarations */
export const Types = {
  FETCH_TRENDING: 'MOVIES/FETCH_TRENDING',
  SET_TRENDING: 'MOVIES/SET_TRENDING',
  FAILED_TRENDING: 'MOVIES/FAILED_TRENDING',
  FETCH_GENRES: 'MOVIES/FETCH_GENRES',
  SET_GENRES: 'MOVIES/SET_GENRES',
  FAILED_GENRES: 'MOVIES/FAILED_GENRES',
  FETCH_BY_GENRE: 'MOVIES/FETCH_BY_GENRE',
  SET_BY_GENRE: 'MOVIES/SET_BY_GENRE',
  FAILED_BY_GENRE: 'MOVIES/FAILED_BY_GENRE',
};

const initialState = {
  trending: null,
  errorTrending: null,
  loadingTrending: false,
  genres: null,
  errorGenres: null,
  loadingGenres: false,
  byGenre: null,
  loadingByGenre: false,
  errorByGenre: null,
};

export const fetchTrending = () => ({
  type: Types.FETCH_TRENDING,
});

export const setTrending = (movies) => ({
  type: Types.SET_TRENDING,
  movies,
});

export const failedTrending = (error) => ({
  type: Types.FAILED_TRENDING,
  error,
});

export const fetchGenres = () => ({
  type: Types.FETCH_GENRES,
});

export const setGenres = (genres) => ({
  type: Types.SET_GENRES,
  genres,
});

export const failedGenres = (error) => ({
  type: Types.FAILED_GENRES,
  error,
});

export const fetchByGenre = () => ({
  type: Types.FETCH_BY_GENRE,
});

export const setByGenre = (genreResults) => ({
  type: Types.SET_BY_GENRE,
  genreResults,
});

export const faileByGenre = (error) => ({
  type: Types.FAILED_BY_GENRE,
  error,
});

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_TRENDING:
      return {
        ...state, trending: action.movies, loadingTrending: false, errorTrending: null,
      };
    case Types.FETCH_TRENDING:
      return {
        ...state, loadingTrending: true, errorTrending: false,
      };
    case Types.FAILED_TRENDING:
      return {
        ...state, loadingTrending: false, errorTrending: action.error,
      };
    case Types.SET_GENRES:
      return {
        ...state, genres: action.genres, loadingGenres: false, errorGenres: null,
      };
    case Types.FETCH_GENRES:
      return {
        ...state, loadingGenres: true, errorGenres: false,
      };
    case Types.FAILED_GENRES:
      return {
        ...state, loadingGenres: false, errorGenres: action.error,
      };

    case Types.SET_BY_GENRE:
      // TODO: logic to not override previous values + separate results by genre
      // const current = { ...state.byGenre };
      // const genreKey = String(action.genreResults.genreId);

      // if (Object.keys(current).includes(genreKey)) {
      //   current[genreKey] = { ...current[genreKey], page: action.genreResults.page, results: [...current[genreKey].results, ...action.genreResults.results] };
      //   return {
      //     ...state, byGenre: { ...current }, loadingByGenre: false, errorByGenre: null,
      //   };
      // }
      // return {
      //   ...state,
      //   byGenre: {
      //     ...current,
      //     genreKey: {
      //       page: action.genreResults.page, results: action.genreResults.results, total_results: action.genreResults.total_results, total_pages: action.genreResults.total_pages,
      //     },
      //   },
      //   loadingByGenre: false,
      //   errorByGenre: null,
      // };
      return {
        ...state, byGenre: action.genreResults, loadingByGenre: false, errorByGenre: false,
      };
    case Types.FETCH_BY_GENRE:
      return {
        ...state, loadingByGenre: true, errorByGenre: false,
      };
    case Types.FAILED_BY_GENRE:
      return {
        ...state, loadingByGenre: false, errorByGenre: action.error,
      };
    default:
      return state;
  }
};

export default MoviesReducer;
