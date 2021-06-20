import RequestManager from '../commons/request_manager'

export const getList = (dyehouseId) => {
    return RequestManager.get(`/listOrder?dyehouseId=${dyehouseId}&pageSize=100&pageIndex=0`)
}



export const getListOrderImport = (dyehouseId, fabricType, color) => {
    return RequestManager.get(
      `/listOrderAdvance?dyehouseId=${dyehouseId ?? ""}&fabricType=${fabricType ?? ""}&color=${color ?? ""}`
    );
  };

export const getDetail = (id) => {
    return RequestManager.get(`/detailOrder?id=${id}`);
}

export const createOrder = (body) => {
    return RequestManager.post('/createOrder', body, "application/json")
}

export const completeOrder = (body) => {
    return RequestManager.post('/completedOrder', body, "application/json")
}