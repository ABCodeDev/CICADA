import { createSelector } from 'reselect';

/**
 * Direct selector to the formBuilderPage state domain
 */
const selectFormBuilderPageDomain = () => (state) => state.get('formBuilderPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FormBuilderPage
 */

const makeSelectFormBuilderPage = () => createSelector(
  selectFormBuilderPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFormBuilderPage;
export {
  selectFormBuilderPageDomain,
};
