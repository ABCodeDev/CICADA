/*
 *
 * SecretForm actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CURRENT_FORM,
  FETCH_CURRENT_SUCCESS,
  SEND_CURRENT_RESPONSE,
  SEND_CURRENT_SUCCESS
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchCurrentSuccess(data){
  return{
    type:FETCH_CURRENT_SUCCESS,
    form:data.component.data.json_schema,
    ui:data.component.data.ui_schema,
  }
}

export function fetchCurrentForm(){
  return{
    type:FETCH_CURRENT_FORM,
  }
}

export function sendCurrentResponse(response){
  return{
    type:SEND_CURRENT_RESPONSE,
    response:response,
  }
}

export function sendCurrentResponseSuccess(){
  return{
    type:SEND_CURRENT_SUCCESS,
  }
}
