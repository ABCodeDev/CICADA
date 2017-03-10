import { createSelector } from 'reselect';

/**
 * Direct selector to the editResponsePage state domain
 */
const selectEditResponsePageDomain = () => (state) => state.get('editResponsePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditResponsePage
 */

const makeSelectEditResponsePage = () => createSelector(
  selectEditResponsePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEditResponsePage;
export {
  selectEditResponsePageDomain,
};
