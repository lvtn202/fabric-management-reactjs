import RequestManager from '../commons/request_manager'

export const getList = (dyehouseId) => {
    return RequestManager.get(`/listOrder?dyehouseId=${dyehouseId}&pageSize=100&pageIndex=0`)
}

export const getDetail = (id) => {
    return RequestManager.get(`/detailOrder?id=${id}`);
}