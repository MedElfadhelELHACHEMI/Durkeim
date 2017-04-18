/*
 *
 * Profile actions
 *
 */

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

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function initProfile(user) {
  return {
    type: INIT_PROFILE,
    user,
  };
}
export function editProfile() {
  return {
    type: EDIT_PROFILE,
  };
}
export function saveProfile() {
  return {
    type: SAVE_PROFILE,
  };
}


export function editProfileFirst(first) {
  return {
    type: EDIT_PROFILE_FIRST,
    first,
  };
}
export function editProfileLast(last) {
  return {
    type: EDIT_PROFILE_LAST,
    last,
  };
}