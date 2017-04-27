/*
 *
 * Signal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_PENDING_SIGNALS_PENDING,
  GET_PENDING_SIGNALS_SUCCESS,
  GET_PENDING_SIGNALS_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  err: null,
  Signals: [],
});

function signalReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_PENDING_SIGNALS_PENDING:
      return state.set('isLoading', true);
    case GET_PENDING_SIGNALS_SUCCESS:
      return state
        .update('Signals', (arr) => arr.concat(action.payload))
        .set('isLoading', false);
    case GET_PENDING_SIGNALS_FAILED:
      return state
        .set('err', action.err)
        .set('isLoading', false);
    default:
      return state;
  }
}

export default signalReducer;
