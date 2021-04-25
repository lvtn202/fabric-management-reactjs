import RequestManager from "../commons/request_manager";

export const getListRawExport = (fabricType) => {
  return RequestManager.get(`/listRawFabric?fabricType=${fabricType ?? ""}`);
};

export const createExport = (body) => {
  return RequestManager.post('/createExportSlip', body, "application/json")
}