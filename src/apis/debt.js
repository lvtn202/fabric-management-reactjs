import RequestManager from "../commons/request_manager";

export const getDebtDetail = (id, startDate, endDate) => {
  return RequestManager.get(
    `/debt?dyehouseId=${id ?? -1}&startDate=${startDate}&endDate=${endDate}`
  );
};
