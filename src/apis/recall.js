import RequestManager from "../commons/request_manager";

export const getListRecall = () => {
  return RequestManager.get(`/listReturnSlip?pageSize=100&pageIndex=0`);
};

export const getDetailRecall = (returnSlipId) => {
  return RequestManager.get(
    `/detailReturnSlip?returnSlipId=${returnSlipId ?? ""}`
  );
};

export const getListFabric = (returnSlipId) => {
  return RequestManager.get(
    `/listReturn?returnSlipId=${returnSlipId ?? ""}`
  );
};