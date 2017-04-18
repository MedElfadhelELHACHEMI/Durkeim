
import { fromJS } from 'immutable';
import signalReducer from '../reducer';

describe('signalReducer', () => {
  it('returns the initial state', () => {
    expect(signalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
