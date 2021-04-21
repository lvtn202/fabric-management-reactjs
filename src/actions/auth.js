import * as apis from "./../apis/auth";
import { Auth, Alert } from "../constants/action_types";
import { showError } from "./../commons/handle_error";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";

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
    dispatch({ type: SHOW_LOADING });
    apis
      .login(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(loginSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Đăng nhập thành công",
            },
          });
          completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(loginFailed(error));
        dispatch(showError(error, error.status));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};
