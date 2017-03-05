import { take, call, put, select,fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';

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

// All sagas to be loaded
export default [
  defaultSaga,
  LoginPageSaga,
];

function* LoginPageSaga(){
  const loginWatcher = yield fork(loginSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(submitTaskWatcher);
}

function* loginSaga(){
  yield takeLatest("LOGIN_ACTION",Attemptlogin);
}

function* Attemptlogin(){
  const requestURL = `${API_BASE}${API_AUTH_LOGIN}`;

  let data = store.getState().loginAttempt;
  const loginCall = yield call(request, requestURL, {
    method: 'POST',
    headers: {
      Authorization: auth,
    },
    body:data
  });

  if (!loginCall.err) {

    const fetchUserURL = `${API_BASE}${API_AUTH_USER}`

    const fetcUserProfileCall = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: auth,
      },
    });

    if(!fetchUserProfileCall.err){
      yield put({type:"LOGIN_SUCCESS",loggedIn:true,loggedInUser:fetcUserProfileCall.data})
    }else{
      yield put ({type: "LOGIN_FAILED"});
    }

  }else{
    yield put ({type: "LOGIN_FAILED"});
  }
}

