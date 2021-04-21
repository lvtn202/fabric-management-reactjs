import * as apis from "./../apis/dye_batch";
import { DyeBatch } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";
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
    dispatch({ type: SHOW_LOADING });
    apis
      .getList(keyword)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListDyeBatchSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListDyeBatchFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};