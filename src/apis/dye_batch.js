import RequestManager from '../commons/request_manager'

export const getList = (keyword) => {
    return RequestManager.get(`/listDyeBatch?importSlipId=-1&pageSize=100&pageIndex=0`)
}