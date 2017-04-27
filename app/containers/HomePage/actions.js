/**
 * Created by BoB on 4/9/2017.
 */
import {
  DEFAULT_ACTION,
  CREATING_SIGNAL_FOCUS,
  CREATING_SIGNAL_BLUR,
  SIGNAL_TEXT_CHANGE,
  SIGNAL_TITLE_CHANGE,
  SENDING_SIGNAL_PENDING,
  SENDING_SIGNAL_SUCCESSFUL,
  SENDING_SIGNAL_FAILED,
  SENDING_SIGNAL,
  SIGNAL_ADD_TAGS,
  SIGNAL_ADD_TAG,
  SETTING_TAGS,
  GET_ALL_TAGS,
  GET_ALL_TAGS_SUCCESS,
  GET_ALL_TAGS_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
function changeSignalText(text) {
  return {
    type: SIGNAL_TEXT_CHANGE,
    text,
  };
}
function changeSignalTitle(title) {
  return {
    type: SIGNAL_TITLE_CHANGE,
    title,
  };
}
function addTags(tags) {
  return {
    type: SIGNAL_ADD_TAGS,
    tags,
  };
}
function addTag(tag) {
  return {
    type: SIGNAL_ADD_TAG,
    tag,
  };
}
function creatingSignalFocus() {
  return {
    type: CREATING_SIGNAL_FOCUS,
  };
}
function creatingSignalBlur() {
  return {
    type: CREATING_SIGNAL_BLUR,
  };
}
function sendingSignal() {
  return {
    type: SENDING_SIGNAL,
  };
}
function sendingSignalPending() {
  return {
    type: SENDING_SIGNAL_PENDING,
  };
}
function sendingSignalSuccessful(data) {
  console.log('suceess', data);
  return {
    type: SENDING_SIGNAL_SUCCESSFUL,
    data,
  };
}
function sendingSignalFailed(error) {
  return {
    type: SENDING_SIGNAL_FAILED,
    error,
  };
}
function settingTags() {
  return {
    type: SETTING_TAGS,
  };
}
export function getAllTagsSuccess(tags) {
  return {
    type: GET_ALL_TAGS_SUCCESS,
    tags,
  };
}
export function getAllTagsFailed(err) {
  return {
    type: GET_ALL_TAGS_FAILED,
    err,
  };
}
export function getAllTags() {
  return {
    type: GET_ALL_TAGS,
  };
}
export const SignalActions = {
  creatingSignalFocus,
  creatingSignalBlur,
  sendingSignal,
  sendingSignalPending,
  sendingSignalSuccessful,
  sendingSignalFailed,
  changeSignalText,
  addTags,
  addTag,
  settingTags,
  changeSignalTitle,
  getAllTags,
  getAllTagsSuccess,
  getAllTagsFailed,
};
