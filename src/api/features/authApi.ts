import axiosClient from "../index";

const authApi = {
  login: (data: { email: string; password: string }) => {
    return axiosClient.post("api/user/login", data);
  },
};

export default authApi;