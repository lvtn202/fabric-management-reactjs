import RequestManager from "../commons/request_manager";

export const getListRecall = () => {
  return RequestManager.get(`/listReturnSlip?pageSize=100&pageIndex=0`);
};

export const getDetailRecall = (returnSlipId) => {
  return RequestManager.get(
    `/detailReturnSlip?returnSlipId=${returnSlipId ?? ""}`
  );
};

// List fabric in detail
export const getListFabric = (returnSlipId) => {
  return RequestManager.get(`/listReturn?returnSlipId=${returnSlipId ?? ""}&pageSize=100&pageIndex=0`);
};

// List fabric in create
export const getListFabricDyeplant = (dyehouseId) => {
  return RequestManager.get(
    `/listCompletedFabric?dyehouseId=${
      dyehouseId ?? ""
    }&pageSize=100&pageIndex=0`
  );
};

export const createRecall = (body) => {
  return RequestManager.post("/createReturnSlip", body, "application/json");
};
