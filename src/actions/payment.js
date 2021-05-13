import * as apis from "./../apis/payment";
import { Payment, Alert } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// Get list payment
export const getListPayment = () => ({
  type: Payment.FETCH_LIST_PAYMENT,
});

export const getListPaymentSuccess = (data) => ({
  type: Payment.FETCH_LIST_PAYMENT_SUCCESS,
  payload: data,
});

export const getListPaymentFail = (error) => ({
  type: Payment.FETCH_LIST_PAYMENT_FAILED,
  payload: error,
});

export const getListPaymentRequest = (dyehouseId) => {
  return (dispatch) => {
    dispatch(getListPayment());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListPayment(dyehouseId)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListPaymentSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListPaymentFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};

// Get list payment method
export const getListPaymentMethod = () => ({
  type: Payment.FETCH_LIST_PAYMENT_METHOD,
});

export const getListPaymentMethodSuccess = (data) => ({
  type: Payment.FETCH_LIST_PAYMENT_METHOD_SUCCESS,
  payload: data,
});

export const getListPaymentMethodFail = (error) => ({
  type: Payment.FETCH_LIST_PAYMENT_METHOD_FAILED,
  payload: error,
});

export const getListPaymentMethodRequest = () => {
  return (dispatch) => {
    dispatch(getListPaymentMethod());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListPaymentMethod()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListPaymentMethodSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListPaymentMethodFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};

// Create payment
export const createPayment = () => ({
  type: Payment.FETCH_LIST_PAYMENT,
});

export const createPaymentSuccess = (data) => ({
  type: Payment.FETCH_LIST_PAYMENT_SUCCESS,
  payload: data,
});

export const createPaymentFail = (error) => ({
  type: Payment.FETCH_LIST_PAYMENT_FAILED,
  payload: error,
});

export const createPaymentRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(createPayment());
    dispatch({ type: SHOW_LOADING });
    apis
      .createPayment(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(createPaymentSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Tạo hóa đơn thành công",
            },
          });
          completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(createPaymentFail(error));
        dispatch(showError(error, error.status));
        dispatch({ type: HIDE_LOADING });
      });
  };
};
