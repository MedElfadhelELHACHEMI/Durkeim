/*
 *
 * SignupForm actions
 *
 */

import {
  SIGNUP,
  PRE_SIGNUP,
  SIGNUP_CHANGE_EMAIL,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_PRE_FAILURE,
  SIGNUP_PRE_SUCCESS,
  SIGNUP_CHANGE_FORM,
} from './constants';

export function changeEmail(email) {
  return {
    type: SIGNUP_CHANGE_EMAIL,
    email,
  };
}
export function changeForm(form) {
  return {
    type: SIGNUP_CHANGE_FORM,
    form,
  };
}

export function Signup() {
  return {
    type: SIGNUP,
  };
}
export function preSignup() {
  return {
    type: PRE_SIGNUP,
  };
}
export function SignupPending() {
  console.log(' signup  pending');
  return {
    type: SIGNUP_PENDING,
  };
}
export function SignupPreSuccess(data) {
  console.log('successful presignup', data);
  return {
    type: SIGNUP_PRE_SUCCESS,
    data,
  };
}
export function SignupPreFailure(error) {
  console.log('preFail', error.data);
  return {
    type: SIGNUP_PRE_FAILURE,
    error,
  };
}
export function SignupSuccess(data) {
  console.log('successful signup', data);
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
}
export function SignupFailure(error) {
  console.log('HHHHHHHHHHHHHHHHHH', error.data);
  return {
    type: SIGNUP_FAILURE,
    error,
  };
}