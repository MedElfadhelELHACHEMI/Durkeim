/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  user: 'user is connected',
  LoginInstance: {
    Email: null,
    password: null,
    isLoggingin: false,
    LoginRequest: {
      response: null,
      error: null,
    },
  },
  SignUpInstance: {
    Email: null,
    isSigningUp: false,
    SignUpRequest: {
      response: null,
      error: null,
    },
  },
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('user', 'reduced');
    default:
      return state;
  }
}

export default userReducer;
