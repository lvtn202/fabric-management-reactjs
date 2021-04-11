import {
  TOGGLE_SIDEBAR,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
} from "../constants/action_types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = true, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    case OPEN_SIDEBAR:
      return true;
    case CLOSE_SIDEBAR:
      return false;
    default:
      return state;
  }
};
