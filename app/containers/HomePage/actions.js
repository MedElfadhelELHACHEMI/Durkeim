/**
 * Created by BoB on 4/9/2017.
 */
import {
  DEFAULT_ACTION,
  CREATING_SIGNAL_FOCUS,
  CREATING_SIGNAL_BLUR,
  SIGNAL_TEXT_CHANGE,
  SENDING_SIGNAL_PENDING,
  SENDING_SIGNAL_SUCCESSFUL,
  SENDING_SIGNAL_FAILED,
  SENDING_SIGNAL,
  SIGNAL_ADD_TAGS,
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
function addTags(tags) {
  return {
    type: SIGNAL_ADD_TAGS,
    tags,
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
  console.log('suceess')
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
export const SignalActions = {
  creatingSignalFocus,
  creatingSignalBlur,
  sendingSignal,
  sendingSignalPending,
  sendingSignalSuccessful,
  sendingSignalFailed,
  changeSignalText,
  addTags,
};
