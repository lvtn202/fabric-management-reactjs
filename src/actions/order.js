import * as apis from "./../apis/order";
import { Order, Alert } from "../constants/action_types";
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
    apis
      .getList(keyword)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListOrderSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getListOrderFailed(error));
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
    apis
      .getListOrderImport(dyehouseId, fabricType, color)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListOrderImportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getListOrderImportFailed(error));
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
    apis
      .getDetail(id)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getDetailSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getDetailFail(error));
      });
  };
};

// CREATE ORDER
export const updateCreateOrder = (dyeplantId) => (dispatch) =>
  dispatch({ type: Order.UPDATE_CREATE_ORDER, payload: dyeplantId });

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
    apis
      .createOrder(body)
      .then((data) => {
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
      })
      .catch((error) => {
        dispatch(createOrderFailed(error));
      });
  };
};

// Make order complete
export const completeOrder = () => ({
  type: Order.COMPLETE_ORDER,
});

export const completeOrderSuccess = (data) => ({
  type: Order.COMPLETE_ORDER_SUCCESS,
  payload: data,
});

export const completeOrderFailed = (error) => ({
  type: Order.COMPLETE_ORDER_FAILED,
  payload: error,
});

export const completeOrderRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(completeOrder());
    apis
      .completeOrder(body)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(completeOrderSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Cập nhật trạng thái thành công",
            },
          });
          completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(completeOrderFailed(error));
      });
  };
};
