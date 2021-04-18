import * as apis from "./../apis/raw";
import { Raw } from "../constants/action_types";
import { SHOW_LOADING, HIDE_LOADING } from "../constants/action_types";

// GET LIST RAW
export const getListRaw = () => ({
  type: Raw.FETCH_LIST_RAW_STOCK,
});

export const getListRawSuccess = (data) => ({
  type: Raw.FETCH_LIST_RAW_STOCK_SUCCESS,
  payload: data,
});

export const getListRawFailed = (error) => ({
  type: Raw.FETCH_LIST_RAW_STOCK_FAILED,
  payload: error,
});

export const getListRawRequest = (id) => {
  return (dispatch) => {
    dispatch(getListRaw());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListRaw(id)
      .then((data) => {
        dispatch(getListRawSuccess(data));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(getListRawFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// GET LIST FABRIC
export const getListFabric = () => ({
  type: Raw.FETCH_LIST_FABRIC_DYEPLANT,
});

export const getListFabricSuccess = (data) => ({
  type: Raw.FETCH_LIST_FABRIC_DYEPLANT_SUCCESS,
  payload: data,
});

export const getListFabricFailed = (error) => ({
  type: Raw.FETCH_LIST_FABRIC_DYEPLANT_FAILED,
  payload: error,
});

export const getListFabricRequest = (id, startDate, endDate) => {
  return (dispatch) => {
    dispatch(getListFabric());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListFabric(id, startDate, endDate)
      .then((data) => {
        dispatch(getListFabricSuccess(data));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(getListFabricFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};

// GET LIST RAW ALL PLANTS
export const getListRawAllPlants = () => ({
  type: Raw.FETCH_LIST_FABRIC_DYEPLANT,
});

export const getListRawAllPlantsSuccess = (data) => ({
  type: Raw.FETCH_LIST_FABRIC_DYEPLANT_SUCCESS,
  payload: data,
});

export const getListRawAllPlantsFailed = (error) => ({
  type: Raw.FETCH_LIST_FABRIC_DYEPLANT_FAILED,
  payload: error,
});

export const getListRawAllPlantsRequest = () => {
  return (dispatch) => {
    dispatch(getListRawAllPlants());
    dispatch({ type: SHOW_LOADING });
    apis
      .getListRawAllPlants()
      .then((data) => {
        dispatch(getListRawAllPlantsSuccess(data));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      })
      .catch((error) => {
        dispatch(getListRawAllPlantsFailed(error));
        setTimeout(() => {
          dispatch({ type: HIDE_LOADING });
        }, 1000);
      });
  };
};
