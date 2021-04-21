import { Auth } from "../constants/action_types";
import RequestManager from "../commons/request_manager";

const defaultState = {
  id: -1,
  firstName: "",
  lastName: "",
  email: "",
  sex: "",
  roles: "",
  token: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Auth.LOGIN:
      return {
        ...defaultState,
      };
    case Auth.LOGIN_SUCCESS:
      RequestManager.setToken(action.payload.data.result.token);
      return {
        ...action.payload.data.result,
      };
    case Auth.LOGIN_FAILED:
    case Auth.LOGOUT:
      RequestManager.setToken("");
      return {
        ...defaultState,
      };
    case Auth.REGISTER:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null,
      };
    default:
      return state;
  }
};
