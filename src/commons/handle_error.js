import { Alert } from "../constants/action_types";
import { LOGIN } from "../constants/path";
import { errorMapping } from "./error_mapping";
import history from "./history";

export const showError = (error, status) => {
  if (status <= 299) {
    if (error === "ERROR_TOKEN") {
      setTimeout(() => {
        history.push(LOGIN);
        window.location.reload();
      }, 1000);
    }
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
