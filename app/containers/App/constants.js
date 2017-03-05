/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const API_BASE = 'https://localhost:8000/api/v1/';
export const API_USER_PROFILE = 'user-profile/';
export const API_AUTH = 'rest-auth/';
export const API_AUTH_LOGIN = 'rest-auth/login/';
export const API_AUTH_USER = 'rest-auth/user/';
