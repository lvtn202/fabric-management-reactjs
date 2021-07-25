import { Debt } from "./../constants/action_types";

const defaultState = {
  detailDebt: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Debt.FETCH_DEBT_DETAIL:
    case Debt.FETCH_DEBT_DETAIL_FAILED:
      return {
        detailDebt: {},
        ...state,
      };
    case Debt.FETCH_DEBT_DETAIL_SUCCESS:
      return {
        ...state,
        detailDebt: action.payload.data.result,
      };
    default:
      return state;
  }
};
