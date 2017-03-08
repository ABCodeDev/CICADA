/*
 *
 * Global App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER_PROFILE
} from './constants';

const initialState = fromJS({
  user:{}
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return state.set('user',{userProfile:action.payload.userProfile,token:action.payload.token});
    default:
      return state;
  }
}

export default appReducer;
