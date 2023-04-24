import axiosClient from "./axiosClient";

const tableApi = {
  getData() {
    const url = `/todos`;
    return axiosClient.get(url);
  },
};

export default tableApi;
