import axios from "axios";

// const API_ROOT = 'http://localhost:3000';
const API_ROOT = "http://192.168.0.125:8080";       //KTX
// const API_ROOT = "http://10.127.175.248:8080";   //HCMUT-Meeting

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

  post(url, body) {
    return this.instance.post(`${API_ROOT}${url}`, body, {
      headers: { token: "token" },
    });
  }

  put(url, body) {
    return this.instance.put(`${API_ROOT}${url}`, body, {
      headers: { token: "token" },
    });
  }

  delete(url) {
    return this.instance.delete(`${API_ROOT}${url}`, {
      headers: { token: "token" },
    });
  }
}

export default new RequestManager();
