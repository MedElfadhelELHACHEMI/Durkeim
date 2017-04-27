/*
 *
 * Profile actions
 *
 */

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

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function initProfile() {
  return {
    type: INIT_PROFILE,
  };
}
export function loadProfile() {
  return {
    type: LOADING_PROFILE,
  };
}
export function loadProfileSuccess(user) {
  return {
    type: LOADING_PROFILE_SUCCESS,
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
export function editProfileUserInfo(name, value) {
  return {
    type: EDIT_PROFILE_USER_INFO,
    name,
    value,
  };
}
export function editProfileInterests(interests) {
  return {
    type: EDIT_PROFILE_INTERESTS,
    interests,
  };
}
export function editProfileGeneralInfo(generalInfo) {
  return {
    type: EDIT_PROFILE_GENERAL_INFO,
    generalInfo,
  };
}
