/*
 *
 * Global App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER_PROFILE,
  LOG_OUT
} from './constants';

const initialState = fromJS({
  user:{},
  loggedIn:false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return state.set('user',{userProfile:action.payload.userProfile,token:action.payload.token}).set("loggedIn",true);
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}

export default appReducer;
