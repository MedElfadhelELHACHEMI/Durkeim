
import { fromJS } from 'immutable';
import createSignalReducer from '../reducer';

describe('createSignalReducer', () => {
  it('returns the initial state', () => {
    expect(createSignalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
