import RequestManager from '../commons/request_manager'

export const getList = (orderId) => {
    return RequestManager.get(`/listImportSlipOfOrder?orderId=${orderId}&pageSize=100&pageIndex=0`)
}

export const getListExportedFabric = (dyehouseId, fabricType) => {
    return RequestManager.get(`/listExportedFabric?dyehouseId=${dyehouseId}&fabricType=${fabricType}`)
}

export const getDyeingPrice = (fabricType, color) => {
    return RequestManager.get(`/getPrice?fabricType=${fabricType}&color=${color}`)
}

export const createImport = (body) => {
    return RequestManager.post('/createImportSlip', body, "application/json")
}

