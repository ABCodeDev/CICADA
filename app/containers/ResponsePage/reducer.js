/*
 *
 * ResponsePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  RESPONSE_FETCH_FAILED,
  RESPONSE_FETCH_SUCCESS,
  RESPONSE_FETCH_ACTION,
} from './constants';

const initialState = fromJS({});

function responsePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case RESPONSE_FETCH_ACTION:
      return state;
    case RESPONSE_FETCH_SUCCESS:
      return state.set('response_received', true).set('data', action.payload.data);
    case RESPONSE_FETCH_FAILED:
      return state.set('response_failed', true);
    default:
      return state;
  }
}

export default responsePageReducer;
