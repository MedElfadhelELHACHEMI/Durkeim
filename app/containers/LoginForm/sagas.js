// import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { call, put, take, takeLatest, cancel, select } from 'redux-saga/effects';
import setAuthToken, { saveUser } from 'utils/setAuthToken';
import { USER_AUTHED } from 'containers/App/constants';
import { userAuth } from '../App/actions';
import { LoginPending, LoginSuccess, LoginFailure } from './actions';
import {
  LOGIN,
} from './constants';
import makeSelectLoginForm from './selectors';

function* loginAsync() {
  const LoginForm = yield select(makeSelectLoginForm());
  const { Email, password } = LoginForm;

  console.log(Email, password);
  try {
    console.log('attempting to log in');
    yield put(LoginPending());
    const response = yield call(axios.post, 'https://fathomless-badlands-82393.herokuapp.com/api/auth/login', { email: Email, password });
    yield put(LoginSuccess(response.data));
    setAuthToken(response.data.token);
    const { user_info, general_info, interests } = response.data;
    const user = { user_info, general_info, interests };
    saveUser(user);
    yield put(userAuth(user));
    yield put(push('/'));
  } catch (e) {
    console.log('request failed OOOOOOOOOOO', e);
    yield put(LoginFailure(e));
  }
}

// Individual exports for testing
function* watchLogin() {
  console.log('watching login');
  const watcher = yield takeLatest(LOGIN, loginAsync);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchLogin,
];
