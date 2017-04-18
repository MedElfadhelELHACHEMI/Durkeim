/**
 * Created by BoB on 4/18/2017.
 */

import {
  USER_AUTHED,
  USER_LOGGEDOUT,
  APP_INIT,
} from './constants';

export function userAuth(user) {
  return {
    type: USER_AUTHED,
    user,
  };
}
export function appInit(user) {
  return {
    type: APP_INIT,
    user,
  };
}