// makeSelectLocationState expects a plain JS object for the routing state
import { createSelector } from 'reselect';

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  makeSelectLocationState,
};

const selectAppDomain = () => (state) => state.get('App');
const makeSelectApp = () => createSelector(
  selectAppDomain(),
  (substate) => substate.toJS()
);

export default makeSelectApp;
export {
  selectAppDomain,
};

/**
 * Direct selector to the user state domain
 */
