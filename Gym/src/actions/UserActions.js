import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../stores/ActionType';

export const userLogin = function(user) {
  return {
    type: USER_LOGGED_IN,
    payload: {
      user
    }
  }
};

export const userLogout = function() {
  return {
    type: USER_LOGGED_OUT,
  }
};
