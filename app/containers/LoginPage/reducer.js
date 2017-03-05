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

const initialState = fromJS({failedAttempt:false,});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_ACTION:
      console.log("login action");
      let obj_login_action = Object.assign(state,{loginAttempt: action.payload});
      return obj_login_action;
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_FAILED:
      let obj_login_failed = Object.assign(state,{loggedIn:false, failedAttempt: true});
      console.log(obj_login_failed);
      return obj_login_failed;
    default:
      return state;
  }
}

export default loginPageReducer;
