import { take, call, put, select,fork,cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import loginSuccess from './actions';
import { routerMiddleware, push } from 'react-router-redux'

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
  yield cancel(loginWatcher);
}

function* loginSaga(){
  yield takeLatest("LOGIN_ACTION",Attemptlogin);
  console.log("attempt login");
}

function* Attemptlogin(){
  console.log("attempt login");
  const requestURL = `${API_BASE}${API_AUTH_LOGIN}`;

  let data = yield take("LOGIN_ACTION").payload;
  const loginCall = yield call(request, requestURL, {
    method: 'POST',
    headers: {

    },
    body:data
  });

  if (!loginCall.err) {
    const fetchUserURL = `${API_BASE}${API_AUTH_USER}`

    const fetcUserProfileCall = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization:"Token "+loginCall.data.key,
      }
    });

    if(!fetchUserProfileCall.err){
      console.log(fetcUserProfileCall.data);
      yield put(loginSuccess(fetcUserProfileCall.data,"Token "+loginCall.data.key));
    }else{
      yield put ({type: "LOGIN_FAILED"});
    }

  }else{
    yield put ({type: "LOGIN_FAILED"});
  }
}

