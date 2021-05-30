import { Payment } from "./../constants/action_types";

const defaultState = {
  listPayment: [],
  listPaymentMethod: [],
  createPayment: {},
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
    case Payment.UPDATE_CREATE_PAYMENT:
      return {
        ...state,
        createPayment: { dyehouse: action.payload },
      };
    default:
      return state;
  }
};
