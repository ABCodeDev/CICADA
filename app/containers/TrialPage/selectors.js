import { createSelector } from 'reselect';

/**
 * Direct selector to the trialPage state domain
 */
const selectTrialPageDomain = () => (state) => state.get('trialPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TrialPage
 */

const makeSelectTrialPage = () => createSelector(
  selectTrialPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTrialPage;
export {
  selectTrialPageDomain,
};
