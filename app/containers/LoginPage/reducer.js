/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_ACTION,
} from './constants';

const initialState = fromJS({});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_ACTION:
      return Object.assign(state,{loginAttempt: action.payload})
    case LOGIN_SUCCESS:
      return Object.assign(state,{loggedIn:true,loggedInUser:action.payload.user});
    case LOGIN_FAILED:
      return Object.assign(state,{loggedIn:false});
    default:
      return state;
  }
}

export default loginPageReducer;
