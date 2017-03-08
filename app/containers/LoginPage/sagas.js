import { take, call, put, select,fork,cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import {loginSuccess, loginFailed} from './actions';
import request from 'utils/request';
import {setUserProfile} from '../App/action';
var token = "";

import {
  LOGIN_ACTION,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './constants';

import {
  API_BASE,
  API_USER_PROFILE,
  API_AUTH_LOGIN,
  API_AUTH_USER,
} from 'containers/App/constants';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

function* attemptLogin(action){
  console.log("attempt login2");
  const requestURL = `${API_BASE}${API_AUTH_LOGIN}`;
  console.log(action.payload);

  let dataForm = new FormData();
  dataForm.append('username',action.payload.username);
  dataForm.append('password',action.payload.password);

  const loginCall = yield call(request, requestURL, {
  method: 'POST',
  headers: {

  },
  body:dataForm
});

if (!loginCall.err) {
  token = "Token " + loginCall.data.key;
  const fetchUserURL = `${API_BASE}${API_AUTH_USER}`;
  const fetchUserCall = yield call(request, fetchUserURL, {
    method: 'GET',
    headers: {
      Authorization:token
    }

  });

  if(!fetchUserCall.err){
    const pk = fetchUserCall.data.pk;
    const fetchUserProfileURL = `${API_BASE}${API_USER_PROFILE}${pk}`;

    const fetchUserProfileCall = yield call(request, fetchUserProfile, {
      method: 'GET',
      headers: {
        Authorization: token
      },
      body:{

      }
    });

    if(!fetchUserProfileCall.err){
      yield put(loginSuccess());
      yield put(setUserProfile(Object.assign(fetchUserCall.data,fetchUserProfileCall.data),"Token "+loginCall.data.key))
    }else{
      yield put(loginFailed("Fetch User Profile Failed"));
    }
  }

}else{
  yield put(loginFailed("Auth Failed"));
}
}

function* loginPageSaga(){
  const loginWatcher = yield fork(loginSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(loginWatcher);
}

function* loginSaga(){
  yield takeLatest(LOGIN_ACTION, attemptLogin);
}

// All sagas to be loaded
export default [
  loginPageSaga,
];


