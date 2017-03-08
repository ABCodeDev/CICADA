import { createSelector } from 'reselect';

/**
 * Direct selector to the responsePage state domain
 */
const selectResponsePageDomain = () => (state) => state.get('responsePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ResponsePage
 */

const makeSelectResponsePage = () => createSelector(
  selectResponsePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectResponsePage;
export {
  selectResponsePageDomain,
};
