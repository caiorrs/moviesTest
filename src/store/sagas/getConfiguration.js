import { takeLatest, retry, put } from 'redux-saga/effects';
import { Types as AppTypes, setConfiguration, failedConfiguration } from '../ducks/app';
import { API } from '~/services';

const SECOND = 1000;

function* getConfiguration() {
  try {
    console.log('[getConfiguration] getConfiguration');
    const response = yield retry(3, 1 * SECOND, API.getAPIConfiguration);
    const configuration = response.data;
    console.log('[getConfiguration] Data', response.data);
    yield put(setConfiguration(configuration));
  } catch (error) {
    console.log('[getConfiguration] Error -', error?.message);
    yield put(failedConfiguration(error));
  }
}

export function* getConfigurationSaga() {
  yield takeLatest(AppTypes.FETCH_CONFIGURATION, getConfiguration);
}

export default getConfigurationSaga;
