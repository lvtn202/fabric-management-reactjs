import { Order } from "./../constants/action_types";

const defaultState = {
  listOrder: [],
  detailOrder: {},
  createOrder: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Order.FETCH_LIST_ORDER:
    case Order.FETCH_LIST_IMPORT_ORDER:
    case Order.FETCH_LIST_ORDER_FAILED:
    case Order.FETCH_LIST_ORDER_IMPORT_FAILED:
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
    case Order.FETCH_DETAIL_ORDER:
    case Order.FETCH_DETAIL_ORDER_FAILED:
      return {
        ...state,
        detailOrder: {},
      };
    case Order.FETCH_DETAIL_ORDER_SUCCESS:
      return {
        ...state,
        detailOrder: action.payload.data.result,
      };
    case Order.CREATE_ORDER:
    case Order.CREATE_ORDER_FAILED:
      return {
        ...state,
        createOrder: {},
      };
    case Order.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        createOrder: action.payload.data.result,
      };
    case Order.UPDATE_CREATE_ORDER:
      return {
        ...state,
        createOrder: {
          dyeplantId: action.payload,
        },
      };
    default:
      return state;
  }
};
