import { DyeBatch } from "./../constants/action_types";

const defaultState = {
  listDyeBatch: [],
  detailDyeBatch: {},
  listFabricDyeBatch: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case DyeBatch.FETCH_LIST_DYEBATCH:
    case DyeBatch.FETCH_LIST_DYEBATCH_FAILED:
      return {
        ...state,
        listDyeBatch: [],
      };
    case DyeBatch.FETCH_LIST_DYEBATCH_SUCCESS:
      return {
        ...state,
        listDyeBatch: action.payload.data.result,
      };
    case DyeBatch.FETCH_DETAIL_DYEBATCH:
    case DyeBatch.FETCH_DETAIL_DYEBATCH_FAILED:
      return {
        ...state,
        detailDyeBatch: {},
      };
    case DyeBatch.FETCH_DETAIL_DYEBATCH_SUCCESS:
      return {
        ...state,
        detailDyeBatch: action.payload.data.result,
      };
    case DyeBatch.FETCH_LIST_FABRIC_DYEBATCH:
    case DyeBatch.FETCH_LIST_FABRIC_DYEBATCH_FAILED:
      return {
        ...state,
        listFabricDyeBatch: [],
      };
    case DyeBatch.FETCH_LIST_FABRIC_DYEBATCH_SUCCESS:
      return {
        ...state,
        listFabricDyeBatch: action.payload.data.result,
      };
    default:
      return state;
  }
};
