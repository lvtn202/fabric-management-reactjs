import * as apis from "./../apis/dye_plant";
import { DyePlant } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING, Modal } from "../constants/action_types";

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
        dispatch(getListDyePlantSuccess(data));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
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
        dispatch(getDetailSuccess(data));
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
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
        dispatch(updateDetailSuccess(data));
        dispatch({ type: HIDE_LOADING });
        dispatch({ type: Modal.HIDE_MODAL });
      })
      .catch((error) => {
        dispatch(updateDetailFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};
