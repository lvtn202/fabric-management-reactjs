import * as apis from "./../apis/import";
import { Import } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";


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
        dispatch(getListImportSuccess(data));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(getListImportFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};