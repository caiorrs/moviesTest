import { all } from 'redux-saga/effects';
import getConfigurationSaga from './getConfiguration';
import getGenresSaga from './getGenres';
import getTrendingSaga from './getTrending';

function* rootSaga() {
  yield all([
    getConfigurationSaga(),
    getGenresSaga(),
    getTrendingSaga(),
  ]);
}

export default rootSaga;
