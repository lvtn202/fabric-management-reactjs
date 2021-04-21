import RequestManager from "../commons/request_manager";

export const getListRaw = (id) => {
  return RequestManager.get(
    `/listStatisticRawFabric?dyehouseId=${id ?? -1}&pageSize=100&pageIndex=0`
  );
};

export const getListFabric = (id, startDate, endDate) => {
  return RequestManager.get(
    `/listStatisticCompletedFabricInDyehouse?dyehouseId=${
      id ?? -1
    }&startDate=${startDate}&endDate=${endDate}&pageSize=100&pageIndex=0`
  );
};

export const getListRawAllPlants = () => {
  return RequestManager.get(
    `/listStatisticExportedFabric?pageSize=100&pageIndex=0`
  );
};

export const getListFabricType = () => {
  return RequestManager.get("/listFabricType");
};
