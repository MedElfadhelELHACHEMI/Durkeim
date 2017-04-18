/*
 *
 * LoginForm actions
 *
 */

import {
  LOGIN,
  LOGIN_CHANGE_EMAIL,
  LOGIN_CHANGE_PASSWORD,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

export function changeEmail(email) {
  return {
    type: LOGIN_CHANGE_EMAIL,
    email,
  };
}
export function changePassword(password) {
  return {
    type: LOGIN_CHANGE_PASSWORD,
    password,
  };
}

export function Login() {
  return {
    type: LOGIN,
  };
}
export function LoginPending() {
  console.log('pending');
  return {
    type: LOGIN_PENDING,
  };
}
export function LoginSuccess(data) {
  console.log('successful login',data);
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
export function LoginFailure(error) {
  console.log('HHHHHHHHHHHHHHHHHH', error.response.data);
  return {
    type: LOGIN_FAILURE,
    error,
  };
}
