
/*
 *
 * Global actions
 *
 */
import {
  SET_USER_PROFILE,
  LOG_OUT
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

export function logOut(){
  console.log("set user profile");
  return {
    type: LOG_OUT,
  };
}

