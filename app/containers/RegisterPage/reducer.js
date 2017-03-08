/*
 *
 * RegisterPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REGISTER_AUTH_REQUEST,
  REGISTER_AUTH_SUCCESS,
  REGISTER_PROFILE_REQUEST,
} from './constants';

const initialState = fromJS({
  registerAuthSuccess: false
});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REGISTER_AUTH_REQUEST:
      return state;
    case REGISTER_PROFILE_REQUEST:
      return state;
    case REGISTER_AUTH_SUCCESS:
      return state.set("registerAuthSuccess", true);
    default:
      return state;
  }
}

export default registerPageReducer;
