import axios from "axios";
import apiConfig from "./apiConfig";
import queryString from "query-string";

const axiosClient = new axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  // paramsSerializer: (params) => queryString.stringify({ ...params }),
});

axiosClient.interceptors.request.use(
  async (config) => config,
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
