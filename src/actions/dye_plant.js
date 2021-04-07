import * as apis from "./../apis/dye_plant";
import { DyePlant } from "./../constants/actionTypes";

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

export const getListDyePlantRequest = () => {
  return (dispatch) => {
    dispatch(getListDyePlant());
    apis
      .getList()
      .then((data) => {
        dispatch(getListDyePlantSuccess(data));
      })
      .catch((error) => {
        dispatch(getListDyePlantFail(error));
      });
  };
};


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
        dispatch(getDetailSuccess(data));
      })
      .catch((error) => {
        dispatch(getDetailFail(error));
      });
  };
};
