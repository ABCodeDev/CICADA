/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
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
