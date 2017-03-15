// import { take, call, put, select } from 'redux-saga/effects';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { responseFetchSuccess, responseFetchFailed } from './actions';
import request from 'utils/request';

import {
  RESPONSE_FETCH_ACTION,
  API_RESPONSE_FETCH
} from './constants'

import {
  API_BASE,
} from 'containers/App/constants';

function* responsePageSaga(){
  console.log("page saga");
  const responseWatcher = yield fork(responseSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(responseWatcher);
}

function* responseSaga(){
  yield takeLatest(RESPONSE_FETCH_ACTION, responseFetch);
}

function* responseFetch(action) {
  console.log("fetch saga");
  const requestURL = `${API_BASE}${API_RESPONSE_FETCH}`;
  let token = action.payload.token;
  const responseFetchCall = yield call(request, requestURL, {
    method: 'GET',
    headers: {
      Authorization:token
    }
  });

  if (!responseFetchCall.err) {
    yield put(responseFetchSuccess(responseFetchCall.data));
  } else {
    yield put(responseFetchFailed("Failed to Fetch Response"));
  }
}

export default [
  responsePageSaga,
];
