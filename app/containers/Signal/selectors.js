import { createSelector } from 'reselect';

/**
 * Direct selector to the signal state domain
 */
const selectSignalDomain = () => (state) => state.get('signal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Signal
 */

const makeSelectSignal = () => createSelector(
  selectSignalDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSignal;
export {
  selectSignalDomain,
};
