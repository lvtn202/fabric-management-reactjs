import * as apis from "./../apis/debt";
import { Debt } from "../constants/action_types";
import { showError } from "./../commons/handle_error";


export const getDebtDetail = () => ({
    type: Debt.FETCH_DEBT_DETAIL,
  });
  
  export const getDebtDetailSuccess = (data) => ({
    type: Debt.FETCH_DEBT_DETAIL_SUCCESS,
    payload: data,
  });
  
  export const getDebtDetailFailed = (error) => ({
    type: Debt.FETCH_DEBT_DETAIL_FAILED,
    payload: error,
  });
  
  export const getDebtDetailRequest = (id, startDate, endDate) => {
    return (dispatch) => {
      dispatch(getDebtDetail());
      apis
        .getDebtDetail(id, startDate, endDate)
        .then((data) => {
          if (data.data.status === 1) {
            dispatch(getDebtDetailSuccess(data));
          } else {
            dispatch(showError(data.data.status_code, data.status));
          }
        })
        .catch((error) => {
          dispatch(getDebtDetailFailed(error));
        });
    };
  };