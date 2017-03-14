/*
 *
 * NotificationPage actions
 *
 */

import {
  DEFAULT_ACTION,
  NOTIFICATION_FETCH_ACTION,
  NOTIFICATION_FETCH_FAILED,
  NOTIFICATION_FETCH_SUCCESS
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function notificationFetchAction(token) {
  return {
    type: NOTIFICATION_FETCH_ACTION,
    payload: {
      token: token,
    }
  };
}

export function notificationFetchSuccess(data) {
  return {
    type: NOTIFICATION_FETCH_SUCCESS,
    payload: {
      data: data,
    }
  };
}

export function notificationFetchFailed(message) {
  return {
    type: NOTIFICATION_FETCH_FAILED,
    payload: {
      message:message,
    }
  };
}
