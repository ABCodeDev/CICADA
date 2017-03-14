import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import {registerAuthSuccess, registerAuthFailed, registerProfileFailed} from './actions';
import request from 'utils/request';
import makeSelectRegisterPage  from './selectors';

import {
  REGISTER_AUTH_REQUEST,
  REGISTER_PROFILE_REQUEST,
  PROFILE_REGISTRATION,
} from './constants';

import {
  API_BASE,
  API_AUTH_REGISTRATION,
} from 'containers/App/constants';

var token = "";

function* attemptRegisterAuth(action){
  console.log("attempt register");
  const requestURL = `${API_BASE}${API_AUTH_REGISTRATION}`;
  let dataForm = new FormData();
  dataForm.append('username',action.payload.auth.username);
  dataForm.append('email',action.payload.auth.email);
  dataForm.append('password1',action.payload.auth.password);
  dataForm.append('password2', action.payload.auth.password2);
  const registerCall = yield call(request, requestURL, {
    method: 'POST',
    headers: {},
    body:dataForm
  });

  if (!registerCall.err) {
    token = "Token " + registerCall.data.key;
    console.log(token)
    yield put(registerAuthSuccess(token));
  }else{
    yield put(registerAuthFailed("Register Failed"));
  }
}

function* attemptRegisterProfile(action){
  console.log("attempt register profile");
  const requestURL = `${API_BASE}${PROFILE_REGISTRATION}`;
  console.log(token);

  let obj = {
    bio:action.payload.profile.bio,
    ktp_no:action.payload.profile.ktp_no,
    npwp_no:action.payload.profile.npwp_no,
    phone_no:action.payload.profile.phone_no,
    birth_date:action.payload.profile.birth_date
  }

  const registerCall = yield call(request, requestURL, {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  });

  if (!registerCall.err) {
    yield put (push('/'));
  }else{
    yield put(registerProfileFailed("Register Failed"));
  }
}

function* registerPageSaga(){
  const registerAuthWatcher = yield fork(registerAuthSaga);
  const registerProfileWatcher = yield fork(registerProfileSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(registerAuthWatcher);
  yield cancel(registerProfileWatcher);
}

function* registerAuthSaga(){
  console.log("register auth saga");
  yield takeLatest(REGISTER_AUTH_REQUEST, attemptRegisterAuth);
}

function* registerProfileSaga(){
  console.log("register profile saga");
  yield takeLatest(REGISTER_PROFILE_REQUEST, attemptRegisterProfile);
}

// All sagas to be loaded
export default [
  registerPageSaga,
];
