import axios from "axios";

// const API_ROOT = " http://localhost:3000"; //local
// const API_ROOT = "http://10.127.175.248:8080";   //HCMUT-Meeting
// const API_ROOT = "http://192.168.0.113:8080"; 
// const API_ROOT = "https://api-fabric-management.herokuapp.com"; // Production
const API_ROOT = "https://api-fabric-management-staging.herokuapp.com"; // Staging


class RequestManager {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
    this.token = "";
  }

  setToken(token) {
    console.log(`set token ${token}`);
    this.token = token;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(`${API_ROOT}${url}`, {
      headers: { token: this.token },
    });
  }

  post(url, body, contentType = "application/x-www-form-urlencoded") {
    return this.instance.post(`${API_ROOT}${url}`, body, {
      headers: { "content-type": contentType, token: this.token },
    });
  }

  put(url, body) {
    return this.instance.put(`${API_ROOT}${url}`, body, {
      headers: { token: this.token },
    });
  }

  delete(url) {
    return this.instance.delete(`${API_ROOT}${url}`, {
      headers: { token: this.token },
    });
  }
}

export default new RequestManager();
