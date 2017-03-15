import { take, call, put, select,fork,cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import {
  FETCH_CURRENT_FORM,
  SEND_CURRENT_RESPONSE
} from './constants';
import {fetchCurrentSuccess,sendCurrentResponseSuccess} from './actions'
import {API_BASE} from '../App/constants'

function* fetchCurrentForm(action){
  console.log("hai");
  const requestURL = `${API_BASE}global_data/`;
  const fetchForm = yield call(request, requestURL, {
    method: 'GET',
    headers: {
    },
  });

  if(!fetchForm.err){
    yield put (fetchCurrentSuccess(fetchForm.data));
  }

}

function* sendCurrentForm(action){
  let data = {
    data:action.response
  }
  const requestURL = `${API_BASE}global_response/`;
  const sendForm = yield call(request, requestURL, {
    method: 'POST',
    headers: {},
    body: JSON.stringify(data)
  });

  if(!sendForm.err){
    yield put (sendCurrentResponseSuccess());
  }

}

function* secretPageSaga(){
  const secretFetchWatcher = yield fork(fetchSecret);
  const secretsendWatcher = yield fork(sendSecret);
  yield take(LOCATION_CHANGE);
  yield cancel(secretFetchWatcher);
  yield cancel(secretsendWatcher);
}

function* fetchSecret(){
  console.log("secret fetch form saga");
  yield takeLatest(FETCH_CURRENT_FORM, fetchCurrentForm);
}

function* sendSecret(){
  console.log("secret send form saga");
  yield takeLatest(SEND_CURRENT_RESPONSE, sendCurrentForm);
}

// All sagas to be loaded
export default [
  secretPageSaga,

];



