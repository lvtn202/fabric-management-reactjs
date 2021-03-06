import * as apis from "./../apis/dashboard";
import { Dashboard } from "../constants/action_types";
import {} from "../constants/action_types";
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
    apis
      .getRecentPayment()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getRecentPaymentSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getRecentPaymentFail(error));
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
    apis
      .getRecentImport()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getRecentImportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getRecentImportFail(error));
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
    apis
      .getRecentExport()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getRecentExportSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getRecentExportFail(error));
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
    apis
      .getStatisticFabric()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getStatisticFabricSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getStatisticFabricFail(error));
      });
  };
};

// Get list exported fabric in dye plants
export const getInforExportedFabric = () => ({
  type: Dashboard.FETCH_INFO_EXPORTED_FABRIC,
});

export const getInforExportedFabricSuccess = (data) => ({
  type: Dashboard.FETCH_INFO_EXPORTED_FABRIC_SUCCESS,
  payload: data,
});

export const getInforExportedFabricFail = (error) => ({
  type: Dashboard.FETCH_INFO_EXPORTED_FABRIC_FAILED,
  payload: error,
});

export const getInforExportedFabricRequest = () => {
  return (dispatch) => {
    dispatch(getInforExportedFabric());
    apis
      .getInforExportedFabric()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getInforExportedFabricSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getInforExportedFabricFail(error));
      });
  };
};

// Get list completed fabric in dye plants by type
export const getInforCompletedFabricByType = () => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_BY_TYPE,
});

export const getInforCompletedFabricByTypeSuccess = (data) => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_BY_TYPE_SUCCESS,
  payload: data,
});

export const getInforCompletedFabricByTypeFail = (error) => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_BY_TYPE_FAILED,
  payload: error,
});

export const getInforCompletedFabricByTypeRequest = (
  fabricType,
  startDate,
  endDate
) => {
  return (dispatch) => {
    dispatch(getInforCompletedFabricByType());
    apis
      .getInforCompletedFabricByType(fabricType, startDate, endDate)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getInforCompletedFabricByTypeSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getInforCompletedFabricByTypeFail(error));
      });
  };
};

// Get list completed fabric in dye plants by dye plant
export const getInforCompletedFabricByDyehouse = () => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_BY_DYEPLANT,
});

export const getInforCompletedFabricByDyehouseSuccess = (data) => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_BY_DYEPLANT_SUCCESS,
  payload: data,
});

export const getInforCompletedFabricByDyehouseFail = (error) => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_BY_DYEPLANT_FAILED,
  payload: error,
});

export const getInforCompletedFabricByDyehouseRequest = (
  dyehouseId,
  startDate,
  endDate
) => {
  return (dispatch) => {
    dispatch(getInforCompletedFabricByDyehouse());
    apis
      .getInforCompletedFabricByDyehouse(dyehouseId, startDate, endDate)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getInforCompletedFabricByDyehouseSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getInforCompletedFabricByDyehouseFail(error));
      });
  };
};

// Get list completed fabric in dye plants by dye plant
export const getInforCompletedFabricByDyehouseRecentYear = () => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_RECENT_YEAR,
});

export const getInforCompletedFabricByDyehouseRecentYearSuccess = (data) => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_RECENT_YEAR_SUCCESS,
  payload: data,
});

export const getInforCompletedFabricByDyehouseRecentYearFail = (error) => ({
  type: Dashboard.FETCH_COMPLETED_FABRIC_RECENT_YEAR_FAILED,
  payload: error,
});

export const getInforCompletedFabricByDyehouseRecentYearRequest = (
  dyehouseId
) => {
  return (dispatch) => {
    dispatch(getInforCompletedFabricByDyehouseRecentYear());
    apis
      .getInforCompletedFabricByDyehouseRecentYear(dyehouseId)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getInforCompletedFabricByDyehouseRecentYearSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
      })
      .catch((error) => {
        dispatch(getInforCompletedFabricByDyehouseRecentYearFail(error));
      });
  };
};
