import { DyeBatch } from "./../constants/action_types";

const defaultState = {
  listDyeBatch: [],
  detailDyeBatch: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case DyeBatch.FETCH_LIST_DYEBATCH:
      return {
        ...state,
        listDyeBatch: [],
      };
    case DyeBatch.FETCH_LIST_DYEBATCH_SUCCESS:
      return {
        ...state,
        listDyeBatch: action.payload.data.result,
      };
    case DyeBatch.FETCH_LIST_DYEBATCH_FAILED:
      return {
        ...state,
        listDyeBatch: [],
      };
    default:
      return state;
  }
};
