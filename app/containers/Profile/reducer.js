/*
 *
 * Profile reducer
 *
 */

import { fromJS } from 'immutable';


import {
  DEFAULT_ACTION,
  INIT_PROFILE,
  EDIT_PROFILE,
  SAVE_PROFILE,
  EDIT_PROFILE_FIRST,
  EDIT_PROFILE_LAST,
  EDIT_PROFILE_OCCUPATION,
  EDIT_PROFILE_COMPANY,
} from './constants';
const initialState = fromJS({
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
    case INIT_PROFILE: return state
      .set('user_info', action.user.user_info)
      .set('interests', action.user.interests)
      .set('general_info', action.user.general_info);
    case EDIT_PROFILE: return state.set('isEditing', true);
    case SAVE_PROFILE: return state.set('isEditing', false);
    case EDIT_PROFILE_FIRST: return state.setIn(['user_info', 'first_name'], action.first);
    case EDIT_PROFILE_LAST: return state.setIn(['user_info', 'last_name'], action.last);
    default:
      return state;
  }
}

export default profileReducer;
