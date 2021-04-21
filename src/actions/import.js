import * as apis from "./../apis/import";
import { Import } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// GET LIST
export const getListImport = () => ({
  type: Import.FETCH_LIST_IMPORT,
});

export const getListImportSuccess = (data) => ({
  type: Import.FETCH_LIST_IMPORT_SUCCESS,
  payload: data,
});

export const getListImportFailed = (error) => ({
  type: Import.FETCH_LIST_IMPORT_FAILED,
  payload: error,
});

export const getListImportRequest = (keyword) => {
  return (dispatch) => {
    dispatch(getListImport());
    dispatch({ type: SHOW_LOADING });
    apis
      .getList(keyword)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListImportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListImportFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};
