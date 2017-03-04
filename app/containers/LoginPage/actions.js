/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_SUCCESS,
} from './constants';

import LOGIN_ACTION from '../App/constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginAction(){
  return {
    type: LOGIN_ACTION
  };
}

export  function loginSuccess(userData){
  return{
    type: LOGIN_SUCCESS,
    payload: {
      user : userData
    }
  }
}
