import RequestManager from "../commons/request_manager";

export const getListPayment = (dyehouseId) => {
  return RequestManager.get(
    `/listPayment?dyehouseId=${dyehouseId ?? -1}&pageIndex=0&pageSize=100`
  );
};

export const getListPaymentMethod = () => {
  return RequestManager.get(`/listPaymentMethod`);
};

export const createPayment = (body) => {
  return RequestManager.post(`/createPayment`, body, "application/json");
};
