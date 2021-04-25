import * as apis from "./../apis/export";
import { Export, Alert } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// GET LIST RAW EXPORT
export const getListRawExport = () => ({
  type: Export.FETCH_LIST_RAW_EXPORT,
});

export const getListRawExportSuccess = (data) => ({
  type: Export.FETCH_LIST_RAW_EXPORT_SUCCESS,
  payload: data,
});

export const getListRawExportFailed = (error) => ({
  type: Export.FETCH_LIST_RAW_EXPORT_FAILED,
  payload: error,
});

export const getListRawExportRequest = (fabricType) => {
  return (dispatch) => {
    dispatch(getListRawExport());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListRawExport(fabricType)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListRawExportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListRawExportFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// CREATE EXPORT
export const createExport = () => ({
  type: Export.CREATE_EXPORT,
});

export const createExportSuccess = (data) => ({
  type: Export.CREATE_EXPORT_SUCCESS,
  payload: data,
});

export const createExportFailed = (error) => ({
  type: Export.CREATE_EXPORT_FAILED,
  payload: error,
});

export const createExportRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(createExport());
    dispatch({ type: SHOW_LOADING });
    apis
      .createExport(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(createExportSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Tạo phiếu xuất thành công",
            },
          });
          completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(createExportFailed(error));
        dispatch(showError(error, error.status));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};
