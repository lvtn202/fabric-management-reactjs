import axios from "axios";
import { HIDE_LOADING, SHOW_LOADING } from "../constants/action_types";
import { store } from "./../store";
import { showError } from "./handle_error";

// const API_ROOT = " http://localhost:3000"; //local
// const API_ROOT = "http://10.127.175.248:8080";   //HCMUT-Meeting
// const API_ROOT = "http://192.168.0.113:8080";
const API_ROOT = "https://api-fabric-management.herokuapp.com"; // Production
// const API_ROOT = "https://api-fabric-management-staging.herokuapp.com"; // Staging

class RequestManager {
  constructor() {
    const instance = axios.create();
    instance.interceptors.request.use(this.handleRequest, null);
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
    this.token = "";
  }

  setToken(token) {
    console.log(`set token ${token}`);
    this.token = token;
  }

  handleRequest(config) {
    store.dispatch({ type: SHOW_LOADING });
    const user = window.localStorage.getItem("user");
    if (user) {
      const token = JSON.parse(user).token;
      config.headers.token = token;
    }
    return config;
  }

  handleSuccess(response) {
    store.dispatch({ type: HIDE_LOADING });
    return response;
  }

  handleError(error) {
    store.dispatch(showError(error, error.status));
    store.dispatch({ type: HIDE_LOADING });
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(`${API_ROOT}${url}`);
  }

  post(url, body, contentType = "application/x-www-form-urlencoded") {
    return this.instance.post(`${API_ROOT}${url}`, body, {
      headers: { "content-type": contentType },
    });
  }

  put(url, body) {
    return this.instance.put(`${API_ROOT}${url}`, body);
  }

  delete(url) {
    return this.instance.delete(`${API_ROOT}${url}`);
  }
}

export default new RequestManager();
