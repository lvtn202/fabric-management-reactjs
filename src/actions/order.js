import * as apis from "./../apis/order";
import { Order } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// GET LIST
export const getListOrder = () => ({
  type: Order.FETCH_LIST_ORDER,
});

export const getListOrderSuccess = (data) => ({
  type: Order.FETCH_LIST_ORDER_SUCCESS,
  payload: data,
});

export const getListOrderFailed = (error) => ({
  type: Order.FETCH_LIST_ORDER_FAILED,
  payload: error,
});

export const getListOrderRequest = (keyword) => {
  return (dispatch) => {
    dispatch(getListOrder());
    dispatch({ type: SHOW_LOADING });
    apis
      .getList(keyword)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListOrderSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListOrderFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// GET DETAIL
export const getDetailOrder = () => ({
  type: Order.FETCH_DETAIL_ORDER,
});

export const getDetailSuccess = (data) => ({
  type: Order.FETCH_DETAIL_ORDER_SUCCESS,
  payload: data,
});

export const getDetailFail = (error) => ({
  type: Order.FETCH_DETAIL_ORDER_FAILED,
  payload: error,
});

export const getDetailOrderRequest = (id) => {
  return (dispatch) => {
    dispatch(getDetailOrder());
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
