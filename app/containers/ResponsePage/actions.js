/*
 *
 * ResponsePage actions
 *
 */

import {
  DEFAULT_ACTION,
  RESPONSE_FETCH_ACTION,
  RESPONSE_FETCH_FAILED,
  RESPONSE_FETCH_SUCCESS
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function responseFetchAction(token) {
  return {
    type: RESPONSE_FETCH_ACTION,
    payload: {
      token: token,
    }
  };
}

export function responseFetchSuccess(data) {
  return {
    type: RESPONSE_FETCH_SUCCESS,
    payload: {
      data: data,
    }
  };
}

export function responseFetchFailed(message) {
  return {
    type: RESPONSE_FETCH_FAILED,
    payload: {
      message:message,
    }
  };
}

