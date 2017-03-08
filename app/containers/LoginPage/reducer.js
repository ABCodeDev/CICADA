/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_ACTION,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './constants';

const initialState = fromJS({
  failedAttempt:false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_ACTION:
      return state;
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_FAILED:
      return state.set("failedAttempt",true);
    default:
      return state;
  }
}

export default loginPageReducer;
