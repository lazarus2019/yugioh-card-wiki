import axiosClient from "./axiosClient";

const yugiohAPI = {
  test: (params) => {
    const url = "/";
    return axiosClient.get(url, params);
  },
};

export default yugiohAPI;
