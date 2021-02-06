import { all } from 'redux-saga/effects';
import getConfigurationSaga from './getConfiguration';

function* rootSaga() {
  yield all([
    getConfigurationSaga(),
  ]);
}

export default rootSaga;
