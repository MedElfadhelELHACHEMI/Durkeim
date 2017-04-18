/*
 *
 * SignupForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP_CHANGE_EMAIL,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_PRE_FAILURE,
  SIGNUP_PRE_SUCCESS,
  SIGNUP_CHANGE_FORM,
} from './constants';

const initialState = fromJS({
  Email: '',
  isSigningUp: false,
  isCompleting: false,
  CompletingInfo: {
    password: 'Azerty123',
    user_info: {
      profile_img: '',
      first_name: '',
      last_name: '',
      occupation: '',
      company: '',
      email: '',
      bio: '',
      social: [{ twitter: '@zebbi' }],
    },

    general_info: {
      education: [{ esprit: 'bs in computer science' }],
      experience: [{ durkeim: 'CTO' }],
    },
  },
  SignUpRequest: {
    response: null,
    error: null,
  },
});

function signupFormReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_CHANGE_EMAIL : return state.set('Email', action.email);
    case SIGNUP_PENDING : return state.set('isSigningUp', true);
    case SIGNUP_PRE_SUCCESS :
      return state
      .set('isSigningUp', false)
      .set('isCompleting', true)
      .mergeDeepIn(['CompletingInfo'], action.data);
    case SIGNUP_PRE_FAILURE :
      return state
        .set('isSigningUp', false)
        .setIn(['SignUpRequest', 'error'], action.error);
    case SIGNUP_SUCCESS :
      return state
        .set('isSigningUp', false)
        .set('isCompleting', true)
        .setIn(['SignUpRequest', 'response'], action.data);
    case SIGNUP_FAILURE :
      return state
        .set('isSigningUp', false)
        .setIn(['SignUpRequest', 'error'], action.error);
    case SIGNUP_CHANGE_FORM :
      return state.setIn(['CompletingInfo', 'user_info'], action.form);
    default:
      return state;
  }
}

export default signupFormReducer;
