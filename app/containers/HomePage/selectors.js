import { createSelector } from 'reselect';

/**
 * Direct selector to the loginForm state domain
 */
const selectHomeDomain = () => (state) => state.get('homepage');
const makeSelectSignal = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.toJS('Signal')
);
const makeSelectTags = () => createSelector(
  selectHomeDomain(),
  (homeState) => homeState.get('tags')
);

export default selectHomeDomain;
export {
  makeSelectSignal,
  makeSelectTags,
};
