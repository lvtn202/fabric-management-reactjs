import { Dashboard } from "./../constants/action_types";

const defaultState = {
  recentPayment: "",
  recentImport: [],
  recentExport: [],
  statisticFabric: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Dashboard.FETCH_RECENT_PAYMENT:
    case Dashboard.FETCH_RECENT_PAYMENT_FAILED:
      return {
        ...state,
        recentPayment: "",
      };
    case Dashboard.FETCH_RECENT_PAYMENT_SUCCESS:
      return {
        ...state,
        recentPayment: action.payload.data.result,
      };
    case Dashboard.FETCH_RECENT_IMPORT:
    case Dashboard.FETCH_RECENT_IMPORT_FAILED:
      return {
        ...state,
        recentImport: [],
      };
    case Dashboard.FETCH_RECENT_IMPORT_SUCCESS:
      return {
        ...state,
        recentImport: action.payload.data.result,
      };
    case Dashboard.FETCH_RECENT_EXPORT:
    case Dashboard.FETCH_RECENT_EXPORT_FAILED:
      return {
        ...state,
        recentExport: [],
      };
    case Dashboard.FETCH_RECENT_EXPORT_SUCCESS:
      return {
        ...state,
        recentExport: action.payload.data.result,
      };
    case Dashboard.FETCH_STATISTIC_FABRIC:
    case Dashboard.FETCH_STATISTIC_FABRIC_FAILED:
      return {
        ...state,
        statisticFabric: [],
      };
    case Dashboard.FETCH_STATISTIC_FABRIC_SUCCESS:
      return {
        ...state,
        statisticFabric: action.payload.data.result,
      };
    default:
      return state;
  }
};
