import RequestManager from '../commons/request_manager'

export const getList = (keyword) => {
    return RequestManager.get(`/listDyeBatch?importSlipId=-1&pageSize=100&pageIndex=0`)
}

export const getDetail = (dyeBatchId) => {
    return RequestManager.get(`/detailDyeBatch?dyeBatchId=${dyeBatchId}`)
}

export const getListFabric = (dyeBatchId) => {
    return RequestManager.get(`/listFabricOfDyeBatch?dyeBatchId=${dyeBatchId}`)
}