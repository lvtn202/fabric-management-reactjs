import * as apis from "./../apis/auth";
import { Auth, Alert } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

export const login = () => ({
  type: Auth.LOGIN,
});

export const loginSuccess = (data) => ({
  type: Auth.LOGIN_SUCCESS,
  payload: data,
});

export const loginFailed = (error) => ({
  type: Auth.LOGIN_FAILED,
  payload: error,
});

export const loginRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(login());
    apis
      .login(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(loginSuccess(data.data.result));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Đăng nhập thành công",
            },
          });
          completion(data);
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(loginFailed(error));
      });
  };
};
