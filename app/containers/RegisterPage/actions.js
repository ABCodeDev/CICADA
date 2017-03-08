/*
 *
 * RegisterPage actions
 *
 */

import {
  DEFAULT_ACTION,
  REGISTER_AUTH_REQUEST,
  REGISTER_AUTH_SUCCESS,
  REGISTER_AUTH_FAILED,
  REGISTER_PROFILE_REQUEST,
  REGISTER_PROFILE_SUCCESS,
  REGISTER_PROFILE_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function registerAuthRequest(auth){
  return {
    type: REGISTER_AUTH_REQUEST,
    payload:{
      auth: auth,
    }
  };
}

export function registerProfileRequest(auth){
  return {
    type: REGISTER_PROFILE_REQUEST,
    payload:{
      profile: profle,
    }
  };
}

export function registerAuthSuccess() {
  return {
    type : REGISTER_AUTH_SUCCESS,
  }
}

export function registerAuthFailed(message){
  return {
    type: REGISTER_AUTH_FAILED,
    payload:{
      message:message,
    }
  };
}

export function registerProfileSuccess(){
  return{
    type: REGISTER_AUTH_SUCCESS,
  }
}


