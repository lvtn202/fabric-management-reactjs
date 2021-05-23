import { Admin } from "../constants/action_types";

const defaultState = {
  listUser: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Admin.FETCH_LIST_USER:
    case Admin.FETCH_LIST_USER_FAILED:
      return {
        listUser: [],
        ...state,
      };
    case Admin.FETCH_LIST_USER_SUCCESS:
      return {
        ...state,
        listUser: action.payload.data.result,
      };
    default:
      return state;
  }
};
