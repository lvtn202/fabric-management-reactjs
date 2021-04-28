import { Import } from "./../constants/action_types";

const defaultState = {
  listImport: [],
  detailImport: {},
  dyeingPrice: "",
  listExportedFabric: []
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
    case Import.FETCH_LIST_EXPORTED_FABRIC:
      return {
        ...state,
        listExportedFabric: [],
      };
    case Import.FETCH_LIST_EXPORTED_FABRIC_SUCCESS:
      return {
        ...state,
        listExportedFabric: action.payload.data.result,
      };
    case Import.FETCH_LIST_EXPORTED_FABRIC_FAILED:
      return {
        ...state,
        listExportedFabric: [],
      };
    case Import.FETCH_DYEING_PRICE:
      return {
        ...state,
        dyeingPrice: "",
      };
    case Import.FETCH_DYEING_PRICE_SUCCESS:
      return {
        ...state,
        dyeingPrice: action.payload.data.result,
      };
    case Import.FETCH_DYEING_PRICE_FAILED:
      return {
        ...state,
        dyeingPrice: "",
      };
    default:
      return state;
  }
};
