import { Order } from "./../constants/action_types";

const defaultState = {
  listOrder: [],
  detailOrder: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Order.FETCH_LIST_ORDER:
    case Order.FETCH_LIST_IMPORT_ORDER:
      return {
        ...state,
        listOrder: [],
      };
    case Order.FETCH_LIST_ORDER_SUCCESS:
    case Order.FETCH_LIST_ORDER_IMPORT_SUCCESS:
      return {
        ...state,
        listOrder: action.payload.data.result,
      };
    case Order.FETCH_LIST_ORDER_FAILED:
    case Order.FETCH_LIST_ORDER_IMPORT_FAILED:
      return {
        ...state,
        listOrder: [],
      };
    case Order.FETCH_DETAIL_ORDER:
      return {
        ...state,
        detailOrder: {},
      };
    case Order.FETCH_DETAIL_ORDER_SUCCESS:
      return {
        ...state,
        detailOrder: action.payload.data.result,
      };
    case Order.FETCH_DETAIL_ORDER_FAILED:
      return {
        ...state,
        detailOrder: {},
      };
    default:
      return state;
  }
};
