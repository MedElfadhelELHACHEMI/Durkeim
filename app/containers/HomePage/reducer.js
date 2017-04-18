/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CREATING_SIGNAL_FOCUS,
  CREATING_SIGNAL_BLUR,
  SIGNAL_TEXT_CHANGE,
  SENDING_SIGNAL_PENDING,
  SENDING_SIGNAL_SUCCESSFUL,
  SENDING_SIGNAL_FAILED,
  SIGNAL_ADD_TAGS,
} from './constants';

const initialState = fromJS({
  tags: ['javascript', 'nodejs'],
  Signal: {
    text: '',
    isCreating: false,
    isSending: false,
    tags: [],
  },
});

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNAL_TEXT_CHANGE:
      return state.setIn(['Signal', 'text'], action.text);
    case CREATING_SIGNAL_FOCUS:
      return state.setIn(['Signal', 'isCreating'], true);
    case CREATING_SIGNAL_BLUR:
      return state.setIn(['Signal', 'isCreating'], false);
    case SENDING_SIGNAL_PENDING:
      return state.setIn(['Signal', 'isSending'], true);
    case SENDING_SIGNAL_SUCCESSFUL:
      return state.setIn(['Signal', 'isSending'], false);
    case SIGNAL_ADD_TAGS:
      return state.setIn(['Signal', 'tags'], action.tags);
    default:
      return state;
  }
}

export default homepageReducer;
/**
 * Created by BoB on 4/3/2017.
 */
