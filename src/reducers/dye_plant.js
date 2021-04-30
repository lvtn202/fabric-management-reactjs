import { DyePlant } from "../constants/action_types";

const defaultState = {
  listDyePlant: [],
  detailDyePlant: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case DyePlant.FETCH_LIST_DYEPLANT:
    case DyePlant.FETCH_LIST_DYEPLANT_FAILED:
      return {
        ...state,
        listDyePlant: [],
      };
    case DyePlant.FETCH_LIST_DYEPLANT_SUCCESS:
      return {
        ...state,
        listDyePlant: action.payload.data.result,
      };
    case DyePlant.FETCH_DETAIL_DYEPLANT:
    case DyePlant.FETCH_DETAIL_DYEPLANT_FAILED:
      return {
        ...state,
        detailDyePlant: {},
      };
    case DyePlant.FETCH_DETAIL_DYEPLANT_SUCCESS:
      return {
        ...state,
        detailDyePlant: action.payload.data.result,
      };
    case DyePlant.UPDATE_DETAIL_DYEPLANT:
    case DyePlant.UPDATE_DETAIL_DYEPLANT_FAILED:
      return {
        ...state,
      };
    case DyePlant.UPDATE_DETAIL_DYEPLANT_SUCCESS:
      return {
        ...state,
        detailDyePlant: action.payload.data.result,
      };
    default:
      return state;
  }
};
