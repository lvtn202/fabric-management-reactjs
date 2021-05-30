import * as apis from "./../apis/dye_plant";
import { DyePlant, Alert } from "../constants/action_types";
import { Modal } from "../constants/action_types";
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

export const getListDyePlantRequest = (keyword, completion) => {
  return (dispatch) => {
    dispatch(getListDyePlant());
    apis
      .getList(keyword)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListDyePlantSuccess(data));
          if (completion) completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getListDyePlantFail(error));
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
    apis
      .getDetail(id)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getDetailSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getDetailFail(error));
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
      })
      .catch((error) => {
        dispatch(updateDetailFail(error));
      });
  };
};
