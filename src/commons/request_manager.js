import axios from "axios";

// const API_ROOT = 'http://localhost:3000';
const API_ROOT = "http://192.168.0.125:8080";

class RequestManager {
  constructor() {
    const token = "token ";
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
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
      headers: { token: "token" },
    });
  }
}

export default new RequestManager();
