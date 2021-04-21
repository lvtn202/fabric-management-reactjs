import * as apis from "./../apis/dye_plant";
import { DyePlant, Alert } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING, Modal } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// GET LIST
export const getListDyePlant = () => ({
  type: DyePlant.FETCH_LIST_DYEPLANT,
});

export const getListDyePlantSuccess = (data) => ({
  type: DyePlant.FETCH_LIST_DYEPLANT_SUCCESS,
  payload: data,
});

export const getListDyePlantFail = (error) => ({
  type: DyePlant.FETCH_LIST_DYEPLANT_FAILED,
  payload: error,
});

export const getListDyePlantRequest = (keyword) => {
  return (dispatch) => {
    dispatch(getListDyePlant());
    dispatch({ type: SHOW_LOADING });
    apis
      .getList(keyword)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListDyePlantSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListDyePlantFail(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// GET DETAIL
export const getDetailDyePlant = () => ({
  type: DyePlant.FETCH_DETAIL_DYEPLANT,
});

export const getDetailSuccess = (data) => ({
  type: DyePlant.FETCH_DETAIL_DYEPLANT_SUCCESS,
  payload: data,
});

export const getDetailFail = (error) => ({
  type: DyePlant.FETCH_LIST_DYEPLANT_FAILED,
  payload: error,
});

export const getDetailDyePlantRequest = (id) => {
  return (dispatch) => {
    dispatch(getDetailDyePlant());
    dispatch({ type: SHOW_LOADING });
    apis
      .getDetail(id)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getDetailSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getDetailFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};

// UPDATE DETAIL
export const updateDetail = () => ({
  type: DyePlant.UPDATE_DETAIL_DYEPLANT,
});

export const updateDetailSuccess = (data) => ({
  type: DyePlant.UPDATE_DETAIL_DYEPLANT_SUCCESS,
  payload: data,
});

export const updateDetailFail = (error) => ({
  type: DyePlant.UPDATE_DETAIL_DYEPLANT_FAILED,
  payload: error,
});

export const updateDetailDyePlantRequest = (body) => {
  return (dispatch) => {
    dispatch(updateDetail());
    dispatch({ type: SHOW_LOADING });
    apis
      .editDetail(body)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(updateDetailSuccess(data));
          dispatch({ type: Modal.HIDE_MODAL });
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Thay đổi thông tin thành công",
            },
          });
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(updateDetailFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};
