import authApi from "../api/features/authApi";
import authHelper from "../helpers/authHelper";

const authService = {
  login: async (data: { email: string; password: string }) => {
    try {
      const response = await authApi.login(data);
      authHelper.saveAccessToken(response.accessToken);
      authHelper.saveRefreshToken(response.refreshToken);
    } catch (error) {
      throw error;
    }
  },
  register: async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await authApi.register(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
