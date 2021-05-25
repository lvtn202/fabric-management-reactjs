import { Payment } from "./../constants/action_types";

const defaultState = {
  listPayment: [],
  listPaymentMethod: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Payment.FETCH_LIST_PAYMENT:
    case Payment.FETCH_LIST_PAYMENT_FAILED:
      return {
        ...state,
        listPayment: [],
      };
    case Payment.FETCH_LIST_PAYMENT_SUCCESS:
      return {
        ...state,
        listPayment: action.payload.data.result,
      };
    case Payment.FETCH_LIST_PAYMENT_METHOD:
    case Payment.FETCH_LIST_PAYMENT_METHOD_FAILED:
      return {
        ...state,
        listPaymentMethod: [],
      };
    case Payment.FETCH_LIST_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        listPaymentMethod: action.payload.data.result,
      };
    default:
      return state;
  }
};
