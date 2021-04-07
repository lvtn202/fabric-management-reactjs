import RequestManager from '../commons/request_manager'

export const getList = () => {
    return RequestManager.get('/listDyehouse?dyehouseName=&pageSize=100&pageIndex=0')
}

export const getDetail = (id) => {
    return RequestManager.get(`/detailDyehouse?id=${id}`);
}