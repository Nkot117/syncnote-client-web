import axiosClient from "../index";
import { LoginRequest } from "../../models/login/LoginRequest";
import { LoginResponse } from "../../models/login/LoginResponse";
import { RegisterRequest } from "../../models/register/RegisterRequest";

const authApi = {
  login: (data: LoginRequest) => {
    return axiosClient
      .post<LoginResponse>("api/user/login", data)
      .then((response) => response.data);
  },
  register: (data: RegisterRequest) => {
    return axiosClient.post("api/user/register", data);
  },
  delete: () => {
    return axiosClient.delete("api/user/delete")
  }
};

export default authApi;
