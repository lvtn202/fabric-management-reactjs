import { Alert } from "./../constants/action_types";

const defaultState = {
  errorMsg: "",
  successMsg: "",
  showSuccessMsg: false,
  showErrorMsg: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Alert.SHOW_SUCCESS_MESSAGE:
      return {
        ...state,
        showSuccessMsg: true,
        successMsg: action.payload.successMsg,
      };
    case Alert.HIDE_SUCCESS_MESSAGE:
      return { ...state, showSuccessMsg: false };
    case Alert.SHOW_ERROR_MESSAGE:
      return {
        ...state,
        showErrorMsg: true,
        errorMsg: action.payload.errorMsg,
      };
    case Alert.HIDE_ERROR_MESSAGE:
      return { ...state, showErrorMsg: false };
    default:
      return state;
  }
};
