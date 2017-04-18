/*
 *
 * NewsFeed reducer
 *
 */

import { fromJS } from 'immutable';
import { isAuthenticated, getUser } from 'utils/setAuthToken';
import { USER_AUTHED, USER_LOGGEDOUT } from './constants';

const initialState = fromJS({
  user: {
    isLoggedIn: isAuthenticated(),
    user_info: isAuthenticated() ?
      getUser().user_info :
    {
      profile_img: '',
      first_name: '',
      last_name: '',
      occupation: '',
      company: '',
      email: '',
      bio: '',
      social: [],
    },
    interests: isAuthenticated() ?
      getUser().interests :
      [],
    general_info: isAuthenticated() ?
      getUser().general_info :
    {
      education: [],
      experience: [],
    },
  },
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case USER_AUTHED: return state
      .setIn(['user', 'isLoggedIn'], isAuthenticated())
      .setIn(['user', 'user_info'], action.user.user_info)
      .setIn(['user', 'interests'], action.user.interests)
      .setIn(['user', 'general_info'], action.user.general_info);
    case USER_LOGGEDOUT: return state.setIn(['user', 'isLoggedIn'], false);
    default:
      return state;
  }
}

export default AppReducer;
