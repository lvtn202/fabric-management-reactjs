import { Import } from "./../constants/action_types";

const defaultState = {
  listImport: [],
  detailImport: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Import.FETCH_LIST_IMPORT:
      return {
        ...state,
        listImport: [],
      };
    case Import.FETCH_LIST_IMPORT_SUCCESS:
      return {
        ...state,
        listImport: action.payload.data.result,
      };
    case Import.FETCH_LIST_IMPORT_FAILED:
      return {
        ...state,
        listImport: [],
      };
    default:
      return state;
  }
};
