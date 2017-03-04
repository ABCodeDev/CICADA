import { take, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  API_BASE,
  API_USER_PROFILE,
} from 'containers/App/constants';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

// All sagas to be loaded
export default [
  defaultSaga,
  LoginSaga,
];

function* LoginPageSaga(){

}

function* loginSaga(){
  yield takeLatest("LOGIN_ACTION",fetchLoginData);
}

function* fetchLoginData(){
  const requestURL = `${API_BASE}
  const loginCall = yield call(request, requestURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: {

    }
  });

  if (!fetchServerTimeCall.err) {

  }
}

