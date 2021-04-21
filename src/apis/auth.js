import RequestManager from "../commons/request_manager";

export const login = (body) => {
    return RequestManager.post('/login', body, "application/json")
}