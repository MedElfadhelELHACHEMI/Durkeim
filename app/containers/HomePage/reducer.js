/*
 *
 * User reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  CREATING_SIGNAL_FOCUS,
  CREATING_SIGNAL_BLUR,
  SIGNAL_TEXT_CHANGE,
  SENDING_SIGNAL_PENDING,
  SENDING_SIGNAL_SUCCESSFUL,
  SENDING_SIGNAL_FAILED,
  SIGNAL_ADD_TAGS,
  SIGNAL_ADD_TAG,
  SETTING_TAGS,
  SIGNAL_TITLE_CHANGE,
  GET_ALL_TAGS_SUCCESS,
  GET_ALL_TAGS_FAILED,
} from './constants';

const initialState = fromJS({
  generalTags: [],
  Signal: {
    title: '',
    text: '',
    isCreating: false,
    isSettingTags: false,
    isSending: false,
    tags: [],
  },
});

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNAL_TEXT_CHANGE:
      return state.setIn(['Signal', 'text'], action.text);
    case SIGNAL_TITLE_CHANGE:
      return state.setIn(['Signal', 'title'], action.title);
    case CREATING_SIGNAL_FOCUS:
      return state.setIn(['Signal', 'isCreating'], true);
    case CREATING_SIGNAL_BLUR:
      return state.setIn(['Signal', 'isCreating'], false);
    case SENDING_SIGNAL_PENDING:
      return state.setIn(['Signal', 'isSending'], true);
    case SENDING_SIGNAL_SUCCESSFUL:
      return state
        .setIn(['Signal', 'isSending'], false)
        .setIn(['Signal', 'isCreating'], false)
        .setIn(['Signal', 'isSettingTags'], false)
        .setIn(['Signal', 'title'], '')
        .setIn(['Signal', 'text'], '')
        .setIn(['Signal', 'tags'], []);
    case SIGNAL_ADD_TAGS:
      return state.updateIn(['Signal', 'tags'], (arr) => arr.concat(action.tags.filter((tag) => (arr.indexOf(tag) < 0))));
    case SIGNAL_ADD_TAG:
      return state
        .updateIn(['Signal', 'tags'], (arr) => arr.push(action.tag));
    case SETTING_TAGS:
      return state.setIn(['Signal', 'isSettingTags'], true);
    case GET_ALL_TAGS_SUCCESS:
      return state.set('generalTags', fromJS(action.tags));
    case GET_ALL_TAGS_FAILED:
      return state;
    default:
      return state;
  }
}

export default homepageReducer;
/**
 * Created by BoB on 4/3/2017.
 */
