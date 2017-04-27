// import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { call, put, take, takeLatest, cancel, takeEvery, select } from 'redux-saga/effects';
import { SignalActions } from './actions';
import {
  SENDING_SIGNAL,
  SIGNAL_TEXT_CHANGE,
  GET_ALL_TAGS,
} from './constants';
import selectHomeDomain, { makeSelectSignal, makeSelectTags, makeSelectSignalObject } from './selectors';
// Workers
function* SendSignalAsync() {
  const Signal = yield select(makeSelectSignalObject());
  const { tags, text, title } = Signal.toJS();
  const body = text;
  const outSignal = { tags, body, title };
  console.log(outSignal);
  try {
    console.log('attempting to Send Signal');
    yield put(SignalActions.sendingSignalPending());
    const response = yield call(axios.post, 'https://fathomless-badlands-82393.herokuapp.com/api/signals', outSignal);
    yield put(SignalActions.sendingSignalSuccessful(response.data));
  } catch (e) {
    console.log('request failed OOOOOOOOOOO', e);
    yield put(SignalActions.sendingSignalFailed(e));
  }
}
function* addTags(action) {
  const tags = yield select(makeSelectTags());
  const Input = action.text.toLowerCase().split(/\s+/);
  const currentTags = [];
  tags.map((tag) => {
    const current = tag.get('value').toLowerCase();
    if (Input.indexOf(current) !== -1 && currentTags.indexOf(current) === -1) {
      currentTags.push(tag);
    }
  });
  if (currentTags.length > 0) {
    yield put(SignalActions.addTags(currentTags));
  }
}
function* getAllTagsAsync() {
  try {
    const response = yield call(axios.get, 'https://fathomless-badlands-82393.herokuapp.com/api/tags');
    console.log(response);
    yield put(SignalActions.getAllTagsSuccess(response.data));
  } catch (e) {
    console.log('failed fetch request', e);
    yield put(SignalActions.getAllTagsFailed(e));
  }
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
  const watcher = yield takeLatest(SIGNAL_TEXT_CHANGE, addTags);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* watchTagsInit() {
  console.log('watching init');
  const watcher = yield takeLatest(GET_ALL_TAGS, getAllTagsAsync);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
// Main Saga
// All sagas to be loaded
export default [
  watchSignal,
  watchTags,
  watchTagsInit,
];
