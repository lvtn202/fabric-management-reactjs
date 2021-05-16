import * as apis from "./../apis/import";
import { Import, Alert } from "../constants/action_types";
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
    apis
      .getList(keyword)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListImportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getListImportFailed(error));
      });
  };
};

// Get list fabric exported
export const getListExportedFabric = () => ({
  type: Import.FETCH_LIST_EXPORTED_FABRIC,
});

export const getListExportedFabricSuccess = (data) => ({
  type: Import.FETCH_LIST_EXPORTED_FABRIC_SUCCESS,
  payload: data,
});

export const getListExportedFabricFailed = (error) => ({
  type: Import.FETCH_LIST_EXPORTED_FABRIC_FAILED,
  payload: error,
});

export const getListExportedFabricRequest = (dyehouseId, fabricType) => {
  return (dispatch) => {
    dispatch(getListExportedFabric());
    apis
      .getListExportedFabric(dyehouseId, fabricType)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListExportedFabricSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getListExportedFabricFailed(error));
      });
  };
};

// Get price
export const getDyeingPrice = () => ({
  type: Import.FETCH_DYEING_PRICE,
});

export const getDyeingPriceSuccess = (data) => ({
  type: Import.FETCH_DYEING_PRICE_SUCCESS,
  payload: data,
});

export const getDyeingPriceFailed = (error) => ({
  type: Import.FETCH_DYEING_PRICE_FAILED,
  payload: error,
});

export const getDyeingPriceRequest = (fabricType, color) => {
  return (dispatch) => {
    dispatch(getDyeingPrice());
    apis
      .getDyeingPrice(fabricType, color)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getDyeingPriceSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getDyeingPriceFailed(error));
      });
  };
};

export const createImport = () => ({
  type: Import.CREATE_IMPORT,
});

export const createImportSuccess = (data) => ({
  type: Import.CREATE_IMPORT_SUCCESS,
  payload: data,
});

export const createImportFailed = (error) => ({
  type: Import.CREATE_IMPORT_FAILED,
  payload: error,
});

export const createImportRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(createImport());
    apis
      .createImport(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(createImportSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Tạo phiếu nhập thành công",
            },
          });
          completion();
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(createImportFailed(error));
      });
  };
};
