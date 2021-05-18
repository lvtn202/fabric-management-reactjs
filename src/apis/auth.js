import RequestManager from "../commons/request_manager";

export const login = (body) => {
    return RequestManager.post('/login', body, "application/json")
}

export const signup = (body) => {
    return RequestManager.post('/signUp', body, "application/json")
}

export const sendMailResetPassword = (body) => {
    return RequestManager.post('/getEmailResetPassword', body, "application/json")
}

export const resetPassword = (body) => {
    return RequestManager.put('/resetPassword', body, "application/json")
}

export const checkTokenResetPassword = (body) => {
    return RequestManager.post('/checkTokenResetPassword', body, "application/json")
}

