import axiosClient from "./axiosClient";

const yugiohAPI = {
  test: (params) => {
    const url = "/cardinfo.php";
    return axiosClient.get(url, params);
  },
  random: () => {
    const url = "/randomcard.php";
    return axiosClient.get(url);
  },
};

export default yugiohAPI;
