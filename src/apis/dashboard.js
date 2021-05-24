import RequestManager from "../commons/request_manager";

export const getRecentPayment = (dyehouseId, period) => {
  return RequestManager.get(
    `/totalRecentPayment?dyehouseId=${dyehouseId ?? -1}&period=${period ?? 7}`
  );
};

export const getRecentImport = (dyehouseId, pageSize, pageIndex) => {
  return RequestManager.get(
    `/listRecentImportSlip?dyehouseId=${dyehouseId ?? -1}&pageSize=${
      pageSize ?? 5
    }&pageIndex=${pageIndex ?? 0}`
  );
};

export const getRecentExport = (dyehouseId, pageSize, pageIndex) => {
  return RequestManager.get(
    `/listRecentExportSlip?dyehouseId=${dyehouseId ?? -1}&pageSize=${
      pageSize ?? 5
    }&pageIndex=${pageIndex ?? 0}`
  );
};

export const getStatisticFabric = (dyehouseId) => {
  return RequestManager.get(
    `/getStatisticFabric?dyehouseId=${dyehouseId ?? -1}`
  );
};

export const getInforExportedFabric = () => {
  return RequestManager.get(`/getInforExportedFabric`);
};

export const getInforCompletedFabricByType = (
  fabricType,
  startDate,
  endDate
) => {
  return RequestManager.get(
    `/getInforCompletedFabricByType?fabricType=${fabricType ?? ""}&startDate=${
      startDate ?? ""
    }&endDate=${endDate ?? ""}`
  );
};

export const getInforCompletedFabricByDyehouse = (
  dyehouseId,
  startDate,
  endDate
) => {
  return RequestManager.get(
    `/getInforCompletedFabricByDyehouse?dyehouseId=${
      dyehouseId ?? ""
    }&startDate=${startDate ?? ""}&endDate=${endDate ?? ""}`
  );
};

export const getInforCompletedFabricByDyehouseRecentYear = (dyehouseId) => {
  return RequestManager.get(
    `/getInforCompletedFabricByDyehouseRecentYear?dyehouseId=${dyehouseId ?? ""}`
  );
};
