import axiosClient from "../index";

const authApi = {
  login: (data: { email: string; password: string }) => {
    return axiosClient.post("api/user/login", data);
  },
  register: (data: { name: string; email: string; password: string }) => {
    return axiosClient.post("api/user/register", data);
  },
};

export default authApi;
