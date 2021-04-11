import RequestManager from '../commons/request_manager'

export const getList = (orderId) => {
    return RequestManager.get(`/listImportSlipOfOrder?orderId=${orderId}&pageSize=100&pageIndex=0`)
}