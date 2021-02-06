export const Types = {
  FETCH_TRENDING: 'MOVIES/FETCH_TRENDING',
  SET_TRENDING: 'MOVIES/SET_TRENDING',
  FAILED_TRENDING: 'MOVIES/FAILED_TRENDING',
  FETCH_GENRES: 'MOVIES/FETCH_GENRES',
  SET_GENRES: 'MOVIES/SET_GENRES',
  FAILED_GENRES: 'MOVIES/FAILED_GENRES',
};

const initialState = {
  trending: null,
  errorTrending: null,
  loadingTrending: false,
  genres: null,
  errorGenres: null,
  loadingGenres: false,
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
    default:
      return state;
  }
};

export default MoviesReducer;
