import { createSelector } from 'reselect';

/**
 * Direct selector to the profileForm state domain
 */
const selectProfileFormDomain = () => (state) => state.get('profileForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfileForm
 */

const makeSelectProfileForm = () => createSelector(
  selectProfileFormDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProfileForm;
export {
  selectProfileFormDomain,
};
