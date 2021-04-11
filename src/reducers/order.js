import { Order } from "./../constants/action_types";

const defaultState = {
  listOrder: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Order.FETCH_LIST_ORDER:
      return {
        ...state,
        listOrder: [],
      };
    case Order.FETCH_LIST_ORDER_SUCCESS:
      return {
        ...state,
        listOrder: action.payload.data.result,
      };
    case Order.FETCH_LIST_ORDER_FAILED:
      return {
        ...state,
        listOrder: [],
      };
    default:
      return state;
  }
};
