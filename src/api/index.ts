import axios from "axios";
import authHelper from "../helpers/authHelper";
const BASE_URL = import.meta.env.VITE_BASE_URL
const axiosClient = axios.create({ baseURL: BASE_URL });
axiosClient.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authHelper.getAccessToken()}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;