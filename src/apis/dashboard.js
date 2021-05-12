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
