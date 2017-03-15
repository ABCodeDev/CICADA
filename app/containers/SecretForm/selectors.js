import { createSelector } from 'reselect';

/**
 * Direct selector to the secretForm state domain
 */
const selectSecretFormDomain = () => (state) => state.get('secretForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SecretForm
 */

const makeSelectSecretForm = () => createSelector(
  selectSecretFormDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSecretForm;
export {
  selectSecretFormDomain,
};
