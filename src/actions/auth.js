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

export const sendMailResetPassword = () => ({
  type: Auth.SEND_MAIL_RESET_PASSWORD,
});

export const sendMailResetPasswordSuccess = (data) => ({
  type: Auth.SEND_MAIL_RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const sendMailResetPasswordFailed = (error) => ({
  type: Auth.SEND_MAIL_RESET_PASSWORD_FAILED,
  payload: error,
});

export const sendMailResetPasswordRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(sendMailResetPassword());
    apis
      .sendMailResetPassword(body)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(sendMailResetPasswordSuccess(data.data.result));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg:
                "Email đã được gửi, làm theo hướng dẫn để đặt lại mật khẩu.",
            },
          });
          completion(data);
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(sendMailResetPasswordFailed(error));
      });
  };
};

export const resetPassword = () => ({
  type: Auth.RESET_PASSWORD,
});

export const resetPasswordSuccess = (data) => ({
  type: Auth.RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const resetPasswordFailed = (error) => ({
  type: Auth.RESET_PASSWORD_FAILED,
  payload: error,
});

export const resetPasswordRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(resetPassword());
    apis
      .resetPassword(body)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(resetPasswordSuccess(data.data.result));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg:
                "Đặt lại mật khẩu thành công",
            },
          });
          completion(data);
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(resetPasswordFailed(error));
      });
  };
};

export const checkTokenResetPassword = () => ({
  type: Auth.CHECK_TOKEN_RESET_PASSWORD,
});

export const checkTokenResetPasswordSuccess = (data) => ({
  type: Auth.CHECK_TOKEN_RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const checkTokenResetPasswordFailed = (error) => ({
  type: Auth.CHECK_TOKEN_RESET_PASSWORD_FAILED,
  payload: error,
});

export const checkTokenResetPasswordRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(checkTokenResetPassword());
    apis
      .checkTokenResetPassword(body)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(checkTokenResetPasswordSuccess(data.data.result));
        } else {
          completion(data);
        }
      })
      .catch((error) => {
        dispatch(checkTokenResetPasswordFailed(error));
      });
  };
};
