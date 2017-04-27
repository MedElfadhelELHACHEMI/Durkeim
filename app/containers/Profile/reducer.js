/*
 *
 * Profile reducer
 *
 */

import { fromJS } from 'immutable';


import {
  DEFAULT_ACTION,
  INIT_PROFILE,
  LOADING_PROFILE,
  LOADING_PROFILE_SUCCESS,
  EDIT_PROFILE,
  SAVE_PROFILE,
  EDIT_PROFILE_USER_INFO,
  EDIT_PROFILE_INTERESTS,
  EDIT_PROFILE_GENERAL_INFO,
} from './constants';
const initialState = fromJS({
  isLoading: false,
  isEditing: false,
  user_info: {
    profile_img: '',
    first_name: '',
    last_name: '',
    occupation: '',
    company: '',
    email: '',
    bio: '',
    social: [],
  },
  interests: [],
  general_info: {
    education: [],
    experience: [],
  },
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOADING_PROFILE: return state.set('isLoading', true);
    case LOADING_PROFILE_SUCCESS: return state
      .set('isLoading', false)
      .set('user_info', action.user.user_info)
      .set('interests', action.user.interests)
      .set('general_info', action.user.general_info);
    case EDIT_PROFILE: return state.set('isEditing', true);
    case SAVE_PROFILE: return state.set('isEditing', false);
    case EDIT_PROFILE_USER_INFO: return state.setIn(['user_info', action.name], action.value);
    case EDIT_PROFILE_INTERESTS: return state.set('interests', action.interests);
    case EDIT_PROFILE_GENERAL_INFO: return state.set('general_info', action.generalInfo);
    default:
      return state;
  }
}

export default profileReducer;
