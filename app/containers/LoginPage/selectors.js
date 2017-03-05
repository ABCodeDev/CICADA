import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = () => (state) => state.get('loginPage');

/**
 * Other specific selectors
 */

export const selectLoginFailed =()=> (state) => state.failedAttempt;

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
    selectLoginPageDomain(),
    (substate) => substate.toJS(),
);


export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
};
