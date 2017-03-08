import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import {registerAuthSuccess, registerAuthFailed} from './actions';
import request from 'utils/request';
var token = "";

import {
  REGISTER_AUTH_REQUEST,
  REGISTER_PROFILE_REQUEST,
  PROFILE_REGISTRATION,
} from './constants';

import {
  API_BASE,
  API_AUTH_REGISTRATION,
} from 'containers/App/constants';

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
    yield put(registerAuthSuccess());
  }else{
    yield put(registerAuthFailed("Register Failed"));
  }
}

function* attemptRegisterProfile(action){
  console.log("attempt register profile");
  const requestURL = `${API_BASE}${PROFILE_REGISTRATION}`;
  let dataForm = new FormData();
  //todo user fk
  dataForm.append('bio',action.payload.profile.bio);
  dataForm.append('ktp_no',action.payload.profile.ktp_no);
  dataForm.append('npwp_no',action.payload.profile.npwp_no);
  dataForm.append('phone_no', action.payload.profile.phone_no);
  dataForm.append('birth_date', action.payload.profile.birth_date);
  //todo organization fk
  //todo access fk

  //todo sesuaikan dengan comment di bawah
  // const registerCall = yield call(request, requestURL, {
  //   method: 'POST',
  //   headers: {},
  //   body:dataForm
  // });

  // if (!registerCall.err) {
  //   token = "Token " + registerCall.data.key;
  // }else{
  //   yield put(registerFailed("Register Failed"));
  // }
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
