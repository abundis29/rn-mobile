import * as ActionTypes from "./AuthActionTypes";

export const fetchLogin = (data: any) => (dispatch: any) => {
  dispatch(loginLoading());
};

export const loginLoading = () => ({
  type: ActionTypes.USER_AUTH_LOADING,
});
