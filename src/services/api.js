import axios from "axios";
import { getToken } from "./auth";

// baseURL API
const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});


/**
Here the Axios interceptors were used,
 as the name suggests it intercepts a request before it actually happens,
  at that moment it is checked if there is a token in the localStorage,
   and if it exists, it adds the Authorization Header to the request.
 */
api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;