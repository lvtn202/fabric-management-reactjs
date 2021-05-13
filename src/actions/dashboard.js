import * as apis from "./../apis/dashboard";
import { Dashboard } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// Get recent payment
export const getRecentPayment = () => ({
  type: Dashboard.FETCH_RECENT_PAYMENT,
});

export const getRecentPaymentSuccess = (data) => ({
  type: Dashboard.FETCH_RECENT_PAYMENT_SUCCESS,
  payload: data,
});

export const getRecentPaymentFail = (error) => ({
  type: Dashboard.FETCH_RECENT_PAYMENT_FAILED,
  payload: error,
});

export const getRecentPaymentRequest = () => {
  return (dispatch) => {
    dispatch(getRecentPayment());
    dispatch({ type: SHOW_LOADING });
    apis
      .getRecentPayment()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getRecentPaymentSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getRecentPaymentFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};

// Get recent import
export const getRecentImport = () => ({
  type: Dashboard.FETCH_RECENT_IMPORT,
});

export const getRecentImportSuccess = (data) => ({
  type: Dashboard.FETCH_RECENT_IMPORT_SUCCESS,
  payload: data,
});

export const getRecentImportFail = (error) => ({
  type: Dashboard.FETCH_RECENT_IMPORT_FAILED,
  payload: error,
});

export const getRecentImportRequest = () => {
  return (dispatch) => {
    dispatch(getRecentImport());
    dispatch({ type: SHOW_LOADING });
    apis
      .getRecentImport()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getRecentImportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getRecentImportFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};

// Get recent export
export const getRecentExport = () => ({
  type: Dashboard.FETCH_RECENT_EXPORT,
});

export const getRecentExportSuccess = (data) => ({
  type: Dashboard.FETCH_RECENT_EXPORT_SUCCESS,
  payload: data,
});

export const getRecentExportFail = (error) => ({
  type: Dashboard.FETCH_RECENT_EXPORT_FAILED,
  payload: error,
});

export const getRecentExportRequest = () => {
  return (dispatch) => {
    dispatch(getRecentExport());
    dispatch({ type: SHOW_LOADING });
    apis
      .getRecentExport()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getRecentExportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getRecentExportFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};

// Get statistic fabric
export const getStatisticFabric = () => ({
  type: Dashboard.FETCH_STATISTIC_FABRIC,
});

export const getStatisticFabricSuccess = (data) => ({
  type: Dashboard.FETCH_STATISTIC_FABRIC_SUCCESS,
  payload: data,
});

export const getStatisticFabricFail = (error) => ({
  type: Dashboard.FETCH_STATISTIC_FABRIC_FAILED,
  payload: error,
});

export const getStatisticFabricRequest = () => {
  return (dispatch) => {
    dispatch(getStatisticFabric());
    dispatch({ type: SHOW_LOADING });
    apis
      .getStatisticFabric()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getStatisticFabricSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        dispatch({ type: HIDE_LOADING });
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getStatisticFabricFail(error));
        dispatch({ type: HIDE_LOADING });
      });
  };
};
