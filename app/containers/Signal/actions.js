/*
 *
 * Signal actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_PENDING_SIGNALS,
  GET_PENDING_SIGNALS_PENDING,
  GET_PENDING_SIGNALS_SUCCESS,
  GET_PENDING_SIGNALS_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getPendingSignals() {
  return {
    type: GET_PENDING_SIGNALS,
  };
}
export function getPendingSignalsPending() {
  return {
    type: GET_PENDING_SIGNALS_PENDING,
  };
}
export function getPendingSignalsSuccess(payload) {
  return {
    type: GET_PENDING_SIGNALS_SUCCESS,
    payload,
  };
}
export function getPendingSignalsFailed(err) {
  return {
    type: GET_PENDING_SIGNALS_FAILED,
    err,
  };
}