import * as apis from "./../apis/dye_batch";
import { DyeBatch } from "../constants/action_types";
import {} from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// GET LIST
export const getListDyeBatch = () => ({
  type: DyeBatch.FETCH_LIST_DYEBATCH,
});

export const getListDyeBatchSuccess = (data) => ({
  type: DyeBatch.FETCH_LIST_DYEBATCH_SUCCESS,
  payload: data,
});

export const getListDyeBatchFailed = (error) => ({
  type: DyeBatch.FETCH_LIST_DYEBATCH_FAILED,
  payload: error,
});

export const getListDyeBatchRequest = (keyword) => {
  return (dispatch) => {
    dispatch(getListDyeBatch());
    apis
      .getList(keyword)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListDyeBatchSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getListDyeBatchFailed(error));
      });
  };
};

// Get detail
export const getDetailDyeBatch = () => ({
  type: DyeBatch.FETCH_DETAIL_DYEBATCH,
});

export const getDetailDyeBatchSuccess = (data) => ({
  type: DyeBatch.FETCH_DETAIL_DYEBATCH_SUCCESS,
  payload: data,
});

export const getDetailDyeBatchFailed = (error) => ({
  type: DyeBatch.FETCH_DETAIL_DYEBATCH_FAILED,
  payload: error,
});

export const getDetailDyeBatchRequest = (dyeBatchId) => {
  return (dispatch) => {
    dispatch(getListDyeBatch());
    apis
      .getDetail(dyeBatchId)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getDetailDyeBatchSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getDetailDyeBatchFailed(error));
      });
  };
};

// Get list fabric
export const getListFabricDyeBatch = () => ({
  type: DyeBatch.FETCH_LIST_FABRIC_DYEBATCH,
});

export const getListFabricDyeBatchSuccess = (data) => ({
  type: DyeBatch.FETCH_LIST_FABRIC_DYEBATCH_SUCCESS,
  payload: data,
});

export const getListFabricDyeBatchFailed = (error) => ({
  type: DyeBatch.FETCH_LIST_FABRIC_DYEBATCH_FAILED,
  payload: error,
});

export const getListFabricDyeBatchRequest = (dyeBatchId) => {
  return (dispatch) => {
    dispatch(getListFabricDyeBatch());
    apis
      .getListFabric(dyeBatchId)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListFabricDyeBatchSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getListFabricDyeBatchFailed(error));
      });
  };
};
