import { takeLatest, retry, put } from 'redux-saga/effects';
import { failedGenres, setGenres, Types as MoviesTypes } from '../ducks/movies';
import { API } from '~/services';

const SECOND = 1000;

function* getGenres() {
  try {
    console.log('[getGenres] getGenres');
    const response = yield retry(3, 1 * SECOND, API.getMoviesGenresList, {});
    const genres = response.data;
    console.log('[getGenres] Data', response.data?.genres);
    yield put(setGenres(genres));
  } catch (error) {
    console.log('[getGenres] Error -', error?.message);
    yield put(failedGenres(error));
  }
}

export function* getGenresSaga() {
  yield takeLatest(MoviesTypes.FETCH_GENRES, getGenres);
}

export default getGenresSaga;
