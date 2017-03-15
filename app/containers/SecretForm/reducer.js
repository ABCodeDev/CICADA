/*
 *
 * SecretForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEND_CURRENT_SUCCESS,
  FETCH_CURRENT_FORM,
  FETCH_CURRENT_SUCCESS,
  SEND_CURRENT_RESPONSE
} from './constants';

const initialState = fromJS({form:null, ui:null,});

function secretFormReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_CURRENT_RESPONSE:
      return state;
    case SEND_CURRENT_SUCCESS:
      return state.set('success',true);
    case FETCH_CURRENT_FORM:
      return state.set('success',false);
    case FETCH_CURRENT_SUCCESS:
      return state.set('form',action.form).set('ui', action.ui);
    default:
      return state;
  }
}

export default secretFormReducer;
