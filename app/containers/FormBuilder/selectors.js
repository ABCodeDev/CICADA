import { createSelector } from 'reselect';

/**
 * Direct selector to the formBuilder state domain
 */
const selectFormBuilderDomain = () => (state) => state.get('formBuilder');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FormBuilder
 */

const makeSelectFormBuilder = () => createSelector(
  selectFormBuilderDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFormBuilder;
export {
  selectFormBuilderDomain,
};
