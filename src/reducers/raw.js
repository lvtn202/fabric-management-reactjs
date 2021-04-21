import { Raw } from "./../constants/action_types";

const defaultState = {
  listRaw: [], // Danh sach vai moc o kho/ xuong
  listFabric: [], // Danh sach vai thanh pham o 1 xuong
  listRawAllPlant: [], // Danh sach vai moc tat ca xuong
  listFabricType: [], // Danh sach loai vai
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
    case Raw.FETCH_LIST_FABRIC_TYPE:
      return {
        ...state,
        listFabricType: [],
      };
    case Raw.FETCH_LIST_FABRIC_TYPE_SUCCESS:
      return {
        ...state,
        listFabricType: action.payload.data.result,
      };
    case Raw.FETCH_LIST_FABRIC_TYPE_FAILED:
      return {
        ...state,
        listFabricType: [],
      };
    case Raw.FETCH_LIST_RAW_ALL_PLANT:
      return {
        ...state,
        listRawAllPlant: [],
      };
    case Raw.FETCH_LIST_RAW_ALL_PLANT_SUCCESS:
      return {
        ...state,
        listRawAllPlant: action.payload.data.result,
      };
    case Raw.FETCH_LIST_RAW_ALL_PLANT_FAILED:
      return {
        ...state,
        listRawAllPlant: [],
      };
    default:
      return state;
  }
};
