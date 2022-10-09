import * as ActionTypes from './AuthActionTypes';
import { Action } from '../reduxTypes';

const INITIAL_STATE = {
  isLoading: false,
  errMess: null,
  userData: [],
};

export const Auth = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.USER_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        userData: action.payload,
      };
    case ActionTypes.USER_AUTH_LOADING:
      return { ...state, isLoading: true, errMess: null, userData: [] };
    case ActionTypes.USER_AUTH_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        userData: [],
      };
    case ActionTypes.USER_AUTH_LOGOUT:
      return { ...state, isLoading: false, errMess: null, userData: [] };
    default:
      return state;
  }
};
