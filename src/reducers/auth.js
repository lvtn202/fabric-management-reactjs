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
      RequestManager.setToken(action.payload.token);
      return {
        ...action.payload,
      };
    case Auth.LOGIN_FAILED:
    case Auth.LOGOUT:
      RequestManager.setToken("");
      window.localStorage.clear();
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
