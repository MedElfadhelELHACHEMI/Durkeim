// import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { call, put, take, takeLatest, cancel, takeEvery, select } from 'redux-saga/effects';
import { SignalActions } from './actions';
import {
  SENDING_SIGNAL,
  SIGNAL_TEXT_CHANGE,
  CREATING_SIGNAL_BLUR,
} from './constants';
import selectHomeDomain, { makeSelectSignal, makeSelectTags } from './selectors';
// Workers
function* SendSignalAsync() {
  const signalText = yield select(makeSelectSignal());
  try {
    console.log('attempting to Send Signal');
    yield put(SignalActions.sendingSignalPending());
    const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', { signaltext: signalText });
    yield put(SignalActions.sendingSignalSuccessful(response.data));
  } catch (e) {
    console.log('request failed OOOOOOOOOOO', e);
    yield put(SignalActions.sendingSignalFailed(e));
  }
}
function* addTag(action) {
  const tags = yield select(makeSelectTags());
  const Input = action.text.toLowerCase().split(/\s+/);
  const currentTags = [];
  tags.map((tag) => {
    const current = tag.toLowerCase();
    if (Input.indexOf(current) !== -1 && currentTags.indexOf(current) === -1) {
      currentTags.push(tag);
    }
  });
  yield put(SignalActions.addTags(currentTags));
}


// Watchers
// Individual exports for testing
function* watchSignal() {
  console.log('watching signal');
  const watcher = yield takeLatest(SENDING_SIGNAL, SendSignalAsync);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* watchTags() {
  console.log('watching tags');
  const watcher = yield takeEvery(SIGNAL_TEXT_CHANGE, addTag);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
// Main Saga
// All sagas to be loaded
export default [
  watchSignal,
  watchTags,
];
