import { takeLatest, retry, put } from 'redux-saga/effects';
import { Types as MoviesTypes, setTrending, failedTrending } from '../ducks/movies';
import { API } from '~/services';

const SECOND = 1000;

function* getTrending() {
  try {
    console.log('[getTrending] getTrending');
    const response = yield retry(3, 1 * SECOND, API.getTrending, { media_type: 'movie', time_window: 'day' });
    const configuration = response.data;
    console.log('[getTrending] Data', response.data);
    yield put(setTrending(configuration));
  } catch (error) {
    console.log('[getTrending] Error -', error?.message);
    yield put(failedTrending(error));
  }
}

export function* getTrendingSaga() {
  yield takeLatest(MoviesTypes.FETCH_TRENDING, getTrending);
}

export default getTrendingSaga;
