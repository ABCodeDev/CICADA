/*
 *
 * NotificationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  NOTIFICATION_FETCH_ACTION,
  NOTIFICATION_FETCH_SUCCESS,
  NOTIFICATION_FETCH_FAILED,
} from './constants';

const initialState = fromJS({
  notification_received:false,
  fetch_failed:false,
  data:"",
});

function notificationPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case NOTIFICATION_FETCH_ACTION:
      return state;
    case NOTIFICATION_FETCH_SUCCESS:
      return state.set('notification_received', true).set('data', action.payload.data);
    case NOTIFICATION_FETCH_FAILED:
      return state.set('fetch_failed', true);
    default:
      return state;
  }
}

export default notificationPageReducer;
