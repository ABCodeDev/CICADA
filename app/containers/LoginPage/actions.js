/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_SUCCESS,
  LOGIN_ACTION,
  LOGIN_FAILED,
} from './constants';


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginAction(username,email,password){
  return {
    type: LOGIN_ACTION,
    payload:{
      username:username,
      email:email,
      password:password,
    }
  };
}

export function loginSuccess(userData,token){
  return{
    type: LOGIN_SUCCESS,
    payload: {
      user : userData,
      token:token
    }
  }
}
