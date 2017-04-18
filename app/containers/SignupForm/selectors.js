import { createSelector } from 'reselect';

/**
 * Direct selector to the signupForm state domain
 */
const selectSignupFormDomain = () => (state) => state.get('signupForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignupForm
 */

const makeSelectSignupForm = () => createSelector(
  selectSignupFormDomain(),
  (substate) => substate.toJS()
);
const makeSelectEmail = () => createSelector(
  selectSignupFormDomain,
  (substate) => substate.get('Email')
);

export default selectSignupFormDomain;
export {
  makeSelectSignupForm,
  makeSelectEmail,
};
