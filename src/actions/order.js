import * as apis from "./../apis/order";
import { Order } from "./../constants/actionTypes";

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
    apis
      .getList(id)
      .then((data) => {
        dispatch(getListOrderSuccess(data));
      })
      .catch((error) => {
        dispatch(getListOrderFailed(error));
      });
  };
};