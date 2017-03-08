
/*
 *
 * Global actions
 *
 */
import {
  SET_USER_PROFILE
} from './constants';


export function setUserProfile(userData,token){
  return {
    type: SET_USER_PROFILE,
    payload:{
      userProfile:userData,
      token:token,
    }
  };
}


