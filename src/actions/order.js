import * as apis from "./../apis/order";
import { Order } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";

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

export const getListOrderRequest = (id) => {
  return (dispatch) => {
    dispatch(getListOrder());
    dispatch({ type: SHOW_LOADING });
    apis
      .getList(id)
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