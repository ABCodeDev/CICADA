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

export function loginFailed(message){
  return {
    type: LOGIN_FAILED,
    payload:{
      message:message,
    }
  };
}

export function loginSuccess(userData,token){
  console.log(userData);
  console.log(token);
  return{
    type: LOGIN_SUCCESS,
    payload: {
      user : userData,
      token: token
    }
  }
}