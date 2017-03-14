// import { take, call, put, select } from 'redux-saga/effects';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { notificationFetchSuccess, notificationFetchFailed } from './actions';
import request from 'utils/request';

import {
  NOTIFICATION_FETCH_ACTION,
  API_NOTIFICATION_FETCH
} from './constants'

import {
  API_BASE,
} from 'containers/App/constants';

function* notificationPageSaga(){
  console.log("page saga");
  const notificationWatcher = yield fork(notificationSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(notificationWatcher);
}

function* notificationSaga(){
  yield takeLatest(NOTIFICATION_FETCH_ACTION, notificationFetch);
}

function* notificationFetch(action) {
  console.log("fetch saga");
  const requestURL = `${API_BASE}${API_NOTIFICATION_FETCH}`;
  let token = action.payload.token;
  console.log("haha");
  const notificationFetchCall = yield call(request, requestURL, {
    method: 'GET',
    headers: {
      Authorization:token
    }
  });

  if (!notificationFetchCall.err) {
    yield put(notificationFetchSuccess(notificationFetchCall.data));
  } else {
    yield put(notificationFetchFailed("Failed to Fetch Notification"));
  }
}

export default [
  notificationPageSaga,
];
