import * as apis from "./../apis/dye_batch";
import { DyeBatch } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";


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
        dispatch(getListDyeBatchSuccess(data));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(getListDyeBatchFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};