import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { call, put, take, takeLatest, cancel, takeEvery, select } from 'redux-saga/effects';
import { getPendingSignalsPending, getPendingSignalsSuccess, getPendingSignalsFailed } from './actions';
import { GET_PENDING_SIGNALS } from './constants';

// Workers
export function* getSignalsAsync() {
  try {
    console.log('attempting to fetch Signals');
    yield put(getPendingSignalsPending());
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    console.log('response', response.data);
    yield put(getPendingSignalsSuccess(response.data));
  } catch (e) {
    console.log('request failed OOOOOOOOOOO', e);
    yield put(getPendingSignalsFailed(e));
  }
}

// Watchers
// Individual exports for testing
export function* watchGetSignal() {
  console.log('watching init');
  const watcher = yield takeLatest(GET_PENDING_SIGNALS, getSignalsAsync);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

// All sagas to be loaded
export default [
  defaultSaga,
  watchGetSignal,
];
