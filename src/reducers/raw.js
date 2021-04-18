import { Raw } from "./../constants/action_types";

const defaultState = {
  listRaw: [],
  listFabric: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Raw.FETCH_LIST_RAW_STOCK:
      return {
        ...state,
        listRaw: [],
      };
    case Raw.FETCH_LIST_RAW_STOCK_SUCCESS:
      return {
        ...state,
        listRaw: action.payload.data.result,
      };
    case Raw.FETCH_LIST_RAW_STOCK_FAILED:
      return {
        ...state,
        listRaw: [],
      };
      case Raw.FETCH_LIST_FABRIC_DYEPLANT:
      return {
        ...state,
        listFabric: [],
      };
    case Raw.FETCH_LIST_FABRIC_DYEPLANT_SUCCESS:
      return {
        ...state,
        listFabric: action.payload.data.result,
      };
    case Raw.FETCH_LIST_FABRIC_DYEPLANT_FAILED:
      return {
        ...state,
        listFabric: [],
      };
    default:
      return state;
  }
};
