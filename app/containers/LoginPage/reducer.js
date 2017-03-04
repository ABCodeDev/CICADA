/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_ACTION:
      return Object.assign(state,{loggedIn:true});
    default:
      return state;
  }
}

export default loginPageReducer;
