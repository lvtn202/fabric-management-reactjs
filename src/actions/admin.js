import * as apis from "./../apis/admin";
import { Admin, Alert } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// GET LIST
export const getListUser = () => ({
  type: Admin.FETCH_LIST_USER,
});

export const getListUserSuccess = (data) => ({
  type: Admin.FETCH_LIST_USER_SUCCESS,
  payload: data,
});

export const getListUserFailed = (error) => ({
  type: Admin.FETCH_LIST_USER_FAILED,
  payload: error,
});

export const getListUserRequest = () => {
  return (dispatch) => {
    dispatch(getListUser());
    apis
      .getListUser()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListUserSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getListUserFailed(error));
      });
  };
};


// Signup
export const createUser = () => ({
  type: Admin.CREATE_USER,
});

export const createUserSuccess = (data) => ({
  type: Admin.CREATE_USER_SUCCESS,
  payload: data,
});

export const createUserFail = (error) => ({
  type: Admin.CREATE_USER_FAILED,
  payload: error,
});

export const createUserRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(createUser());
    apis
      .signup(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(createUserSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Tạo nhân viên thành công",
            },
          });
          completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(createUserFail(error));
      });
  };
};

// Create dye plant
export const createDyePlant = () => ({
  type: Admin.CREATE_DYE_PLANT,
});

export const createDyePlantSuccess = (data) => ({
  type: Admin.CREATE_DYE_PLANT_SUCCESS,
  payload: data,
});

export const createDyePlantFail = (error) => ({
  type: Admin.CREATE_DYE_PLANT_FAILED,
  payload: error,
});

export const createDyePlantRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(createDyePlant());
    apis
      .createDyeplant(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(createDyePlantSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Tạo xưởng thành công",
            },
          });
          completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(createDyePlantFail(error));
      });
  };
};