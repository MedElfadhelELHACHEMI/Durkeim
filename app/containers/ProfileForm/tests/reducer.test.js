
import { fromJS } from 'immutable';
import profileFormReducer from '../reducer';

describe('profileFormReducer', () => {
  it('returns the initial state', () => {
    expect(profileFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
