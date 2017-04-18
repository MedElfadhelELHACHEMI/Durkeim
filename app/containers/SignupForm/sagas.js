// import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { call, put, take, takeLatest, cancel, select } from 'redux-saga/effects';
import setAuthToken from 'utils/setAuthToken';
import { USER_AUTHED } from 'containers/App/constants';
import { SignupPending, SignupPreSuccess, SignupPreFailure, SignupSuccess, SignupFailure } from './actions';
import { SIGNUP, PRE_SIGNUP } from './constants';
import { makeSelectSignupForm } from './selectors';


// Workers
export function* SignupAsync() {
  const { CompletingInfo } = yield select(makeSelectSignupForm());
  console.log(CompletingInfo);
  try {
    yield put(SignupPending());
    const response = yield call(axios.post, 'https://fathomless-badlands-82393.herokuapp.com/api/users', CompletingInfo);
    yield put(SignupSuccess(response.data));
    setAuthToken(response.data.token);
    yield put({ type: USER_AUTHED });

  } catch (e) {
    yield put(SignupFailure(e.response));
  }
}

export function* preSignupAsync() {
  const { Email } = yield select(makeSelectSignupForm());
  console.log(Email);
  try {
    yield put(SignupPending());
    const response = yield call(axios.get, `https://fathomless-badlands-82393.herokuapp.com/api/auth/enrichment?email=${Email}`);
    yield put(SignupPreSuccess(response.data));
  } catch (e) {
    yield put(SignupPreFailure(e.response));
  }
}
// Watchers
export function* watchpreSignup() {
  console.log('watching signup');
  const watcher = yield takeLatest(PRE_SIGNUP, preSignupAsync);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
export function* watchSignup() {
  console.log('watching presignup');
  const watcher = yield takeLatest(SIGNUP, SignupAsync);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
// All sagas to be loaded
export default [
  watchpreSignup,
  watchSignup,
];
