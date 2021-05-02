import * as apis from "./../apis/recall";
import { Recall, Alert } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";
import { showError } from "./../commons/handle_error";

// Get list recall
export const getListRecall = () => ({
  type: Recall.FETCH_LIST_RECALL,
});

export const getListRecallSuccess = (data) => ({
  type: Recall.FETCH_LIST_RECALL_SUCCESS,
  payload: data,
});

export const getListRecallFailed = (error) => ({
  type: Recall.FETCH_LIST_RECALL_FAILED,
  payload: error,
});

export const getListRecallRequest = () => {
  return (dispatch) => {
    dispatch(getListRecall());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListRecall()
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListRecallSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListRecallFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// Get detail recall
export const getDetailRecall = () => ({
  type: Recall.FETCH_DETAIL_RECALL,
});

export const getDetailRecallSuccess = (data) => ({
  type: Recall.FETCH_DETAIL_RECALL_SUCCESS,
  payload: data,
});

export const getDetailRecallFailed = (error) => ({
  type: Recall.FETCH_DETAIL_RECALL_FAILED,
  payload: error,
});

export const getDetailRecallRequest = (returnSlipId) => {
  return (dispatch) => {
    dispatch(getDetailRecall());
    dispatch({ type: SHOW_LOADING });
    apis
      .getDetailRecall(returnSlipId)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getDetailRecallSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getDetailRecallFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// Get list fabric recall
export const getListFabricRecall = () => ({
  type: Recall.FETCH_LIST_FABRIC_RECALL,
});

export const getListFabricRecallSuccess = (data) => ({
  type: Recall.FETCH_LIST_FABRIC_RECALL_SUCCESS,
  payload: data,
});

export const getListFabricRecallFailed = (error) => ({
  type: Recall.FETCH_LIST_FABRIC_RECALL_FAILED,
  payload: error,
});

export const getListFabricRecallRequest = (returnSlipId) => {
  return (dispatch) => {
    dispatch(getListFabricRecall());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListFabric(returnSlipId)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListFabricRecallSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListFabricRecallFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// Get list fabric prepare to recall
export const getListFabricDyeplant = () => ({
  type: Recall.FETCH_LIST_FABRIC_OF_DYEPLANT,
});

export const getListFabricDyeplantSuccess = (data) => ({
  type: Recall.FETCH_LIST_FABRIC_OF_DYEPLANT_SUCCESS,
  payload: data,
});

export const getListFabricDyeplantFailed = (error) => ({
  type: Recall.FETCH_LIST_FABRIC_OF_DYEPLANT_FAILED,
  payload: error,
});

export const getListFabricDyeplantRequest = (dyehouseId) => {
  return (dispatch) => {
    dispatch(getListFabricDyeplant());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListFabricDyeplant(dyehouseId)
      .then((data) => {
        if (data.data.status === 1) {
          dispatch(getListFabricDyeplantSuccess(data));
        } else {
          dispatch(showError(data.data.status_code, data.status));
        }
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(showError(error, error.status));
        dispatch(getListFabricDyeplantFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// Create recall
export const createRecall = () => ({
  type: Recall.CREATE_RECALL,
});

export const createRecallSuccess = (data) => ({
  type: Recall.CREATE_RECALL_SUCCESS,
  payload: data,
});

export const createRecallFailed = (error) => ({
  type: Recall.CREATE_RECALL_FAILED,
  payload: error,
});

export const createRecallRequest = (body, completion) => {
  return (dispatch) => {
    dispatch(createRecall());
    dispatch({ type: SHOW_LOADING });
    apis
      .createRecall(body)
      .then((data) => {
        console.log(data);
        if (data.data.status === 1) {
          dispatch(createRecallSuccess(data));
          dispatch({
            type: Alert.SHOW_SUCCESS_MESSAGE,
            payload: {
              successMsg: "Tạo phiếu hàng trả thành công",
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
        dispatch(createRecallFailed(error));
        dispatch(showError(error, error.status));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};
