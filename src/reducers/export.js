import { Export } from "./../constants/action_types";

const defaultState = {
  listRawExport: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Export.FETCH_LIST_RAW_EXPORT:
    case Export.FETCH_LIST_RAW_EXPORT_FAILED:
      return {
        ...state,
        listRawExport: [],
      };
    case Export.FETCH_LIST_RAW_EXPORT_SUCCESS:
      return {
        ...state,
        listRawExport: action.payload.data.result,
      };
    case Export.CREATE_EXPORT:
    case Export.CREATE_EXPORT_SUCCESS:
    case Export.CREATE_EXPORT_FAILED:
      return state;
    default:
      return state;
  }
};
