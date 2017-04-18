import { createSelector } from 'reselect';

/**
 * Direct selector to the loginForm state domain
 */
const selectLoginFormDomain = () => (state) => state.get('loginForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginForm
 */

const makeSelectLoginForm = () => createSelector(
  selectLoginFormDomain(),
  (substate) => substate.toJS()
);
const makeSelectEmail = () => createSelector(
  selectLoginFormDomain,
  (substate) => substate.get('Email')
);
const makeSelectPassword = () => createSelector(
  selectLoginFormDomain,
  (substate) => substate.get('password')
);
export default makeSelectLoginForm;
export {
  selectLoginFormDomain,
  makeSelectPassword,
  makeSelectEmail,
};
