import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { call, put, take, takeLatest, cancel, select } from 'redux-saga/effects';
import { getUser, isAuthenticated } from 'utils/setAuthToken';
import { INIT_PROFILE } from './constants';
import { loadProfile, loadProfileSuccess } from './actions';
/*
Workers
 */
function* initProfile() {
  // loading profile
  try {
    console.log('attempting to load profile');
    yield put(loadProfile());
    const response = yield call(axios.get, 'https://fathomless-badlands-82393.herokuapp.com/api/user/me');
    yield put(loadProfileSuccess(response.data));
  } catch (e) {
    console.log('request failed OOOOOOOOOOO', e);
    if (isAuthenticated()) {
      console.log('loading user from localstorage');
      const user = getUser();
      yield put(loadProfileSuccess(user));
    }
  }
}
/*
Watchers
 */
// Individual exports for testing
export function* initProfileWatcher() {
  // See example in containers/HomePage/sagas.js
  const watcher = yield takeLatest(INIT_PROFILE, initProfile);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  initProfileWatcher,
];
