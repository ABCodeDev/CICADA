// makeSelectLocationState expects a plain JS object for the routing state
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

const selectGlobalDomain = () => (state) => state.get('global');

/**
 * Other specific selectors
 */

const selectGlobal = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.toJS()
);


const selectGlobal = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.toJS()
);

export default selectGlobal;


export {
  makeSelectLocationState,
};

