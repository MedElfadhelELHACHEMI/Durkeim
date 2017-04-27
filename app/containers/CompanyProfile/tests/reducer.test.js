
import { fromJS } from 'immutable';
import companyProfileReducer from '../reducer';

describe('companyProfileReducer', () => {
  it('returns the initial state', () => {
    expect(companyProfileReducer(undefined, {})).toEqual(fromJS({}));
  });
});
