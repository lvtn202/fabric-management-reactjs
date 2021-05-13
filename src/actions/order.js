import * as apis from "./../apis/order";
import { Order, Alert } from "../constants/action_types";
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
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListOrderFailed(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};

// GET LIST IMPORT
export const getListOrderImport = () => ({
  type: Order.FETCH_LIST_ORDER_IMPORT,
});

export const getListOrderImportSuccess = (data) => ({
  type: Order.FETCH_LIST_ORDER_IMPORT_SUCCESS,
  payload: data,
});

export const getListOrderImportFailed = (error) => ({
  type: Order.FETCH_LIST_ORDER_IMPORT_FAILED,
  payload: error,
});

export const getListOrderImportRequest = (dyehouseId, fabricType, color) => {
  return (dispatch) => {
    dispatch(getListOrderImport());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListOrderImport(dyehouseId, fabricType, color)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListOrderImportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListOrderImportFailed(error));
        dispatch({ type: HIDE_LOADING });
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

// CREATE ORDER
export const createOrder = () => ({
  type: Order.CREATE_ORDER,
});

export const createOrderSuccess = (data) => ({
  type: Order.CREATE_ORDER_SUCCESS,
  payload: data,
});

export const createOrderFailed = (error) => ({
  type: Order.CREATE_ORDER_FAILED,
  payload: error,
});

export const createOrderRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(createOrder());
    dispatch({ type: SHOW_LOADING });
    apis
      .createOrder(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(createOrderSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Tạo đơn hàng thành công",
            },
          });
          completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(createOrderFailed(error));
        dispatch(showError(error, error.status));
        dispatch({ type: HIDE_LOADING });
      });
  };
};
