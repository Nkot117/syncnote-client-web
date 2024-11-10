import axios from "axios";
const BASE_URL = "http://localhost:8080";
const axiosClient = axios.create({ baseURL: BASE_URL });

axiosClient.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
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