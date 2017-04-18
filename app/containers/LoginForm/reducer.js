/*
 *
 * LoginForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_CHANGE_EMAIL,
  LOGIN_CHANGE_PASSWORD,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

const initialState = fromJS({
  Email: '',
  password: '',
  isLoggingin: false,
  LoginRequest: {
    response: null,
    error: null,
  },
});

function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_CHANGE_EMAIL : return state.set('Email', action.email);
    case LOGIN_CHANGE_PASSWORD: return state.set('password', action.password);
    case LOGIN_PENDING : return state.set('isLoggingin', true);
    case LOGIN_SUCCESS :
      return state
        .set('isLoggingin', false)
        .setIn(['LoginRequest', 'response'], action.data);
    case LOGIN_FAILURE :
      return state
        .set('isLoggingin', false)
        .setIn(['LoginRequest', 'error'], action.error);
    default:
      return state;
  }
}

export default loginFormReducer;
