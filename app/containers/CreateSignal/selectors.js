import { createSelector } from 'reselect';

/**
 * Direct selector to the createSignal state domain
 */
const selectCreateSignalDomain = () => (state) => state.get('createSignal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateSignal
 */

const makeSelectCreateSignal = () => createSelector(
  selectCreateSignalDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCreateSignal;
export {
  selectCreateSignalDomain,
};
