/*
 *
 * ProfileForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
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
});

function profileFormReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default profileFormReducer;
