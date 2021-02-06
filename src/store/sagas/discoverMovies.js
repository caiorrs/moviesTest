import { takeLatest, retry, put } from 'redux-saga/effects';
import {
  faileByGenre, setByGenre, Types as MoviesTypes,
} from '../ducks/movies';
import { API } from '~/services';

const SECOND = 1000;

function* discoverMovies({ page, language, with_genres }) {
  try {
    console.log('[discoverMovies] discoverMovies');
    const response = yield retry(3, 1 * SECOND, API.getDiscoverMovies, { page, language: language || 'en-US', with_genres });
    const genreMovies = response.data;
    console.log('[discoverMovies] Data', response.data);
    yield put(setByGenre({ ...genreMovies, genre: with_genres[0] }));
  } catch (error) {
    console.log('[discoverMovies] Error -', error?.message);
    yield put(faileByGenre(error));
  }
}

export function* discoverMoviesSaga() {
  yield takeLatest(MoviesTypes.FETCH_BY_GENRE, discoverMovies);
}

export default discoverMoviesSaga;
