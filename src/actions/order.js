import * as apis from "./../apis/order";
import { Order } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";


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
        dispatch(getListOrderSuccess(data));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
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
        dispatch(getDetailSuccess(data));
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(getDetailFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};