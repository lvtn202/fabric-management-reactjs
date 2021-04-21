import { Alert } from "../constants/action_types";
import { errorMapping } from "./error_mapping";

export const showError = (error, status) => {
  if (status <= 299) {
    error = errorMapping(error);
    return {
      type: Alert.SHOW_ERROR_MESSAGE,
      payload: {
        errorMsg: error,
      },
    };
  } else {
    error = `${errorMapping("SYSTEM_ERROR")}: ${error}`;
    return {
      type: Alert.SHOW_ERROR_MESSAGE,
      payload: {
        errorMsg: error,
      },
    };
  }
};
